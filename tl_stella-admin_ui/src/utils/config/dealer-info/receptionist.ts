import { WorkingHours } from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import {
  ConfigKey,
  ConfigProperty,
  ConfigSet,
} from "src/utils/config/config.types";
import { getConfigSet } from "..";
import { getEncodedProperties } from "../common";
import {
  getFormattedHolidaysJsonString,
  getFormattedHoursJsonString,
} from "../transformers/operating-hours";

const getReceptionistConfig = (
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  const receptionistConfigSet = getConfigSet(
    tenantId,
    rootConfigSets,
    ["DealerInfo", "Receptionist"],
    dispatch
  );

  return receptionistConfigSet;
};

const generateWorkingHoursProperties = (
  workingHours: WorkingHours,
  propertyIdMap: Map<ConfigKey, string>
) => {
  let properties: ConfigProperty[] = [];
  const storeHoursProperties: ConfigProperty[] = [
    {
      key: "OperatingHours",
      type: "Str",
      value: getFormattedHoursJsonString(workingHours?.storeHours ?? []),
      id: propertyIdMap.get("OperatingHours") || undefined,
    },
  ];
  const closedHolidaysProperties: ConfigProperty[] = [
    {
      key: "Holidays",
      type: "Str",
      value: getFormattedHolidaysJsonString(workingHours?.closedHolidays ?? []),
      id: propertyIdMap.get("OperatingHours") || undefined,
    },
  ];

  properties = [...storeHoursProperties, ...closedHolidaysProperties];

  return getEncodedProperties(properties);
};

export { getReceptionistConfig, generateWorkingHoursProperties };
