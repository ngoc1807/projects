import { Box } from "@mui/system";
import {
  ComponentType,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  useForm,
  UseFormSetValue,
  useWatch,
} from "react-hook-form";
import { StepNavigation } from "src/components/onboarding/step-navigation";
import UnsavedChangesDialog from "src/components/onboarding/unsaved-changes-dialog";
import { parseErrorsForType } from "src/utils/errors";

export interface FormWrapperProps extends FormContentProps {
  submitForm: (values: FieldValues) => void;
  defaultValues?: FieldValues;
  activeStep: number;
  setActiveStep: Dispatch<number>;
  setNewStep: (value: SetStateAction<number | null>) => void;
  newStep: number | null;
  finishOnboarding: () => void;
}

export interface FormContentProps {
  control: Control<FieldValues>;
  values: FieldValues;
  errors: FieldErrors;
  setValue: UseFormSetValue<FieldValues>;
  trigger: (name?: string | string[]) => Promise<boolean>;
}

export const withFormWrapper = <T extends FormWrapperProps>(
  WrappedComponent: ComponentType<FormWrapperProps>
) => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "WrappedComponent";

  const ComponentWithForm = (props: Omit<T, keyof FormContentProps>) => {
    const {
      activeStep,
      defaultValues,
      setActiveStep,
      newStep,
      submitForm,
      setNewStep,
      finishOnboarding,
    } = props;
    const [unsavedChangesDialogOpen, setUnsavedChangesDialogOpen] =
      useState<boolean>(false);

    const formReference = useRef<HTMLFormElement>(null);

    const { control, handleSubmit, reset, formState, setValue, trigger } =
      useForm({
        defaultValues: defaultValues,
        mode: "all",
        reValidateMode: "onBlur",
      });
    const watchValues = useWatch({ control });
    const { errors, isDirty } = formState;
    const { hasPatternErrors, hasValidateErrors } = parseErrorsForType(errors);

    useEffect(() => {
      if (newStep !== null) {
        if (isDirty) {
          setUnsavedChangesDialogOpen(true);
        } else {
          setActiveStep(newStep);
          setNewStep(null);
        }
      }
    }, [isDirty, newStep, setActiveStep, setNewStep]);

    const submitHandler = (values: FieldValues) => {
      submitForm(values);
    };

    const submitErrorHandler = (errors: FieldValues) => {
      // eslint-disable-next-line no-console
      console.warn(errors);
      submitForm(watchValues);
    };

    const cancelStepChange = () => {
      setNewStep(null);
      setUnsavedChangesDialogOpen(false);
    };
    const clearUnsavedChanges = () => {
      reset();
      newStep && setActiveStep(newStep);
      setNewStep(null);
      setUnsavedChangesDialogOpen(false);
    };
    const saveUnsavedChanges = () => {
      if (formReference && formReference.current) {
        formReference.current.dispatchEvent(
          new Event("submit", { bubbles: true, cancelable: true })
        );
      }
      newStep && setActiveStep(newStep);
      setNewStep(null);
      setUnsavedChangesDialogOpen(false);
    };

    return (
      <Box
        ref={formReference}
        component="form"
        onSubmit={handleSubmit(submitHandler, submitErrorHandler)}
      >
        <WrappedComponent
          {...props}
          control={control}
          values={watchValues}
          errors={errors}
          setValue={setValue}
          trigger={trigger}
        />

        <StepNavigation
          activeStep={activeStep}
          setNewStep={setNewStep}
          hasPatternErrors={hasPatternErrors}
          hasValidateErrors={hasValidateErrors}
          isDirty={isDirty}
          finishOnboarding={finishOnboarding}
        />

        <UnsavedChangesDialog
          open={unsavedChangesDialogOpen}
          clearUnsavedChanges={clearUnsavedChanges}
          saveUnsavedChanges={saveUnsavedChanges}
          cancelStepChange={cancelStepChange}
        />
      </Box>
    );
  };

  ComponentWithForm.displayName = `withFormWrapper(${displayName})`;
  return ComponentWithForm;
};
