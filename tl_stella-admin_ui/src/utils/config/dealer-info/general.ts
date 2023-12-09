import { StepLabels } from "src/components/forms/onboarding/common/steps";
import {
  CallRoutingSetUp,
  DealershipInfo,
  EmployeeDirectoryItem,
  OnboardingState,
  WorkHoursType,
} from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import { getConfigSet } from "..";
import { getEncodedProperties } from "../common";
import { ConfigKey, ConfigProperty, ConfigSet } from "../config.types";
import {
  callRoutingSetUpConfigKeyFormFieldMapping,
  callRoutingSetUpFormFieldMetaMapping,
  dealerInfoFormFieldMetaMapping,
  dealershipInfoConfigKeyFormFieldMapping,
} from "../field-mapping";

export type EmployeeAgentType = {
  Name: string;
  FirstName: string;
  LastName: string;
  DefaultGroup: boolean;
  Group: boolean;
  Extension: string;
  Mobile: string;
  Role: string;
  Language: string[];
  VoiceMailEnabled: boolean;
  VoiceMailAddress: string;
  VoiceMailSms: string;
  Work: WorkHoursType[];
};

export type CallRoutingDataObjectType = {
  Name: string;
  DefaultGroup: boolean;
  Group: boolean;
  Extension: string;
  VoiceMailEnabled: boolean;
  VoiceMailAddress: string;
  VoiceMailSms: string;
  Address: string;
  Work: WorkHoursType[];
  Agents: EmployeeAgentType[];
};

export type AgentsDataObjectType = {
  Name: string;
  Extension: string;
  DefaultGroup: boolean;
  Group: boolean;
  Language: string[];
  Work: WorkHoursType[];
};

const getGeneralConfig = async (
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  const generalConfigSet = await getConfigSet(
    tenantId,
    rootConfigSets,
    ["DealerInfo", "General"],
    dispatch
  );

  return generalConfigSet;
};

const generateDealerInfo = (
  dealerInfo: DealershipInfo | undefined,
  propertyIdMap: Map<ConfigKey, string>,
  onboardingState: OnboardingState,
  returnUnencodedProperties = false
) => {
  let properties: ConfigProperty[] = [];
  const hasSavedCallRouting = onboardingState.formsSaved.includes(
    StepLabels.CALL_ROUTING
  );
  for (const [
    key,
    value,
  ] of dealershipInfoConfigKeyFormFieldMapping.entries()) {
    const meta = dealerInfoFormFieldMetaMapping.get(value);
    if (meta && meta.configSetName === "General") {
      const property: ConfigProperty = {
        key,
        type: meta.outputType || "Str",
        value: dealerInfo?.[value] ?? "",
        id: propertyIdMap.get(key) || undefined,
      };
      properties.push(property);
    }
  }

  /**
   * If saving the Dealer Info form we need to also check Call Routing form state and
   * add these values to the /config/update request since Dealer Info and part of Call Routing forms
   * use the same namespace `canonical_name: automotive:DealerInfo:General`.
   *
   * If we do not do this check then any saved values on Call Routing form would be removed from
   * the db.
   */
  if (
    hasSavedCallRouting &&
    !returnUnencodedProperties &&
    onboardingState.callRoutingSetUp
  ) {
    const callRoutingProperties = generateCallRoutingSetUpProperties(
      onboardingState.callRoutingSetUp,
      propertyIdMap,
      onboardingState,
      true
    );

    properties = [...properties, ...callRoutingProperties];
  }

  // If Call Routing form is being saved then we need to add Delaer Info field state to /config/update
  if (returnUnencodedProperties) {
    return properties;
  }
  return getEncodedProperties(properties);
};

const generateCallRoutingSetUpProperties = (
  callRoutingSetUp: CallRoutingSetUp,
  propertyIdMap: Map<ConfigKey, string>,
  onboardingState: OnboardingState,
  returnUnencodedProperties = false
) => {
  const hasSavedDealerInfo = onboardingState.formsSaved.includes(
    StepLabels.DEALERSHIP_INFO
  );
  let properties: ConfigProperty[] = [];

  /**
   * The following 3 objects are how data is expected to be passed to the db.
   * Because there is no 1:1 field mapping for Call Routing like on other forms (e.g. Dealer Info)
   * and the data is expected to be passed in a single stringified JSON array (passed as type = Str)
   * we have to create and then modify, as necessary, these objects in the code that follows.
   *
   * It's not pretty but it's the best we can do with what is expected by BE.
   * We hope to be able to clean this up in the near future.
   */
  const partsDataObject: CallRoutingDataObjectType = {
    Name: "Parts",
    DefaultGroup: false,
    Group: false,
    Extension: "",
    VoiceMailEnabled: false,
    VoiceMailAddress: "",
    VoiceMailSms: "",
    Address: "",
    Work: [],
    Agents: [],
  };

  const salesDataObject: CallRoutingDataObjectType = {
    Name: "Sales",
    DefaultGroup: false,
    Group: false,
    Extension: "",
    VoiceMailEnabled: false,
    VoiceMailAddress: "",
    VoiceMailSms: "",
    Address: "",
    Work: [],
    Agents: [],
  };

  const serviceDataObject: CallRoutingDataObjectType = {
    Name: "Service",
    DefaultGroup: false,
    Group: false,
    Extension: "",
    VoiceMailEnabled: false,
    VoiceMailAddress: "",
    VoiceMailSms: "",
    Address: "",
    Work: [],
    Agents: [],
  };

  const usedCarsDataObject: CallRoutingDataObjectType = {
    Name: "UsedCars",
    DefaultGroup: false,
    Group: false,
    Extension: "",
    VoiceMailEnabled: false,
    VoiceMailAddress: "",
    VoiceMailSms: "",
    Address: "",
    Work: [],
    Agents: [],
  };
  const agentsDataArray: AgentsDataObjectType[] = [];

  for (const [
    key,
    value,
  ] of callRoutingSetUpConfigKeyFormFieldMapping.entries()) {
    const agentsDataObject: AgentsDataObjectType = {
      Name: "",
      Extension: "",
      DefaultGroup: false,
      Group: false,
      Language: [],
      Work: [],
    };
    /**
     * These field prefixes are for all the fields that get saved under `DepartmentAgents` key.
     * These fields' values will be sent in the /config/add /config/update calls under the
     * `callRouting` field-mapping field key.
     *
     * Agents-related fields get saved under `Agents` key.
     */
    const isAgentsField =
      value === "spanishTransferNumber" ||
      value === "receptionistPhoneNumber" ||
      value === "emergencyRoadsideAssistance";
    const skipAddProperty =
      value.indexOf("parts") === 0 ||
      value.indexOf("sales") === 0 ||
      value.indexOf("service") === 0 ||
      value.indexOf("preownedSales") === 0 ||
      isAgentsField;
    const meta = callRoutingSetUpFormFieldMetaMapping.get(value);
    if (skipAddProperty) {
      const isParts = value.indexOf("parts") === 0;
      const isUsedCars = value.indexOf("preownedSales") === 0;
      const isSales = value.indexOf("sales") === 0;
      const isService = value.indexOf("service") === 0;
      const isSpanishTransferNumber = value === "spanishTransferNumber";
      let fieldType;

      if (isAgentsField) {
        agentsDataObject.Name =
          value === "spanishTransferNumber"
            ? "SpanishSpeakingPhoneNumber"
            : value === "emergencyRoadsideAssistance"
            ? "EmergencyNumber"
            : "ExternalCustomerService"; // value === "receptionistPhoneNumber"
        agentsDataObject.Extension = callRoutingSetUp[value] as string;
        agentsDataObject.Language.push(
          isSpanishTransferNumber ? "Spanish" : "English"
        );
        agentsDataArray.push(agentsDataObject);
      } else {
        if (isParts) {
          fieldType = value.split("parts")[1];
        } else if (isSales) {
          fieldType = value.split("sales")[1];
        } else if (isService) {
          fieldType = value.split("service")[1];
        } else if (isUsedCars) {
          fieldType = value.split("preownedSales")[1];
        }

        switch (fieldType) {
          case "PhoneNumber": {
            if (isParts) {
              partsDataObject.Extension = callRoutingSetUp[value] as string;
            } else if (isSales) {
              salesDataObject.Extension = callRoutingSetUp[value] as string;
            } else if (isService) {
              serviceDataObject.Extension = callRoutingSetUp[value] as string;
            } else if (isUsedCars) {
              usedCarsDataObject.Extension = callRoutingSetUp[value] as string;
            }
            break;
          }
          case "CellPhone": {
            if (isParts) {
              partsDataObject.VoiceMailSms = callRoutingSetUp[value] as string;
            } else if (isSales) {
              salesDataObject.VoiceMailSms = callRoutingSetUp[value] as string;
            } else if (isService) {
              serviceDataObject.VoiceMailSms = callRoutingSetUp[
                value
              ] as string;
            }
            break;
          }
          case "EmailAddress": {
            if (isParts) {
              partsDataObject.VoiceMailAddress = callRoutingSetUp[
                value
              ] as string;
            } else if (isSales) {
              salesDataObject.VoiceMailAddress = callRoutingSetUp[
                value
              ] as string;
            } else if (isService) {
              serviceDataObject.VoiceMailAddress = callRoutingSetUp[
                value
              ] as string;
            }
            break;
          }
          case "UseVoicemail": {
            if (isParts) {
              partsDataObject.VoiceMailEnabled = callRoutingSetUp[
                value
              ] as boolean;
            } else if (isSales) {
              salesDataObject.VoiceMailEnabled = callRoutingSetUp[
                value
              ] as boolean;
            } else if (isService) {
              serviceDataObject.VoiceMailEnabled = callRoutingSetUp[
                value
              ] as boolean;
            }
            break;
          }
          // No default
        }
      }
    } else if (meta?.configSetName === "General") {
      const isEmployees = value === "employees";

      if (isEmployees) {
        const employees = callRoutingSetUp[value] as EmployeeDirectoryItem[];
        const employeesData = [...employees];
        employeesData?.map((employee) => {
          const department = employee.department as string;
          const name = employee.name as string;
          const splitName = name.split(" ");
          const firstName = splitName[0] as string;
          const lastName = splitName[1] as string;
          const isPartsEmployee = department === "Parts";
          const isSalesEmployee = department === "Sales";
          const isServiceEmployee = department === "Service";

          const employeeObject = {
            Name: name,
            FirstName: firstName,
            LastName: lastName,
            DefaultGroup: false,
            Group: false,
            Extension: employee.phone as string,
            Mobile: employee.cell as string,
            Role: employee.role as string,
            Language: ["English"],
            VoiceMailEnabled: employee.useVoicemail as boolean,
            VoiceMailAddress: employee.email as string,
            VoiceMailSms: employee.cell as string,
            Work: [],
          };

          if (isPartsEmployee) {
            partsDataObject.Agents.push(employeeObject);
          } else if (isSalesEmployee) {
            salesDataObject.Agents.push(employeeObject);
          } else if (isServiceEmployee) {
            serviceDataObject.Agents.push(employeeObject);
          }
        });
      }

      const property: ConfigProperty = {
        key: value === "callRouting" ? "DepartmentAgents" : key,
        type: meta.outputType || "Str",
        value:
          /**
           * If we don't pass `employees` in the request then the saved values won't be read correctly on app load.
           *
           * `callRouting` (`DepartmentAgents`-related info) and `agents` (spanishTransferNumber, emergencyRoadsideAssistance, receptionistPhoneNumber)
           * must be passed as stringified JSON Arrays.
           *
           * Every other field on Call Routing gets passed individually.
           */
          value === "employees"
            ? JSON.stringify(callRoutingSetUp[value])
            : value === "agents"
            ? JSON.stringify(agentsDataArray)
            : value !== "callRouting"
            ? callRoutingSetUp[value]
            : // `callRouting` meets this condition
              JSON.stringify([
                partsDataObject,
                salesDataObject,
                serviceDataObject,
                usedCarsDataObject,
              ]),
        id: propertyIdMap.get(key) || undefined,
      };
      properties.push(property);
    }
  }

  /**
   * If saving the Call Routing form we need to also check Dealer Info form state and
   * add these values to the /config/update request since Dealer Info and Call Routing forms
   * use the same namespace `canonical_name: automotive:DealerInfo:General`.
   *
   * If we do not do this check then any saved values on Dealer Info form would be removed from
   * the db.
   */
  if (hasSavedDealerInfo && !returnUnencodedProperties) {
    const dealerInfoProperties = generateDealerInfo(
      onboardingState.dealershipInfo,
      propertyIdMap,
      onboardingState,
      true
    );

    properties = [...properties, ...dealerInfoProperties];
  }

  // If Dealer Info form is being saved then we need to add Call Routing field state to /config/update
  if (returnUnencodedProperties) {
    return properties;
  }
  return getEncodedProperties(properties);
};

export {
  getGeneralConfig,
  generateCallRoutingSetUpProperties,
  generateDealerInfo,
};
