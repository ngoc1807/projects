import {
  CallRoutingSetUpFields,
  DealerInfoFormField,
  EmployeeDirectoryItem,
  CallConfigurationFields,
  TechnologySetUpFields,
  WorkingHoursFields,
  WorkHourType,
  WorkHoursType,
} from "src/features/onboarding/onboarding.types";

export interface ConfigSet {
  name: ConfigSetName;
  namespace: string; // in our case it's always "automotive"
  canonical_name: string; // e.g. "automotive:DealerInfo:General"
  properties: ConfigProperty[];
  tenant_id?: string; // Salesforce ID of the tenant that owns this config set
  config_set_id?: string; // GUID
  parent_id?: string; // GUID
}

export interface ConfigProperty {
  key: ConfigKey;
  type: "Str" | "Json";
  value?:
    | string
    | string[]
    | number
    | boolean
    | Record<string, unknown>
    | EmployeeDirectoryItem[];
  desc?: string;
  id?: string; // GUID
  config_set_id?: string; // GUID
}

export const PARENT_CONFIG_SET_NAME = [
  "root",
  "DealerInfo",
  "ServiceScheduling",
  "OAuth",
] as const;
export type ParentConfigSetName = typeof PARENT_CONFIG_SET_NAME[number];

export const CONFIG_SET_NAMES = [
  "General",
  "ServiceScheduling",
  "Receptionist",
  "Services",
  "XtimeConfig",
  "XtimeDeploymentConfig",
  "AutoLoopConfig",
  "AutoLoopDeploymentConfig",
  "OAuth",
  "DBStore",
] as const;
export type ConfigSetName = typeof CONFIG_SET_NAMES[number];

export type ConfigSetNamePair<T, K> = [T, K];

export const AUTOMOTIVE_CONFIG_SETS: ConfigSetNamePair<
  ParentConfigSetName,
  ConfigSetName
>[] = [
  ["DealerInfo", "General"],
  ["DealerInfo", "ServiceScheduling"],
  ["DealerInfo", "Receptionist"],
  ["ServiceScheduling", "General"],
]; // Dealer App only reads and writes these configurations

const DEALER_INFO_CONFIG_PROPERTIES = [
  "Name",
  "Location",
  "AddressExplanation",
  "ServiceAddress",
  "GroupName",
  "Brands",
  "BrandsSold",
  "WebSiteURL",
  "LocationNumber",
  "TimeZone",
] as const;

const WORKING_HOURS_CONFIG_PROPERTIES = ["OperatingHours"];
const TECHNOLOGY_SET_UP_CONFIG_PROPERTIES = ["Provider"];
const CALL_ROUTING_SETUP_CONFIG_PROPERTIES = [
  "VoiceMailAddress",
  "Agents",
  "DepartmentAgents",
];
const CALL_CONFIGURATION_CONFIG_PROPERTIES: string[] = [];

const CONFIG_PROPERTIES = [
  ...DEALER_INFO_CONFIG_PROPERTIES,
  ...WORKING_HOURS_CONFIG_PROPERTIES,
  ...TECHNOLOGY_SET_UP_CONFIG_PROPERTIES,
  ...CALL_ROUTING_SETUP_CONFIG_PROPERTIES,
  ...CALL_CONFIGURATION_CONFIG_PROPERTIES,
] as const;

export type DealerInfoConfigKey = typeof DEALER_INFO_CONFIG_PROPERTIES[number];
export type WorkingHoursConfigKey =
  typeof WORKING_HOURS_CONFIG_PROPERTIES[number];
export type TechnologySetUpConfigKey =
  typeof TECHNOLOGY_SET_UP_CONFIG_PROPERTIES[number];
export type CallRoutingSetUpConfigKey =
  typeof CALL_ROUTING_SETUP_CONFIG_PROPERTIES[number];
export type CallConfigurationConfigKey =
  typeof CALL_CONFIGURATION_CONFIG_PROPERTIES[number];
export type ConfigKey = typeof CONFIG_PROPERTIES[number];

const FORM_NAMES = [
  "dealershipInfo",
  "workingHours",
  "technologySetUp",
  "callRoutingSetUp",
  "callConfiguration",
] as const;
export type FormName = typeof FORM_NAMES[number];

export type FormFieldName =
  | DealerInfoFormField
  | WorkingHoursFields
  | TechnologySetUpFields
  | CallRoutingSetUpFields
  | CallConfigurationFields;

export type FieldMeta = {
  configSetName: ConfigSetName;
  formName: FormName;
  outputType?: "Str" | "Json";
  inputType?: "string" | "number" | "boolean" | "array" | "object";
  customTransformer?: (value: WorkHourType[]) => WorkHoursType[];
};
