import {
  CallRoutingSetUpFields,
  DealerInfoFormField,
  CallConfigurationFields,
  TechnologySetUpFields,
  WorkingHoursFields,
} from "src/features/onboarding/onboarding.types";
import {
  CallRoutingSetUpConfigKey,
  ConfigKey,
  DealerInfoConfigKey,
  FieldMeta,
  FormFieldName,
  CallConfigurationConfigKey,
  TechnologySetUpConfigKey,
  WorkingHoursConfigKey,
} from "./config.types";

export const dealerInfoFormFieldMetaMapping: Map<
  DealerInfoFormField,
  FieldMeta
> = new Map([
  [
    "dealershipName",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
  [
    "dealershipAddress",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
  [
    "addressExplanation",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
  [
    "serviceAddress",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
  [
    "groupName",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
  [
    "makesServiced",
    {
      configSetName: "General",
      formName: "dealershipInfo",
      inputType: "array",
    },
  ],
  [
    "makesSold",
    {
      configSetName: "General",
      formName: "dealershipInfo",
      inputType: "array",
    },
  ],
  [
    "websiteUrl",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
  [
    "dealershipMainPhoneNumber",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
  [
    "timezone",
    {
      configSetName: "General",
      formName: "dealershipInfo",
    },
  ],
]);

export const workingHoursFormFieldMetaMapping: Map<
  WorkingHoursFields,
  FieldMeta
> = new Map([
  [
    "storeHours",
    {
      configSetName: "Receptionist",
      outputType: "Str",
      inputType: "object",
      formName: "workingHours",
      // need to figure out how to get this to work with outputType of Str
      // customTransformer: getHoursFormData,
    },
  ],
  [
    "serviceHours",
    {
      configSetName: "ServiceScheduling",
      outputType: "Str",
      inputType: "object",
      formName: "workingHours",
      // need to figure out how to get this to work with outputType of Str
      // customTransformer: getHoursFormData,
    },
  ],
  [
    "closedHolidays",
    {
      configSetName: "Receptionist",
      outputType: "Str",
      inputType: "object",
      formName: "workingHours",
      // need to figure out how to get this to work with outputType of Str
      // customTransformer: getHoursFormData,
    },
  ],
]);

export const technologySetupFormFieldMetaMapping: Map<
  TechnologySetUpFields,
  FieldMeta
> = new Map([
  [
    "mainDealerShipITContact",
    {
      configSetName: "ServiceScheduling",
      outputType: "Json",
      inputType: "object",
      formName: "technologySetUp",
    },
  ],
  [
    "serviceScheduler",
    { configSetName: "ServiceScheduling", formName: "technologySetUp" },
  ],
  [
    "defaultOpCode",
    { configSetName: "ServiceScheduling", formName: "technologySetUp" },
  ],
  [
    "transportTypes",
    {
      configSetName: "ServiceScheduling",
      formName: "technologySetUp",
      inputType: "array",
    },
  ],
  [
    "defaultTransportType",
    { configSetName: "ServiceScheduling", formName: "technologySetUp" },
  ],
]);

export const callRoutingSetUpFormFieldMetaMapping: Map<
  CallRoutingSetUpFields,
  FieldMeta
> = new Map([
  [
    "defaultVoicemailEmail",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "employees",
    {
      configSetName: "General",
      formName: "callRoutingSetUp",
      inputType: "object",
      outputType: "Str",
      // cannot use a customTransformer because outputType is Str
      // customTransformer: getEmployeesFormData,
    },
  ],
  [
    "salesPhoneNumber",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "salesCellPhone",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "salesEmailAddress",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "salesUseVoicemail",
    {
      configSetName: "General",
      inputType: "boolean",
      formName: "callRoutingSetUp",
    },
  ],
  [
    "servicePhoneNumber",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "serviceCellPhone",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "serviceEmailAddress",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "serviceUseVoicemail",
    {
      configSetName: "General",
      inputType: "boolean",
      formName: "callRoutingSetUp",
    },
  ],
  [
    "partsPhoneNumber",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "partsCellPhone",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "partsEmailAddress",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "partsUseVoicemail",
    {
      configSetName: "General",
      inputType: "boolean",
      formName: "callRoutingSetUp",
    },
  ],
  [
    "preownedSalesPhoneNumber",
    { configSetName: "General", formName: "callRoutingSetUp" },
  ],
  [
    "receptionistPhoneNumber",
    { configSetName: "Receptionist", formName: "callRoutingSetUp" },
  ],
  [
    "emergencyRoadsideAssistance",
    { configSetName: "Receptionist", formName: "callRoutingSetUp" },
  ],
  [
    "spanishTransferNumber",
    { configSetName: "Receptionist", formName: "callRoutingSetUp" },
  ],
  [
    "agents", // must be listed second-to-last for save logic to work!
    {
      configSetName: "General",
      formName: "callRoutingSetUp",
      inputType: "object",
      outputType: "Str",
    },
  ],
  [
    "callRouting", // must be listed last for save logic to work!
    {
      configSetName: "General",
      formName: "callRoutingSetUp",
      inputType: "object",
      outputType: "Str",
      // cannot use a customTransformer so long as outputType is Str
      // customTransformer: getCallRoutingDealerAgentFieldValues,
    },
  ],
]);

export const callConfigurationFormFieldMetaMapping: Map<
  CallConfigurationFields,
  FieldMeta
> = new Map([
  [
    "handleAllCalls",
    {
      configSetName: "ServiceScheduling",
      inputType: "boolean",
      formName: "callConfiguration",
    },
  ],
  [
    "allowHowManySecondsBeforePickup",
    {
      configSetName: "ServiceScheduling",
      inputType: "number",
      formName: "callConfiguration",
    },
  ],
  [
    "allowHowManySecondsRinging",
    {
      configSetName: "ServiceScheduling",
      inputType: "number",
      formName: "callConfiguration",
    },
  ],
  [
    "indicateCallRecorded",
    {
      configSetName: "ServiceScheduling",
      inputType: "boolean",
      formName: "callConfiguration",
    },
  ],
  [
    "includeTextAppointments",
    {
      configSetName: "ServiceScheduling",
      inputType: "boolean",
      formName: "callConfiguration",
    },
  ],
  [
    "includesCallSurvey",
    {
      configSetName: "ServiceScheduling",
      inputType: "boolean",
      formName: "callConfiguration",
    },
  ],
]);

export const dealershipInfoConfigKeyFormFieldMapping = new Map<
  DealerInfoConfigKey,
  DealerInfoFormField
>([
  ["Name", "dealershipName"],
  ["Location", "dealershipAddress"],
  ["AddressExplanation", "addressExplanation"],
  ["ServiceAddress", "serviceAddress"],
  ["GroupName", "groupName"],
  ["Brands", "makesServiced"],
  ["BrandsSold", "makesSold"],
  ["WebSiteURL", "websiteUrl"],
  ["LocationNumber", "dealershipMainPhoneNumber"],
  ["TimeZone", "timezone"],
]);

export const workingHoursConfigKeyFormFieldMapping = new Map<
  WorkingHoursConfigKey,
  WorkingHoursFields
>([
  ["OperatingHours:ServiceScheduling", "serviceHours"],
  ["OperatingHours:Receptionist", "storeHours"],
  ["Holidays", "closedHolidays"],
]);

export const technologySetUpConfigKeyFormFieldMapping = new Map<
  TechnologySetUpConfigKey,
  TechnologySetUpFields
>([
  ["MainDealershipITContact", "mainDealerShipITContact"],
  ["Provider", "serviceScheduler"],
  ["DefaultServiceOpCode", "defaultOpCode"],
  ["TransportTypes", "transportTypes"],
  ["DefaultType", "defaultTransportType"],
]);

export const callRoutingSetUpConfigKeyFormFieldMapping = new Map<
  CallRoutingSetUpConfigKey,
  CallRoutingSetUpFields
>([
  ["VoiceMailAddress", "defaultVoicemailEmail"],
  ["Employees", "employees"],
  ["Sales", "salesPhoneNumber"],
  ["DefaultSalesVMText", "salesCellPhone"],
  ["DefaultSalesVMEmail", "salesEmailAddress"],
  ["DefaultSalesUseVoicemail", "salesUseVoicemail"],
  ["Services", "servicePhoneNumber"],
  ["DefaultServiceVMText", "serviceCellPhone"],
  ["DefaultServiceVMEmail", "serviceEmailAddress"],
  ["DefaultServiceUseVoicemail", "serviceUseVoicemail"],
  ["Parts", "partsPhoneNumber"],
  ["DefaultPartsVMText", "partsCellPhone"],
  ["DefaultPartsVMEmail", "partsEmailAddress"],
  ["DefaultPartsUseVoicemail", "partsUseVoicemail"],
  ["UsedCars", "preownedSalesPhoneNumber"],
  ["ExternalCustomerService", "receptionistPhoneNumber"],
  ["EmergencyNumber", "emergencyRoadsideAssistance"],
  ["SpanishSpeakingPhoneNumber", "spanishTransferNumber"],
  ["Agents", "agents"],
  ["DepartmentAgents:General", "callRouting"],
]);

export const callConfigurationConfigKeyFormFieldMapping = new Map<
  CallConfigurationConfigKey,
  CallConfigurationFields
>([
  ["HandleAllCalls", "handleAllCalls"],
  ["SecondsBeforePickUp", "allowHowManySecondsBeforePickup"],
  ["SecondsBeforeVoicemail", "allowHowManySecondsRinging"],
  ["IndicateCallWillBeRecorded", "indicateCallRecorded"],
  ["IncludeTextConfirmation", "includeTextAppointments"],
  ["IncludeCallSurveyRating", "includesCallSurvey"],
]);

export const formFieldMetaMapping: Map<FormFieldName, FieldMeta> = new Map([
  ...dealerInfoFormFieldMetaMapping.entries(),
  ...workingHoursFormFieldMetaMapping.entries(),
  ...technologySetupFormFieldMetaMapping.entries(),
  ...callRoutingSetUpFormFieldMetaMapping.entries(),
  ...callConfigurationFormFieldMetaMapping.entries(),
]);

export const configKeyFormFieldMapping: Map<ConfigKey, FormFieldName> = new Map(
  [
    ...dealershipInfoConfigKeyFormFieldMapping.entries(),
    ...workingHoursConfigKeyFormFieldMapping.entries(),
    ...technologySetUpConfigKeyFormFieldMapping.entries(),
    ...callRoutingSetUpConfigKeyFormFieldMapping.entries(),
    ...callConfigurationConfigKeyFormFieldMapping.entries(),
  ]
);
