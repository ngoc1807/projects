import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { makes } from "../common/data/makes";
import { timeZones } from "../common/data/time-zones";
import { FormSelectContainer } from "src/components/forms/common/form-select-container";
import { FormTextFieldContainer } from "src/components/forms/common/form-textfield-container";
import { FormWrapperProps, withFormWrapper } from "../common/form-wrapper";
import { dealershipInfoRules } from "../common/validation/rules";

const DealerInfoFormContent: FC<FormWrapperProps> = ({ control, errors }) => {
  const theme = useTheme();
  const breakpointSmallAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Dealership Name"
        name="dealershipName"
        required={!!dealershipInfoRules.dealershipName?.required}
        rules={{ pattern: dealershipInfoRules.dealershipName?.pattern }}
        fullWidth
      />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Dealership Address"
        name="dealershipAddress"
        required={!!dealershipInfoRules.dealershipAddress?.required}
        rules={{ pattern: dealershipInfoRules.dealershipAddress?.pattern }}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Address Explanation"
        name="addressExplanation"
        required={!!dealershipInfoRules.addressExplanation?.required}
        rules={{ pattern: dealershipInfoRules.addressExplanation?.pattern }}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Service Address (if different)"
        name="serviceAddress"
        required={!!dealershipInfoRules.serviceAddress?.required}
        rules={{ pattern: dealershipInfoRules.serviceAddress?.pattern }}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Group Name"
        name="groupName"
        required={!!dealershipInfoRules.groupName?.required}
        rules={{ pattern: dealershipInfoRules.groupName?.pattern }}
        fullWidth
      />
      <FormSelectContainer
        control={control}
        errors={errors}
        label="Makes Sold"
        name="makesSold"
        options={makes}
        multiple={true}
        fullWidth={!breakpointSmallAndUp}
        required={!!dealershipInfoRules.makesSold?.required}
        rules={{ pattern: dealershipInfoRules.makesSold?.pattern }}
      />
      <FormSelectContainer
        control={control}
        errors={errors}
        label="Makes Serviced"
        name="makesServiced"
        options={makes}
        multiple={true}
        fullWidth={!breakpointSmallAndUp}
        required={!!dealershipInfoRules.makesServiced?.required}
        rules={{ pattern: dealershipInfoRules.makesServiced?.pattern }}
      />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Website URL"
        name="websiteUrl"
        required={!!dealershipInfoRules.websiteUrl?.required}
        rules={{ pattern: dealershipInfoRules.websiteUrl?.pattern }}
        fullWidth
      />
      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Dealership Main Phone Number"
        name="dealershipMainPhoneNumber"
        required={!!dealershipInfoRules.dealershipMainPhoneNumber?.required}
        rules={{
          pattern: dealershipInfoRules.dealershipMainPhoneNumber?.pattern,
        }}
        fullWidth
      />
      <FormSelectContainer
        control={control}
        errors={errors}
        label="Time Zone"
        name="timezone"
        options={timeZones}
        required={!!dealershipInfoRules.timezone?.required}
        rules={{ pattern: dealershipInfoRules.timezone?.pattern }}
        fullWidth={!breakpointSmallAndUp}
      />
    </>
  );
};

export const DealerInfoForm = withFormWrapper(DealerInfoFormContent);
