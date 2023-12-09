import { lazy } from "react";
import { OnboardingState } from "src/features/onboarding/onboarding.types";
import { FormName } from "src/utils/config/config.types";
import {
  saveCallRoutingSetUpFormData,
  saveDealershipInfoFormData,
  saveCallConfigurationFormData,
  saveTechnologySetUpFormData,
  saveWorkingHoursFormData,
} from "./save-form-data";
import {
  callRoutingSetUpRules,
  dealershipInfoRules,
  callConfigurationRules,
  technologySetUpRules,
  workingHoursRules,
} from "./validation/rules";

export enum StepLabels {
  CALL_ROUTING = "Call Routing / Directory Set Up",
  DEALERSHIP_INFO = "Dealership Info",
  CALL_CONFIGURATION = "Call Configuration",
  TECH_SET_UP = "Technology Set Up",
  WORKING_HOURS = "Working Hours",
}

export const onboardingPages = {
  "1": StepLabels.DEALERSHIP_INFO,
  "2": StepLabels.WORKING_HOURS,
  "3": StepLabels.TECH_SET_UP,
  "4": StepLabels.CALL_ROUTING,
  "5": StepLabels.CALL_CONFIGURATION,
};

export const steps = [
  {
    label: StepLabels.DEALERSHIP_INFO,
    content: lazy(() =>
      import("src/components/forms/onboarding/dealer-info").then((module) => ({
        default: module.DealerInfoForm,
      }))
    ),
    submitAction: saveDealershipInfoFormData,
    defaultValues: (state: OnboardingState) => state.dealershipInfo,
    rules: dealershipInfoRules,
  },
  {
    label: StepLabels.WORKING_HOURS,
    content: lazy(() =>
      import("src/components/forms/onboarding/working-hours").then(
        (module) => ({
          default: module.WorkingHoursForm,
        })
      )
    ),
    submitAction: saveWorkingHoursFormData,
    defaultValues: (state: OnboardingState) => state.workingHours,
    rules: workingHoursRules,
  },
  {
    label: StepLabels.TECH_SET_UP,
    content: lazy(() =>
      import("src/components/forms/onboarding/technology-set-up").then(
        (module) => ({
          default: module.TechnologySetUpForm,
        })
      )
    ),
    submitAction: saveTechnologySetUpFormData,
    defaultValues: (state: OnboardingState) => state.technologySetUp,
    rules: technologySetUpRules,
  },
  {
    label: StepLabels.CALL_ROUTING,
    content: lazy(() =>
      import(
        "src/components/forms/onboarding/call-routing-directory-set-up"
      ).then((module) => ({
        default: module.CallRoutingDirectorySetUpForm,
      }))
    ),
    submitAction: saveCallRoutingSetUpFormData,
    defaultValues: (state: OnboardingState) => state.callRoutingSetUp,
    rules: callRoutingSetUpRules,
  },
  {
    label: StepLabels.CALL_CONFIGURATION,
    content: lazy(() =>
      import("src/components/forms/onboarding/call-configuration").then(
        (module) => ({
          default: module.CallConfigurationForm,
        })
      )
    ),
    submitAction: saveCallConfigurationFormData,
    defaultValues: (state: OnboardingState) => state.callConfiguration,
    rules: callConfigurationRules,
  },
];

export const FormNameLabelMapping = new Map<FormName, StepLabels>([
  ["dealershipInfo", StepLabels.DEALERSHIP_INFO],
  ["workingHours", StepLabels.WORKING_HOURS],
  ["technologySetUp", StepLabels.TECH_SET_UP],
  ["callRoutingSetUp", StepLabels.CALL_ROUTING],
  ["callConfiguration", StepLabels.CALL_CONFIGURATION],
]);
