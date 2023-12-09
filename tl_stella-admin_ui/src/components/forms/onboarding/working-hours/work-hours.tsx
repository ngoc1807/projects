import { Grid, Typography, Box } from "@mui/material";
import { CustomFormHelperText } from "src/components/forms/common/custom-form-helper-text";
import { Info } from "luxon";
import { memo } from "react";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { TimePickerRange } from "src/components/forms/onboarding/working-hours/timer-picker-range";
import { WorkHoursType } from "src/features/onboarding/onboarding.types";
import { getErrorMessageByFieldName } from "src/utils/errors";
import { RequiredAsterisk } from "../../common/required-asterisk";
import { hoursRules } from "../common/validation/rules";

interface WorkHoursProps {
  control: Control<FieldValues>;
  fieldName: string;
  values: WorkHoursType[];
  errors: FieldErrors;
  trigger: (name?: string | string[]) => Promise<boolean>;
}

export const WorkHours = ({
  control,
  fieldName,
  values,
  errors,
  trigger,
}: WorkHoursProps) => {
  return (
    <>
      {Info.weekdays("long").map(
        (date: string, index: number) =>
          values && (
            <MemoizedWeeklyHoursTimesheetItem
              key={date}
              item={values[index]}
              date={date}
              control={control}
              fieldName={`${fieldName}.${index}`}
              errors={errors && errors[index] !== undefined && errors[index]}
              trigger={trigger}
            />
          )
      )}
    </>
  );
};

interface WeeklyHoursTimesheetItemProps {
  date: string;
  control: Control<FieldValues>;
  fieldName: string;
  item: WorkHoursType;
  errors: FieldErrors;
  trigger: (name?: string | string[]) => Promise<boolean>;
}

const WeeklyHoursTimesheetItem = ({
  date,
  control,
  fieldName,
  item,
  errors,
  trigger,
}: WeeklyHoursTimesheetItemProps) => {
  return (
    <Grid container key={date} justifyContent="space-between">
      <Grid item display="flex" alignItems="center" xs={12} sm={3}>
        <Box display="flex" columnGap="4px">
          <Typography variant="body2">{date}</Typography>
          <RequiredAsterisk required />
        </Box>
      </Grid>
      <Grid item xs={10} sm={7}>
        <TimePickerRange
          control={control}
          fieldName={`${fieldName}`}
          disabledInputs={item?.closed}
          errors={errors}
          rulesStart={{ pattern: hoursRules.start?.pattern }}
          rulesEnd={{ pattern: hoursRules.end?.pattern }}
          requiredStart={!!hoursRules.start?.required}
          requiredEnd={!!hoursRules.end?.required}
          trigger={trigger}
        />
        <CustomFormHelperText
          variant="error"
          text={getErrorMessageByFieldName(errors, `${fieldName}.closed`)}
        />
      </Grid>
    </Grid>
  );
};

const MemoizedWeeklyHoursTimesheetItem = memo(
  WeeklyHoursTimesheetItem,
  (
    previousProps: { item: WorkHoursType; errors: FieldErrors },
    nextProps: { item: WorkHoursType; errors: FieldErrors }
  ) =>
    previousProps.item?.start === nextProps.item?.start &&
    previousProps.item?.end === nextProps.item?.end &&
    previousProps.item?.closed === nextProps.item?.closed &&
    previousProps.errors === nextProps.errors
);
