import { Grid, useTheme } from "@mui/material";
import { FC } from "react";
import { useFieldArray, useWatch } from "react-hook-form";
import { SectionTitle } from "src/components/common/section-title";
import { ClosedHolidays } from "src/components/forms/onboarding/working-hours/closed-holidays";
import { WorkHours } from "src/components/forms/onboarding/working-hours/work-hours";
import {
  defaultEndTime,
  defaultStartTime,
} from "src/features/onboarding/initial-state";
import {
  ClosedHolidaysType,
  WorkHoursType,
} from "src/features/onboarding/onboarding.types";
import { FormWrapperProps, withFormWrapper } from "../common/form-wrapper";

const WorkingHoursFormContent: FC<FormWrapperProps> = ({
  control,
  errors,
  trigger,
}) => {
  const theme = useTheme();

  const closedHolidayValuesKey = "closedHolidays";
  const storeHoursKey = "storeHours";
  const serviceHoursKey = "serviceHours";
  const watchStoreHoursFields = useWatch({ control, name: storeHoursKey });
  const controlledStoresHoursFields = (watchStoreHoursFields || []).map(
    (field: WorkHoursType, index: number) => {
      return {
        ...field,
        ...watchStoreHoursFields[index],
      };
    }
  );

  const watchServiceHours = useWatch({ control, name: serviceHoursKey });
  const controlledServiceHoursFields = (watchStoreHoursFields || []).map(
    (field: WorkHoursType, index: number) => {
      return {
        ...field,
        ...watchServiceHours[index],
      };
    }
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: closedHolidayValuesKey as never,
  });
  const watchFieldArray = useWatch({ control, name: closedHolidayValuesKey });
  const controlledFields: ClosedHolidaysType[] = (fields || []).map(
    (field, index) => {
      return {
        ...field,
        ...watchFieldArray[index],
      };
    }
  );

  const add = () => {
    append({
      id: Date.now().toString(),
      name: "",
      start: defaultStartTime,
      end: defaultEndTime,
      date: null,
      custom: true,
      toggled: true,
    } as ClosedHolidaysType);
  };

  return (
    <>
      <Grid
        container
        spacing={theme.customVariables.sectionSpacing * 4}
        mb={theme.customVariables.sectionSpacing * 2}
      >
        <Grid item xs={12} lg={6}>
          <SectionTitle title="Store Hours" />
          <WorkHours
            fieldName="storeHours"
            control={control}
            values={controlledStoresHoursFields}
            errors={errors && errors[storeHoursKey]}
            trigger={trigger}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <SectionTitle title="Service Hours" />
          <WorkHours
            fieldName="serviceHours"
            control={control}
            values={controlledServiceHoursFields}
            errors={errors && errors[serviceHoursKey]}
            trigger={trigger}
          />
        </Grid>
      </Grid>
      <ClosedHolidays
        control={control}
        errors={errors && errors[closedHolidayValuesKey]}
        fields={controlledFields}
        add={add}
        remove={remove}
        valuesKey={closedHolidayValuesKey}
        trigger={trigger}
      />
    </>
  );
};

export const WorkingHoursForm = withFormWrapper(WorkingHoursFormContent);
