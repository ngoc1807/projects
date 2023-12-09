import { Divider, useTheme } from "@mui/material";
import { FC } from "react";
import { FormTextFieldContainer } from "src/components/forms/common/form-textfield-container";
import { FormSwitchContainer } from "src/components/forms/common/form-switch-container";
import { FormWrapperProps, withFormWrapper } from "../common/form-wrapper";
import { callConfigurationRules } from "../common/validation/rules";

const CallConfigurationFormContent: FC<FormWrapperProps> = ({
  control,
  errors,
}) => {
  const theme = useTheme();
  return (
    <>
      <FormSwitchContainer
        control={control}
        errors={errors}
        label="STELLA will handle All Calls?"
        name="handleAllCalls"
        size="small"
        rightAlign
      />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="STELLA will allow How many seconds before STELLA Picks up"
        name="allowHowManySecondsBeforePickup"
        size="small"
        required={
          !!callConfigurationRules.allowHowManySecondsBeforePickup?.required
        }
        rules={{
          pattern:
            callConfigurationRules.allowHowManySecondsBeforePickup?.pattern,
        }}
        rightAlign
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="STELLA will Allow How many seconds of ringing before Voicemail "
        name="allowHowManySecondsRinging"
        size="small"
        required={!!callConfigurationRules.allowHowManySecondsRinging?.required}
        rules={{
          pattern: callConfigurationRules.allowHowManySecondsRinging?.pattern,
        }}
        rightAlign
      />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <FormSwitchContainer
        control={control}
        errors={errors}
        label="Should STELLA Indicate the Call Will be recorded"
        name="indicateCallRecorded"
        size="small"
        rightAlign
      />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <FormSwitchContainer
        control={control}
        errors={errors}
        label="Include Text Confirmation/Text Opt In for Appointments"
        name="includeTextAppointments"
        size="small"
        rightAlign
      />
      <FormSwitchContainer
        control={control}
        errors={errors}
        label="Include Call Survey Rating at End of Call"
        name="includesCallSurvey"
        size="small"
        rightAlign
      />
    </>
  );
};

export const CallConfigurationForm = withFormWrapper(
  CallConfigurationFormContent
);
