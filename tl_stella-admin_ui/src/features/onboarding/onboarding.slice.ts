import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  areCallRoutingSetUpRequiredFieldsFilled,
  areDealershipInfoRequiredFieldsFilled,
  areCallConfigurationRequiredFieldsFilled,
  areTechnologySetUpRequiredFieldsFilled,
  areWorkingHoursRequiredFieldsFilled,
  areAllOnboardingRequiredFieldsFilled,
} from "src/components/forms/onboarding/common/validation/rules";
import {
  CallRoutingSetUp,
  DealershipInfo,
  CallConfiguration,
  TechnologySetUp,
  WorkingHours,
} from "src/features/onboarding/onboarding.types";
import { AppState } from "src/store/store";
import { initialState } from "./initial-state";

export const onboardingSlice = createSlice({
  name: "onboarding",
  initialState,
  reducers: {
    setOnboardingCompleted: (state, action: PayloadAction<boolean>) => {
      return { ...state, isOnBoardingCompleted: action.payload };
    },

    setFormsSaved: (state, action: PayloadAction<string[]>) => {
      return { ...state, formsSaved: action.payload };
    },

    setFormSubmitted: (state, action: PayloadAction<boolean>) => {
      return { ...state, formsSubmitted: action.payload };
    },

    updateDealershipInfo(
      state,
      action: PayloadAction<DealershipInfo | undefined>
    ) {
      return { ...state, dealershipInfo: action.payload };
    },

    updateWorkingHours(state, action: PayloadAction<WorkingHours | undefined>) {
      return { ...state, workingHours: action.payload };
    },

    updateTechnologySetUp(
      state,
      action: PayloadAction<TechnologySetUp | undefined>
    ) {
      return { ...state, technologySetUp: action.payload };
    },

    updateCallRoutingSetUp(
      state,
      action: PayloadAction<CallRoutingSetUp | undefined>
    ) {
      return { ...state, callRoutingSetUp: action.payload };
    },

    updateCallConfiguration(
      state,
      action: PayloadAction<CallConfiguration | undefined>
    ) {
      return { ...state, callConfiguration: action.payload };
    },
  },
});

export const {
  setFormsSaved,
  setFormSubmitted,
  setOnboardingCompleted,
  updateDealershipInfo,
  updateWorkingHours,
  updateTechnologySetUp,
  updateCallRoutingSetUp,
  updateCallConfiguration,
} = onboardingSlice.actions;

export const isOnBoardingCompletedSelector = (state: AppState) =>
  state[onboardingSlice.name].isOnBoardingCompleted;

export const formsSavedSelector = (state: AppState) =>
  state[onboardingSlice.name].formsSaved;

export const formsSubmittedSelector = (state: AppState) =>
  state[onboardingSlice.name].formsSubmitted;

export const onboardingStateSelector = (state: AppState) =>
  state[onboardingSlice.name];

export const dealershipInfoSelector = (state: AppState) =>
  state[onboardingSlice.name].dealershipInfo;

export const workingHoursSelector = (state: AppState) =>
  state[onboardingSlice.name].workingHours;

export const technologySetUpSelector = (state: AppState) =>
  state[onboardingSlice.name].technologySetUp;

export const callRoutingSetUpSelector = (state: AppState) =>
  state[onboardingSlice.name].callRoutingSetUp;

export const callConfigurationSelector = (state: AppState) =>
  state[onboardingSlice.name].callConfiguration;

export const areRequiredFieldsFilledObjectSelector = (state: AppState) => {
  const {
    dealershipInfo,
    workingHours,
    technologySetUp,
    callRoutingSetUp,
    callConfiguration,
  } = state[onboardingSlice.name];
  return [
    areDealershipInfoRequiredFieldsFilled(dealershipInfo),
    areWorkingHoursRequiredFieldsFilled(workingHours),
    areTechnologySetUpRequiredFieldsFilled(technologySetUp),
    areCallRoutingSetUpRequiredFieldsFilled(callRoutingSetUp),
    areCallConfigurationRequiredFieldsFilled(callConfiguration),
  ];
};

export const areAllOnboardingRequiredFieldsFilledSelector = (
  state: AppState
) => {
  const {
    dealershipInfo,
    workingHours,
    technologySetUp,
    callRoutingSetUp,
    callConfiguration,
  } = state[onboardingSlice.name];
  return areAllOnboardingRequiredFieldsFilled(
    dealershipInfo,
    workingHours,
    technologySetUp,
    callRoutingSetUp,
    callConfiguration
  );
};
