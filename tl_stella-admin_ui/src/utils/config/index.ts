import {
  FormNameLabelMapping,
  StepLabels,
} from "src/components/forms/onboarding/common/steps";
import { initialState } from "src/features/onboarding/initial-state";
import {
  setFormsSaved,
  setFormSubmitted,
  updateCallRoutingSetUp,
  updateDealershipInfo,
  updateCallConfiguration,
  updateTechnologySetUp,
  updateWorkingHours,
} from "src/features/onboarding/onboarding.slice";
import {
  CallRoutingSetUp,
  DealershipInfo,
  CallConfiguration,
  TechnologySetUp,
  WorkingHours,
} from "src/features/onboarding/onboarding.types";
import { platformConfigApi } from "src/services/platform/config";
import { AppDispatch } from "src/store/store";
import {
  ConfigKey,
  ConfigSet,
  ConfigSetName,
  ConfigSetNamePair,
  FormName,
  ParentConfigSetName,
} from "src/utils/config/config.types";
import { getCallRoutingDealerAgentFieldValues } from "./transformers/call-routing";
import { decodeBase64 } from "../string";
import {
  configKeyFormFieldMapping,
  formFieldMetaMapping,
} from "./field-mapping";
import {
  getHolidaysFormData,
  getHoursFormData,
} from "./transformers/operating-hours";

const NAMESPACE = "automotive";

const getConfigSetCanonicalName = (
  configSetNamePair: ConfigSetNamePair<ParentConfigSetName, ConfigSetName>
) => {
  return `${NAMESPACE}:${configSetNamePair[0]}:${configSetNamePair[1]}`;
};

const getConfigPropertyValue = (configSets: ConfigSet[], key: ConfigKey) => {
  if (!configSets?.length) {
    return;
  }

  for (const configSet of configSets) {
    if (!configSet.properties?.length) {
      continue;
    }

    for (const property of configSet.properties) {
      if (property.key === key) {
        return property.value;
      }
    }
  }
};

const getConfigSetTemplate = (
  tenant_id: string,
  parent_id: string,
  configSetNamePair: ConfigSetNamePair<ParentConfigSetName, ConfigSetName>
): ConfigSet => {
  return {
    name: configSetNamePair[1],
    namespace: NAMESPACE,
    canonical_name: getConfigSetCanonicalName(configSetNamePair),
    tenant_id,
    parent_id,
    properties: [],
  };
};

const getConfigSet = async (
  tenant_id: string,
  rootConfigSets: ConfigSet[],
  configSetNamePair: ConfigSetNamePair<ParentConfigSetName, ConfigSetName>,
  dispatch: AppDispatch
): Promise<ConfigSet | undefined> => {
  const configResponse = await dispatch(
    platformConfigApi.endpoints.getConfigSetsForTenant.initiate({
      canonical_name: getConfigSetCanonicalName(configSetNamePair),
      tenant_id,
    })
  );

  if (!configResponse.error && configResponse.data?.length) {
    return { ...configResponse.data[0] };
  }

  const parentConfigId = getParentConfigSetIdByName(rootConfigSets);

  if (!parentConfigId) {
    return;
  }

  // if not found, return from template
  return getConfigSetTemplate(tenant_id, parentConfigId, configSetNamePair);
};

const getDecodedValue = (value: string, inputType = "string") => {
  const decodedValue = decodeBase64(value);

  switch (inputType) {
    case "number":
      return Number(decodedValue);
    case "boolean":
      return decodedValue === "true";
    case "array":
      return decodedValue.split(",");
    case "object":
      return JSON.parse(decodedValue);
    default:
      return decodedValue;
  }
};

const getFormDataFromConfigSets = (configSets: ConfigSet[]) => {
  if (!configSets?.length) {
    return;
  }

  const result: Record<FormName, ReturnType<typeof getDecodedValue>> = {
    dealershipInfo: {},
    workingHours: {},
    technologySetUp: {},
    callRoutingSetUp: {},
    callConfiguration: {},
  };

  for (const configSet of configSets) {
    if (!configSet.properties?.length) {
      continue;
    }
    for (const property of configSet.properties) {
      const fieldName =
        configKeyFormFieldMapping.get(property.key) ||
        configKeyFormFieldMapping.get(`${property.key}:${configSet.name}`);

      if (!fieldName) {
        continue;
      }

      const fieldMeta = formFieldMetaMapping.get(fieldName);

      if (!fieldMeta) {
        continue;
      }

      const decodedValue = getDecodedValue(
        property.value as string,
        fieldMeta.inputType
      );

      if (property.key === "DepartmentAgents" || property.key === "Agents") {
        const additionalFields =
          getCallRoutingDealerAgentFieldValues(decodedValue);
        result[fieldMeta.formName] = {
          ...additionalFields,
          ...result[fieldMeta.formName],
        };
      } else if (
        property.key === "OperatingHours" ||
        property.key === "Holidays"
      ) {
        const hoursFields =
          property.key === "OperatingHours"
            ? getHoursFormData(decodedValue)
            : getHolidaysFormData(decodedValue);
        let storeHoursFields = [];
        let serviceHoursFields = [];
        let closedHolidaysFields = [];
        if (property.key === "Holidays") {
          closedHolidaysFields = hoursFields;
          result[fieldMeta.formName].closedHolidays = closedHolidaysFields;
        } else if (
          configSet.name === "Receptionist" &&
          property.key === "OperatingHours"
        ) {
          storeHoursFields = hoursFields;
          result[fieldMeta.formName].storeHours = storeHoursFields;
        } else if (configSet.name === "ServiceScheduling") {
          serviceHoursFields = hoursFields;
          result[fieldMeta.formName].serviceHours = serviceHoursFields;
        }
      } else {
        result[fieldMeta.formName][fieldName] = decodedValue;
      }
    }
  }
  return result;
};

const updateFormsSavedStatus = (
  formData: Record<FormName, ReturnType<typeof getDecodedValue>>,
  dispatch: AppDispatch
) => {
  const formsSaved: StepLabels[] = [];

  for (const formName of Object.keys(formData)) {
    const formLabel = FormNameLabelMapping.get(formName as FormName);
    if (Object.keys(formData[formName as FormName]).length > 0 && formLabel) {
      formsSaved.push(formLabel);
    }
  }

  dispatch(setFormsSaved(formsSaved));
};

const updateOnboardingFormSubmittedStatus = (
  configSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  const submitted = getConfigPropertyValue(
    configSets,
    "DealerAppOnboardingCompleted"
  );

  dispatch(
    setFormSubmitted(
      submitted ? getDecodedValue(submitted as string, "boolean") : false
    )
  );
};

const setOnboardingInitialState = (
  configSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  const formData = getFormDataFromConfigSets(configSets);
  const {
    dealershipInfo,
    technologySetUp,
    callRoutingSetUp,
    callConfiguration,
    workingHours,
  } = initialState;

  if (!formData) {
    return;
  }

  if (formData.dealershipInfo) {
    const data = { ...dealershipInfo, ...formData.dealershipInfo };
    dispatch(updateDealershipInfo(data as DealershipInfo));
  }

  if (formData.workingHours) {
    const data = { ...workingHours, ...formData.workingHours };
    dispatch(updateWorkingHours(data as WorkingHours));
  }

  if (formData.technologySetUp) {
    const data = {
      ...technologySetUp,
      ...formData.technologySetUp,
    };
    dispatch(updateTechnologySetUp(data as TechnologySetUp));
  }

  if (formData.callRoutingSetUp) {
    const data = {
      ...callRoutingSetUp,
      ...formData.callRoutingSetUp,
    };
    dispatch(updateCallRoutingSetUp(data as CallRoutingSetUp));
  }

  if (formData.callConfiguration) {
    const data = {
      ...callConfiguration,
      ...formData.callConfiguration,
    };
    dispatch(updateCallConfiguration(data as CallConfiguration));
  }

  updateFormsSavedStatus(formData, dispatch);
  updateOnboardingFormSubmittedStatus(configSets, dispatch);
};

const getParentConfigSetIdByName = (
  configSets: ConfigSet[],
  parentConfigSetName: ParentConfigSetName = "DealerInfo"
): string | undefined => {
  return configSets.find((configSet) => configSet.name === parentConfigSetName)
    ?.config_set_id;
};

export { getGeneralConfig } from "./dealer-info/general";
export { getReceptionistConfig } from "./dealer-info/receptionist";
export { getServiceSchedulingConfig } from "./dealer-info/service-scheduling";
export {
  getConfigSet,
  getConfigSetTemplate,
  getParentConfigSetIdByName,
  setOnboardingInitialState,
};
