import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Grid,
  IconButton,
  TextField,
  useMediaQuery,
  Switch,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import { useMemo } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { SectionTitle } from "src/components/common/section-title";
import { TimePickerRange } from "src/components/forms/onboarding/working-hours/timer-picker-range";
import { ClosedHolidaysType } from "src/features/onboarding/onboarding.types";
import { getErrorMessageByFieldName } from "src/utils/errors";
import { CustomFormHelperText } from "../../common/custom-form-helper-text";
import { closedHolidaysRules } from "../common/validation/rules";

interface ClosedHolidayFormItemProps {
  item: ClosedHolidaysType;
  valuesKey: string;
  remove: (index: number) => void;
  control: Control<FieldValues>;
  errors: FieldErrors;
  index: number;
  trigger: (name?: string | string[]) => Promise<boolean>;
}

const ClosedHolidayFormItem = ({
  item,
  valuesKey,
  remove,
  control,
  errors,
  index,
  trigger,
}: ClosedHolidayFormItemProps) => {
  const theme = useTheme();
  const fieldName = `${valuesKey}.${index}`;
  const breakpointExtraLargeAndUp = useMediaQuery(theme.breakpoints.up("xl"));

  const NameInput = useMemo(
    () => (
      <>
        <Controller
          name={`${fieldName}.name`}
          control={control}
          rules={{ pattern: closedHolidaysRules.name?.pattern }}
          render={({ field }) => {
            return (
              <TextField
                {...field}
                size="small"
                label={`Holiday Name${
                  closedHolidaysRules.name?.required ? " *" : ""
                }`}
                disabled={!item.toggled}
                inputProps={{
                  disabled: !item.toggled,
                  readOnly: !item.custom,
                }}
                fullWidth
              />
            );
          }}
        />
      </>
    ),
    [control, item, fieldName]
  );

  const DateInput = useMemo(
    () => (
      <>
        <Controller
          name={`${fieldName}.date`}
          control={control}
          rules={{ pattern: closedHolidaysRules.date?.pattern }}
          render={({ field }) => (
            <DatePicker
              value={field.value}
              label="Date"
              views={["month", "day", "year"]}
              disabled={!item.toggled}
              readOnly={!item.custom}
              renderInput={(field) => (
                <TextField
                  {...field}
                  label={`Date${
                    closedHolidaysRules.date?.required ? " *" : ""
                  }`}
                  size="small"
                  fullWidth
                />
              )}
              onChange={(value) => field.onChange(value)}
            />
          )}
        />
      </>
    ),
    [control, item, fieldName]
  );

  const TimeInput = useMemo(() => {
    return (
      <>
        <TimePickerRange
          control={control}
          fieldName={fieldName}
          disabled={!item.toggled}
          disabledInputs={!item.toggled || item.closed}
          errors={errors}
          rulesStart={{ pattern: closedHolidaysRules.start?.pattern }}
          rulesEnd={{ pattern: closedHolidaysRules.end?.pattern }}
          requiredStart={!!closedHolidaysRules.start?.required}
          requiredEnd={!!closedHolidaysRules.end?.required}
          trigger={trigger}
        />
        <CustomFormHelperText
          variant="error"
          text={getErrorMessageByFieldName(errors, `${fieldName}.closed`)}
        />
      </>
    );
  }, [control, errors, fieldName, item.closed, item.toggled, trigger]);

  const SwitchInput = useMemo(
    () => (
      <>
        <Controller
          name={`${fieldName}.toggled`}
          control={control}
          render={({ field }) => {
            return (
              <Switch
                {...field}
                color="secondary"
                defaultChecked={item.toggled}
                onChange={(_, checked) => field.onChange(checked)}
              />
            );
          }}
        />
      </>
    ),
    [control, item, fieldName]
  );
  const errorMessage = getErrorMessageByFieldName(errors, fieldName);

  return (
    <Grid
      container
      mb={breakpointExtraLargeAndUp ? 0 : theme.customVariables.rowSpacing * 4}
      columnSpacing={theme.customVariables.sectionSpacing}
    >
      <Grid item id={`closed-holiday-form-item-inputs-${fieldName}`} xs={true}>
        <Grid container columnSpacing={theme.customVariables.columnSpacing}>
          <Grid item xs={12} md={6} xl="auto">
            <Box sx={{ paddingBottom: 1 }}>
              {NameInput}
              <CustomFormHelperText variant="error" text={errorMessage} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} xl="auto">
            <Box sx={{ paddingBottom: 1 }}>
              {DateInput}
              <CustomFormHelperText variant="error" text={errorMessage} />
            </Box>
          </Grid>
          <Grid item xs={12} md={12} xl="auto">
            {TimeInput}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs="auto">
        <Grid container columnSpacing={theme.customVariables.columnSpacing}>
          <Grid item xs={12} md="auto">
            <Box>{SwitchInput}</Box>
          </Grid>
          <Grid item xs={12} md="auto">
            <Box>
              <IconButton
                onClick={() => {
                  remove(index);
                }}
                color="inherit"
                disabled={!item.custom}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

interface ClosedHolidaysProps {
  valuesKey: string;
  control: Control<FieldValues>;
  errors: FieldErrors;
  fields: ClosedHolidaysType[];
  add: () => void;
  remove: (index: number) => void;
  trigger: (name?: string | string[]) => Promise<boolean>;
}

export const ClosedHolidays = ({
  valuesKey,
  control,
  errors,
  fields,
  add,
  remove,
  trigger,
}: ClosedHolidaysProps) => {
  const theme = useTheme();
  return (
    <>
      <SectionTitle title="Closed Holidays (all dates with non-standard hours)" />

      {fields.map((item: ClosedHolidaysType, index: number) => {
        return (
          <ClosedHolidayFormItem
            valuesKey={valuesKey}
            control={control}
            errors={errors && errors[index] !== undefined && errors[index]}
            key={item.id}
            item={item}
            index={index}
            remove={() => remove(index)}
            trigger={trigger}
          />
        );
      })}
      <Box
        mt={theme.customVariables.rowSpacing}
        display="flex"
        justifyContent="flex-end"
      >
        <IconButton onClick={add} color="inherit">
          <AddCircleOutlineIcon color="inherit" fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
};
