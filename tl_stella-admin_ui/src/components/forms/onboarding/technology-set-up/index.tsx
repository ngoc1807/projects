import ReportIcon from "@mui/icons-material/Report";
import { Divider, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { FormTextFieldContainer } from "src/components/forms/common/form-textfield-container";
import { TransportType } from "src/features/onboarding/onboarding.types";
import { FormWrapperProps, withFormWrapper } from "../common/form-wrapper";
import { technologySetUpRules } from "../common/validation/rules";
import { MainDealershipITContact } from "./main-dealership-it-contact";
import { TransportTypeTransferList } from "./transport-types-transfer-list";

const TechnologySetUpFormContent: FC<FormWrapperProps> = ({
  values,
  control,
  errors,
  setValue,
}) => {
  const onTransportTypeChange = (selectedTransportTypes: TransportType[]) => {
    setValue("transportTypes", selectedTransportTypes, {
      shouldDirty: true,
      shouldTouch: true,
    });

    if (selectedTransportTypes.length > 0) {
      setValue("defaultTransportType", selectedTransportTypes[0], {
        shouldDirty: true,
        shouldTouch: true,
      });
    }
  };

  const theme = useTheme();
  return (
    <>
      <MainDealershipITContact control={control} errors={errors} />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="body2">
            Scheduler Set Up Instructions:
          </Typography>
          <Typography
            variant="body2"
            fontWeight={theme.typography.fontWeightMedium}
          >
            Please create an admin user for api@stellaautomotive.com
          </Typography>
        </Box>
        <ReportIcon fontSize="small" />
      </Box>
      <Box mt={theme.customVariables.sectionSpacing}>
        <FormTextFieldContainer
          control={control}
          errors={errors}
          label="Service Scheduler"
          name="serviceScheduler"
          required={!!technologySetUpRules.serviceScheduler?.required}
          rules={{
            pattern: technologySetUpRules.serviceScheduler?.pattern,
          }}
          size="small"
          fullWidth
        />
      </Box>
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Default Service Op Code (Tell Us More)"
        name="defaultOpCode"
        size="small"
        fullWidth
        required={!!technologySetUpRules.defaultOpCode?.required}
        rules={{
          pattern: technologySetUpRules.defaultOpCode?.pattern,
        }}
      />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <TransportTypeTransferList
        selectedTypes={values.transportTypes}
        onChange={onTransportTypeChange}
      />
    </>
  );
};

export const TechnologySetUpForm = withFormWrapper(TechnologySetUpFormContent);
