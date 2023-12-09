import { RegisterOptions } from "react-hook-form";
import {
  CallRoutingSetUp,
  ClosedHolidaysType,
  DealershipInfo,
  EmployeeDirectoryItem,
  MainDealerShipITContact,
  CallConfiguration,
  TechnologySetUp,
  WorkHoursType,
  WorkingHours,
} from "src/features/onboarding/onboarding.types";

const regexCollections: { [key in string]: RegExp } = {
  phoneNumberUS: /^(1\s?)?((\(\d{3}\))|\d{3})[\s-]?[\0-9]{3}[\s-]?\d{4}$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  number: /^\d*$/,
};

const requiredMessage = "This field is required";
const invalidFormatMessage = "Invalid format";
const requiredObject = { value: true, message: requiredMessage };
const buildPatternObject = (value: RegExp) => {
  return { value, message: invalidFormatMessage };
};

export const dealershipInfoRules: {
  [key in keyof DealershipInfo]: RegisterOptions;
} = {
  dealershipName: { required: requiredObject },
  dealershipMainPhoneNumber: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  websiteUrl: { required: requiredObject },
  timezone: { required: requiredObject },
  addressExplanation: {},
  dealershipAddress: {},
  groupName: {},
  makesServiced: {},
  makesSold: {},
  serviceAddress: {},
};

export const workingHoursRules: {
  [key in keyof WorkingHours]: RegisterOptions;
} = {
  storeHours: { required: requiredObject },
  serviceHours: { required: requiredObject },
  closedHolidays: { required: requiredObject },
};

export const hoursRules: {
  [key in keyof WorkHoursType]: RegisterOptions;
} = {
  start: {},
  end: {},
  closed: {},
};

export const closedHolidaysRules: {
  [key in keyof ClosedHolidaysType]: RegisterOptions;
} = {
  start: {},
  end: {},
  name: { required: requiredObject },
  date: { required: requiredObject },
  toggled: {},
  closed: {},
  id: {},
  custom: {},
};

export const mainDealerShipItContactRules: {
  [key in keyof MainDealerShipITContact]: RegisterOptions;
} = {
  name: {
    required: requiredObject,
  },
  phoneNumber: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  email: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.email),
  },
};

export const technologySetUpRules: {
  [key in keyof TechnologySetUp]: RegisterOptions;
} = {
  mainDealerShipITContact: {},
  serviceScheduler: { required: requiredObject },
  defaultOpCode: {},
};

export const callRoutingSetUpRules: {
  [key in keyof CallRoutingSetUp]: RegisterOptions;
} = {
  salesPhoneNumber: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  salesCellPhone: {
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  salesEmailAddress: { pattern: buildPatternObject(regexCollections.email) },
  servicePhoneNumber: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  serviceCellPhone: {
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  serviceEmailAddress: {
    pattern: buildPatternObject(regexCollections.email),
  },
  partsPhoneNumber: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  partsCellPhone: {
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  partsEmailAddress: {
    pattern: buildPatternObject(regexCollections.email),
  },
  preownedSalesPhoneNumber: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  spanishTransferNumber: {
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  receptionistPhoneNumber: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  emergencyRoadsideAssistance: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  defaultVoicemailEmail: {
    pattern: buildPatternObject(regexCollections.email),
  },
  salesUseVoicemail: { required: requiredObject },
  serviceUseVoicemail: { required: requiredObject },
  partsUseVoicemail: { required: requiredObject },
  employees: {},
};

export const employeeRules: {
  [key in keyof EmployeeDirectoryItem]: RegisterOptions;
} = {
  id: {},
  name: { required: requiredObject },
  department: { required: requiredObject },
  role: { required: requiredObject },
  phone: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.phoneNumberUS),
  },
  email: { pattern: buildPatternObject(regexCollections.email) },
  cell: { pattern: buildPatternObject(regexCollections.phoneNumberUS) },
  useVoicemail: { required: requiredObject },
};

export const callConfigurationRules: {
  [key in keyof CallConfiguration]: RegisterOptions;
} = {
  allowHowManySecondsBeforePickup: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.number),
  },
  allowHowManySecondsRinging: {
    required: requiredObject,
    pattern: buildPatternObject(regexCollections.number),
  },
  handleAllCalls: {},
  indicateCallRecorded: {},
  includeTextAppointments: {},
  includesCallSurvey: {},
};

const areRequiredFieldsFromVariableFilled = (
  values: { [key: string]: unknown },
  rules: { [key: string]: RegisterOptions }
): boolean => {
  if (Object.keys(values).length <= 0 || Object.keys(rules).length <= 0)
    return false;

  const requiredFields = Object.keys(rules).filter((key) => {
    return !!rules[key]?.required;
  });

  return requiredFields?.every((key) => {
    return (
      values[key] !== null && values[key] !== undefined && values[key] !== ""
    );
  });
};

export const areDealershipInfoRequiredFieldsFilled = (
  values: DealershipInfo | undefined
): boolean => {
  if (!values) return false;

  const areRequiredDealershipInfoTopLevelFilled =
    areRequiredFieldsFromVariableFilled(
      values as {
        [key in keyof DealershipInfo]: unknown;
      },
      dealershipInfoRules
    );

  // check top level fields
  return areRequiredDealershipInfoTopLevelFilled;
};

export const areWorkingHoursRequiredFieldsFilled = (
  values: WorkingHours | undefined
): boolean => {
  if (!values) return false;
  if ((values?.storeHours?.length ?? 0) < 7) return false;
  if ((values?.serviceHours?.length ?? 0) < 7) return false;

  const areRequiredSalesHoursFilled =
    values.storeHours?.every((storeHoursObject) => {
      // handle either-or fields
      return (
        storeHoursObject.closed ||
        (storeHoursObject.start && storeHoursObject.end)
      );
    }) ?? false;
  const areRequiredServiceHoursFilled =
    values.serviceHours?.every(
      // handle either-or fields
      (serviceHoursObject) => {
        return (
          serviceHoursObject.closed ||
          (serviceHoursObject.start && serviceHoursObject.end)
        );
      }
    ) ?? false;
  const areRequiredClosedHolidaysFilled =
    values.closedHolidays?.every((closedHolidaysObject) => {
      return (
        areRequiredFieldsFromVariableFilled(
          closedHolidaysObject as {
            [key in keyof ClosedHolidaysType]: unknown;
          },
          closedHolidaysRules
        ) &&
        // handle either-or fields
        (closedHolidaysObject.closed ||
          (closedHolidaysObject.start && closedHolidaysObject.end))
      );
    }) ?? false;

  // check both nested sections and the one nested/loop section (does not have any "top level" fields)
  return (
    areRequiredSalesHoursFilled &&
    areRequiredServiceHoursFilled &&
    areRequiredClosedHolidaysFilled
  );
};

export const areTechnologySetUpRequiredFieldsFilled = (
  values: TechnologySetUp | undefined
): boolean => {
  if (!values) return false;

  const areRequiredTechnologySetUpTopLevelFilled =
    areRequiredFieldsFromVariableFilled(
      values as {
        [key in keyof TechnologySetUp]: unknown;
      },
      technologySetUpRules
    );
  const areRequiredMainDealershipITContactFilled =
    areRequiredFieldsFromVariableFilled(
      values?.mainDealerShipITContact as {
        [key in keyof MainDealerShipITContact]: unknown;
      },
      mainDealerShipItContactRules
    );

  // check top level fields and the one nested section
  return (
    areRequiredTechnologySetUpTopLevelFilled &&
    areRequiredMainDealershipITContactFilled
  );
};

export const areCallRoutingSetUpRequiredFieldsFilled = (
  values: CallRoutingSetUp | undefined
): boolean => {
  if (!values) return false;

  const areRequiredCallRoutingTopLevelFilled =
    areRequiredFieldsFromVariableFilled(
      values as {
        [key in keyof CallRoutingSetUp]: unknown;
      },
      callRoutingSetUpRules
    );
  const areRequiredEmployeeFilled = (values?.employees ?? []).every(
    (employeeObject) => {
      return areRequiredFieldsFromVariableFilled(
        employeeObject as {
          [key in keyof EmployeeDirectoryItem]: unknown;
        },
        employeeRules
      );
    }
  );

  // check top level fields and the one nested/loop section
  return areRequiredCallRoutingTopLevelFilled && areRequiredEmployeeFilled;
};

export const areCallConfigurationRequiredFieldsFilled = (
  values: CallConfiguration | undefined
): boolean => {
  if (!values) return false;

  const areRequiredDealershipInfoTopLevelFilled =
    areRequiredFieldsFromVariableFilled(
      values as {
        [key in keyof CallConfiguration]: unknown;
      },
      callConfigurationRules
    );

  // check top level fields
  return areRequiredDealershipInfoTopLevelFilled;
};

export const areAllOnboardingRequiredFieldsFilled = (
  dealershipInfoValues: DealershipInfo | undefined,
  workingHoursValues: WorkingHours | undefined,
  technologySetUpValues: TechnologySetUp | undefined,
  callRoutingValues: CallRoutingSetUp | undefined,
  callConfigurationValues: CallConfiguration | undefined
): boolean => {
  if (
    !dealershipInfoValues ||
    !workingHoursValues ||
    !technologySetUpValues ||
    !callRoutingValues ||
    !callConfigurationValues
  )
    return false;
  return (
    areDealershipInfoRequiredFieldsFilled(dealershipInfoValues) &&
    areWorkingHoursRequiredFieldsFilled(workingHoursValues) &&
    areTechnologySetUpRequiredFieldsFilled(technologySetUpValues) &&
    areCallRoutingSetUpRequiredFieldsFilled(callRoutingValues) &&
    areCallConfigurationRequiredFieldsFilled(callConfigurationValues)
  );
};
