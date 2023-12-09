import {
  CallConfiguration,
  TechnologySetUp,
  WorkingHours,
} from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import { getConfigSet } from "..";
import { getEncodedProperties } from "../common";
import { ConfigKey, ConfigProperty, ConfigSet } from "../config.types";
import {
  callConfigurationConfigKeyFormFieldMapping,
  callConfigurationFormFieldMetaMapping,
  technologySetUpConfigKeyFormFieldMapping,
  technologySetupFormFieldMetaMapping,
} from "../field-mapping";
import { getFormattedHoursJsonString } from "../transformers/operating-hours";

const getServiceSchedulingConfig = (
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  const serviceSchedulingConfigSet = getConfigSet(
    tenantId,
    rootConfigSets,
    ["DealerInfo", "ServiceScheduling"],
    dispatch
  );

  return serviceSchedulingConfigSet;
};

const generateWorkingHoursProperties = (
  workingHours: WorkingHours,
  propertyIdMap: Map<ConfigKey, string>
) => {
  const properties: ConfigProperty[] = [
    {
      key: "OperatingHours",
      type: "Str",
      value: getFormattedHoursJsonString(workingHours?.serviceHours ?? []),
      id: propertyIdMap.get("OperatingHours") || undefined,
    },
  ];
  return getEncodedProperties(properties);
};

const generateTechnologySetUpProperties = (
  technologySetUp: TechnologySetUp,
  propertyIdMap: Map<ConfigKey, string>
) => {
  const properties: ConfigProperty[] = [];
  for (const [
    key,
    value,
  ] of technologySetUpConfigKeyFormFieldMapping.entries()) {
    const meta = technologySetupFormFieldMetaMapping.get(value);
    if (meta && meta.configSetName === "ServiceScheduling") {
      const property: ConfigProperty = {
        key,
        type: meta.outputType || "Str",
        value:
          meta.inputType === "object"
            ? JSON.stringify(technologySetUp?.[value] ?? {})
            : (technologySetUp?.[value] as string) ?? "",
        id: propertyIdMap.get(key) || undefined,
      };
      properties.push(property);
    }
  }
  return getEncodedProperties(properties);
};

const generateCallConfigurationProperties = (
  callConfiguration: CallConfiguration,
  propertyIdMap: Map<ConfigKey, string>
) => {
  const properties: ConfigProperty[] = [];
  for (const [
    key,
    value,
  ] of callConfigurationConfigKeyFormFieldMapping.entries()) {
    const meta = callConfigurationFormFieldMetaMapping.get(value);
    if (meta && meta.configSetName === "ServiceScheduling") {
      const property: ConfigProperty = {
        key,
        type: meta.outputType || "Str",
        value: callConfiguration?.[value] ?? "",
        id: propertyIdMap.get(key) || undefined,
      };
      properties.push(property);
    }
  }
  return getEncodedProperties(properties);
};

export {
  getServiceSchedulingConfig,
  generateCallConfigurationProperties,
  generateTechnologySetUpProperties,
  generateWorkingHoursProperties,
};
