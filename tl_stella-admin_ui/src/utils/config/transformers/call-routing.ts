import {
  EmployeeDirectoryItem,
  WorkHoursType,
} from "src/features/onboarding/onboarding.types";
import { EmployeeAgentType } from "../dealer-info/general";

export type CallRoutingDataType = {
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

const getCallRoutingDealerAgentFieldValues = (
  callRoutingValues: CallRoutingDataType[]
) => {
  const employees: EmployeeDirectoryItem[] = [];
  const employeesObject = { employees };
  let fields = {};
  let callRoutingFieldsValues = {};
  for (const department of callRoutingValues) {
    let newFields = {};
    const departmentAgents = department.Agents as EmployeeAgentType[];
    const departmentName = String(department.Name);
    const fieldPrefix =
      departmentName === "UsedCars"
        ? "preownedSales"
        : departmentName === "Sales" ||
          departmentName === "Service" ||
          departmentName === "Parts"
        ? departmentName.toLowerCase()
        : departmentName.indexOf("Spanish") === 0
        ? "spanishTransferNumber"
        : departmentName.indexOf("External") === 0
        ? "receptionistPhoneNumber"
        : "emergencyRoadsideAssistance"; // EmergencyNumber is the only remaining departmentName
    const isSalesServiceOrParts =
      fieldPrefix === "sales" ||
      fieldPrefix === "service" ||
      fieldPrefix === "parts";

    if (isSalesServiceOrParts) {
      newFields = {
        [`${fieldPrefix}PhoneNumber`]: department.Extension,
        [`${fieldPrefix}CellPhone`]: department.VoiceMailSms,
        [`${fieldPrefix}EmailAddress`]: department.VoiceMailAddress,
        [`${fieldPrefix}UseVoicemail`]: department.VoiceMailEnabled,
      };
    } else if (fieldPrefix === "preownedSales") {
      newFields = { [`${fieldPrefix}PhoneNumber`]: department.Extension };
    } else {
      // the remaining fieldPrefix values are all the name of the field itself
      newFields = { [`${fieldPrefix}`]: department.Extension };
    }

    fields = { ...newFields, ...fields };

    departmentAgents?.length > 0 &&
      departmentAgents?.map((agent) => {
        const employee: EmployeeDirectoryItem = {
          cell: agent.Mobile,
          department:
            // `UsedCarManager` and `Preowned Salesperson` are two roles under `Sales`
            agent.Role?.indexOf("UsedCar") === 0 ||
            agent.Role?.indexOf("Preowned") === 0
              ? "Sales"
              : departmentName,
          email: agent.VoiceMailAddress,
          name: agent.Name,
          phone: agent.Extension,
          role: agent.Role,
          useVoicemail: agent.VoiceMailEnabled,
        };

        employeesObject.employees.push(employee);
      });

    callRoutingFieldsValues = {
      ...callRoutingFieldsValues,
      ...fields,
      ...employeesObject,
    };
  }

  return callRoutingFieldsValues;
};

export { getCallRoutingDealerAgentFieldValues };
