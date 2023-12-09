import {
  Box,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  useTheme,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { FC, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { SuspenseFormContainer } from "src/components/forms/onboarding/common/suspense-form-container";
import {
  areRequiredFieldsFilledObjectSelector,
  formsSavedSelector,
  formsSubmittedSelector,
  onboardingStateSelector,
  setFormsSaved,
} from "src/features/onboarding/onboarding.slice";
import { useAppDispatch, useAppSelector } from "src/store/store";
import { ConfigSet } from "src/utils/config/config.types";
import { updateOnboardingCompletedFlag } from "../forms/onboarding/common/save-form-data/common";
import { steps } from "../forms/onboarding/common/steps";
import { Summary } from "./summary";

export const OnBoardingFormContainer: FC<{
  rootConfigSets: ConfigSet[];
}> = ({ rootConfigSets }) => {
  const theme = useTheme();
  const { data: session } = useSession();

  const [activeStep, setActiveStep] = useState<number>(0);
  const [newStep, setNewStep] = useState<number | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [reloadingForm, setReloadingForm] = useState<boolean>(false);

  const areRequiredFieldsFilledObject = useAppSelector(
    areRequiredFieldsFilledObjectSelector
  );
  const onboardingState = useAppSelector(onboardingStateSelector);
  const dispatch = useAppDispatch();
  const formsSaved = useAppSelector(formsSavedSelector);
  const formsSubmitted = useAppSelector(formsSubmittedSelector);

  useEffect(() => {
    if (formsSubmitted) {
      setNewStep(steps.length);
    }
  }, [formsSubmitted]);

  const activeStepDefinition = steps[activeStep];

  const handleSubmit = async (values: FieldValues) => {
    if (!session?.user) {
      return;
    }
    const submitAction = activeStepDefinition.submitAction;
    const formName = activeStepDefinition.label;

    if (submitAction) {
      setIsSaving(true);
      // persist data in local store
      await submitAction(
        values,
        session?.user.defaultTenantID,
        rootConfigSets,
        dispatch,
        onboardingState
      );

      if (!formsSaved.includes(formName)) {
        const newFormsSaved = [...formsSaved];
        newFormsSaved.push(formName);
        dispatch(setFormsSaved(newFormsSaved));
      }

      setReloadingForm(true);
      setIsSaving(false);

      // TODO: find a better way to reload the form
      setTimeout(() => {
        setReloadingForm(false);
      }, 200);
    }
  };

  const finishOnboarding = async () => {
    if (!session?.user || !rootConfigSets) {
      return;
    }

    setIsSaving(true);
    await updateOnboardingCompletedFlag(
      session?.user.defaultTenantID,
      rootConfigSets,
      dispatch
    );
    setIsSaving(false);
    setNewStep(steps.length);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ paddingBottom: "165px" }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{ width: 140, flexShrink: 0 }}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              onClick={
                index !== activeStep ? () => setNewStep(index) : undefined
              }
              sx={{
                cursor: "pointer",
                "&.Mui-disabled": {
                  cursor: "pointer",
                },
              }}
              StepIconProps={{
                completed:
                  onboardingState.formsSaved.includes(step.label) &&
                  areRequiredFieldsFilledObject[index],
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box
        sx={{
          flexGrow: 1,
          paddingLeft: 4,
          [theme.breakpoints.up("md")]: {
            paddingLeft: 10,
          },
          [theme.breakpoints.up("lg")]: {
            paddingLeft: 16,
          },
          [theme.breakpoints.up("xl")]: {
            paddingLeft: 22,
          },
        }}
      >
        {activeStep === steps.length ? (
          <Summary />
        ) : (
          <SuspenseFormContainer>
            {reloadingForm || isSaving ? (
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress size={60} color="secondary" />
              </Box>
            ) : (
              <activeStepDefinition.content
                setNewStep={setNewStep}
                newStep={newStep}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                submitForm={handleSubmit}
                finishOnboarding={finishOnboarding}
                defaultValues={activeStepDefinition.defaultValues(
                  onboardingState
                )}
              ></activeStepDefinition.content>
            )}
          </SuspenseFormContainer>
        )}
      </Box>
    </Box>
  );
};
