import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { FC, SetStateAction } from "react";
import {
  areAllOnboardingRequiredFieldsFilledSelector,
  areRequiredFieldsFilledObjectSelector,
  formsSavedSelector,
} from "src/features/onboarding/onboarding.slice";
import { useAppSelector } from "src/store/store";
import {
  getIncompleteForms,
  getUnsavedCompletedFormsStatus,
  getInfoTextToDisplay,
} from "src/utils/form-completion-status";
import { InfoErrorWarningText } from "../forms/common/info-error-warning-text";
import { OnboardingSaveFinishButtons } from "../forms/onboarding/common/onboarding-save-finish-buttons";
import { PreviousNextButtons } from "../forms/onboarding/common/previous-next-buttons";
import { steps } from "../forms/onboarding/common/steps";
export interface StepNavigationProps {
  activeStep: number;
  setNewStep: (value: SetStateAction<number | null>) => void;
  hasPatternErrors: boolean;
  hasValidateErrors: boolean;
  isDirty: boolean;
  finishOnboarding: () => void;
}

export const StepNavigation: FC<StepNavigationProps> = ({
  activeStep,
  setNewStep,
  hasPatternErrors,
  hasValidateErrors,
  isDirty,
  finishOnboarding,
}) => {
  const theme = useTheme();
  const totalSteps = steps.length;

  const areRequiredFieldsFilledObject: boolean[] = useAppSelector(
    areRequiredFieldsFilledObjectSelector
  );
  const areAllOnboardingRequiredFieldsFilled = useAppSelector(
    areAllOnboardingRequiredFieldsFilledSelector
  );

  const formsSaved: string[] = useAppSelector(formsSavedSelector);
  const incompleteForms = getIncompleteForms(areRequiredFieldsFilledObject);
  const unSavedCompletedForms = getUnsavedCompletedFormsStatus(
    formsSaved,
    incompleteForms
  );

  const isPageCompletedButUnsaved = unSavedCompletedForms.includes(
    `${activeStep + 1}`
  );

  const disableSave = isPageCompletedButUnsaved
    ? false
    : !isDirty || hasPatternErrors || hasValidateErrors;
  const disableFinish = isPageCompletedButUnsaved
    ? true
    : isDirty || !areAllOnboardingRequiredFieldsFilled;

  const finishWarningText = !isDirty
    ? getInfoTextToDisplay(incompleteForms, unSavedCompletedForms)
    : "";

  return (
    <Box
      sx={{
        position: "absolute",
        right: 0,
        bottom: 0,
        width: 575,
        height: 180,
        backgroundColor: theme.palette.common.white,
        borderTopLeftRadius: 150,
        display: "flex",
        alignContent: "center",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        padding: "0 40px 0",
      }}
    >
      <PreviousNextButtons
        activeStep={activeStep}
        totalSteps={totalSteps}
        setNewStep={setNewStep}
      />
      <OnboardingSaveFinishButtons
        disableSave={disableSave}
        disableFinish={disableFinish}
        finishOnboarding={finishOnboarding}
      />
      <InfoErrorWarningText text={finishWarningText} />
    </Box>
  );
};
