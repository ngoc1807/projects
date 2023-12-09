import { Divider, useTheme } from "@mui/material";
import { FC, useEffect } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { FormTextFieldContainer } from "src/components/forms/common/form-textfield-container";
import { FormSwitchContainer } from "src/components/forms/common/form-switch-container";
import { FormWrapperProps, withFormWrapper } from "../common/form-wrapper";
import { callRoutingSetUpRules } from "../common/validation/rules";
import { EmployeeDirectorySection } from "./employee-directory-section";
import { EmployeeDirectoryItem } from "src/features/onboarding/onboarding.types";
import { SectionTitle } from "src/components/common/section-title";

const CallRoutingDirectorySetUpFormContent: FC<FormWrapperProps> = ({
  control,
  errors,
  trigger,
}) => {
  const theme = useTheme();

  const salesUseVoicemail = useWatch({ control, name: "salesUseVoicemail" });
  const salesCellPhone = useWatch({ control, name: "salesCellPhone" });
  const salesEmailAddress = useWatch({ control, name: "salesEmailAddress" });

  const serviceUseVoicemail = useWatch({
    control,
    name: "serviceUseVoicemail",
  });
  const serviceCellPhone = useWatch({ control, name: "serviceCellPhone" });
  const serviceEmailAddress = useWatch({
    control,
    name: "serviceEmailAddress",
  });

  const partsUseVoicemail = useWatch({ control, name: "partsUseVoicemail" });
  const partsCellPhone = useWatch({ control, name: "partsCellPhone" });
  const partsEmailAddress = useWatch({ control, name: "partsEmailAddress" });

  useEffect(() => {
    trigger(["salesCellPhone", "salesEmailAddress"]);
  }, [salesUseVoicemail, salesCellPhone, salesEmailAddress, trigger]);

  useEffect(() => {
    trigger(["serviceCellPhone", "serviceEmailAddress"]);
  }, [serviceUseVoicemail, serviceCellPhone, serviceEmailAddress, trigger]);

  useEffect(() => {
    trigger(["partsCellPhone", "partsEmailAddress"]);
  }, [partsUseVoicemail, partsCellPhone, partsEmailAddress, trigger]);

  const fieldName = "employees";
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
  });
  const watchFieldArray = useWatch({ control, name: fieldName });
  const controlledFields: EmployeeDirectoryItem[] = (fields || []).map(
    (field, index) => {
      return {
        ...field,
        ...watchFieldArray[index],
      };
    }
  );

  const add = () => {
    append({
      name: "",
      department: "",
      role: "",
      phone: "",
      email: "",
      cell: "",
      useVoicemail: false,
    } as EmployeeDirectoryItem);
  };

  return (
    <>
      <SectionTitle title="Call Routing" />

      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Sales Phone Number"
        name="salesPhoneNumber"
        required={!!callRoutingSetUpRules.salesPhoneNumber?.required}
        rules={{ pattern: callRoutingSetUpRules.salesPhoneNumber?.pattern }}
        fullWidth
      />
      <FormSwitchContainer
        control={control}
        errors={errors}
        label="Use voicemail"
        name="salesUseVoicemail"
        size="small"
        rightAlign
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Cell Phone"
        name="salesCellPhone"
        required={!!callRoutingSetUpRules.salesCellPhone?.required}
        rules={{
          pattern: callRoutingSetUpRules.salesCellPhone?.pattern,
          validate: (value) => {
            if (salesUseVoicemail && salesEmailAddress === "" && value === "") {
              return "One of these fields is required";
            }
            return true;
          },
        }}
        disabled={!salesUseVoicemail}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Email Address"
        name="salesEmailAddress"
        required={!!callRoutingSetUpRules.salesEmailAddress?.required}
        rules={{
          pattern: callRoutingSetUpRules.salesEmailAddress?.pattern,
          validate: (value) => {
            if (salesUseVoicemail && salesCellPhone === "" && value === "") {
              return "One of these fields is required";
            }
            return true;
          },
        }}
        disabled={!salesUseVoicemail}
        fullWidth
      />

      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />

      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Service Phone Number"
        name="servicePhoneNumber"
        required={!!callRoutingSetUpRules.servicePhoneNumber?.required}
        rules={{ pattern: callRoutingSetUpRules.servicePhoneNumber?.pattern }}
        fullWidth
      />
      <FormSwitchContainer
        control={control}
        errors={errors}
        label="Use voicemail"
        name="serviceUseVoicemail"
        size="small"
        rightAlign
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Cell Phone"
        name="serviceCellPhone"
        required={!!callRoutingSetUpRules.serviceCellPhone?.required}
        rules={{
          pattern: callRoutingSetUpRules.serviceCellPhone?.pattern,
          validate: (value) => {
            if (
              serviceUseVoicemail &&
              serviceEmailAddress === "" &&
              value === ""
            ) {
              return "One of these fields is required";
            }
            return true;
          },
        }}
        disabled={!serviceUseVoicemail}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Email Address"
        name="serviceEmailAddress"
        required={!!callRoutingSetUpRules.serviceEmailAddress?.required}
        rules={{
          pattern: callRoutingSetUpRules.serviceEmailAddress?.pattern,
          validate: (value) => {
            if (
              serviceUseVoicemail &&
              serviceCellPhone === "" &&
              value === ""
            ) {
              return "One of these fields is required";
            }
            return true;
          },
        }}
        disabled={!serviceUseVoicemail}
        fullWidth
      />

      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />

      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Parts Phone Number"
        name="partsPhoneNumber"
        required={!!callRoutingSetUpRules.partsPhoneNumber?.required}
        rules={{ pattern: callRoutingSetUpRules.partsPhoneNumber?.pattern }}
        fullWidth
      />
      <FormSwitchContainer
        control={control}
        errors={errors}
        label="Use voicemail"
        name="partsUseVoicemail"
        size="small"
        rightAlign
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Cell Phone"
        name="partsCellPhone"
        required={!!callRoutingSetUpRules.partsCellPhone?.required}
        rules={{
          pattern: callRoutingSetUpRules.partsCellPhone?.pattern,
          validate: (value) => {
            if (partsUseVoicemail && partsEmailAddress === "" && value === "") {
              return "One of these fields is required";
            }
            return true;
          },
        }}
        disabled={!partsUseVoicemail}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Email Address"
        name="partsEmailAddress"
        required={!!callRoutingSetUpRules.partsEmailAddress?.required}
        rules={{
          pattern: callRoutingSetUpRules.partsEmailAddress?.pattern,
          validate: (value) => {
            if (partsUseVoicemail && partsCellPhone === "" && value === "") {
              return "One of these fields is required";
            }
            return true;
          },
        }}
        disabled={!partsUseVoicemail}
        fullWidth
      />

      <Divider light sx={{ my: theme.customVariables.sectionSpacing }} />

      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Preowned Sales Phone Number"
        name="preownedSalesPhoneNumber"
        required={!!callRoutingSetUpRules.preownedSalesPhoneNumber?.required}
        rules={{
          pattern: callRoutingSetUpRules.preownedSalesPhoneNumber?.pattern,
        }}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Receptionist Phone Number"
        name="receptionistPhoneNumber"
        required={!!callRoutingSetUpRules.receptionistPhoneNumber?.required}
        rules={{
          pattern: callRoutingSetUpRules.receptionistPhoneNumber?.pattern,
        }}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Emergency/ Roadside assistance"
        name="emergencyRoadsideAssistance"
        required={!!callRoutingSetUpRules.emergencyRoadsideAssistance?.required}
        rules={{
          pattern: callRoutingSetUpRules.emergencyRoadsideAssistance?.pattern,
        }}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Spanish Transfer Number"
        name="spanishTransferNumber"
        required={!!callRoutingSetUpRules.spanishTransferNumber?.required}
        rules={{
          pattern: callRoutingSetUpRules.spanishTransferNumber?.pattern,
        }}
        fullWidth
      />
      <FormTextFieldContainer
        control={control}
        errors={errors}
        label="Default Voicemail Email"
        name="defaultVoicemailEmail"
        required={!!callRoutingSetUpRules.defaultVoicemailEmail?.required}
        rules={{
          pattern: callRoutingSetUpRules.defaultVoicemailEmail?.pattern,
        }}
        fullWidth
      />

      <SectionTitle
        title="Employee Directory"
        sx={{ mt: theme.customVariables.sectionSpacing * 2 }}
      />

      <EmployeeDirectorySection
        control={control}
        errors={errors}
        fields={controlledFields}
        add={add}
        remove={remove}
        valuesKey={fieldName}
        trigger={trigger}
      />
    </>
  );
};

export const CallRoutingDirectorySetUpForm = withFormWrapper(
  CallRoutingDirectorySetUpFormContent
);
