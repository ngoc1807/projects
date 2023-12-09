import { TimePicker } from "@mui/x-date-pickers";
import { TextField, Checkbox, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
  useWatch,
} from "react-hook-form";
import { DateTime } from "luxon";

type TimePickerRangeProps = {
  control: Control<FieldValues>;
  disabled?: boolean;
  disabledInputs?: boolean;
  errors: FieldErrors;
  fieldName: string;
  requiredEnd?: boolean;
  requiredStart?: boolean;
  rulesEnd?: UseControllerProps["rules"];
  rulesStart?: UseControllerProps["rules"];
  trigger: (name?: string | string[]) => Promise<boolean>;
};

export const TimePickerRange = ({
  control,
  disabled,
  disabledInputs,
  errors,
  fieldName,
  requiredEnd,
  requiredStart,
  rulesEnd,
  rulesStart,
  trigger,
}: TimePickerRangeProps) => {
  const theme = useTheme();

  const start = useWatch({ control, name: `${fieldName}.start` });
  const end = useWatch({ control, name: `${fieldName}.end` });
  const closed = useWatch({ control, name: `${fieldName}.closed` });

  useEffect(() => {
    if (start !== null || end !== null || closed !== false) {
      trigger([
        `${fieldName}.start`,
        `${fieldName}.end`,
        `${fieldName}.closed`,
      ]);
    }
  }, [closed, end, fieldName, start, trigger]);

  return (
    <Box
      display="flex"
      alignItems="center"
      columnGap={theme.customVariables.columnSpacing}
      sx={{
        flexGrow: 2,
        flexShrink: 0,
      }}
    >
      <CustomTimepicker
        disabled={disabled}
        disabledInputs={disabledInputs}
        control={control}
        fieldName={`${fieldName}.start`}
        label="Open"
        errors={errors}
        rules={rulesStart}
        required={requiredStart}
        start={start}
        end={end}
      />
      <Box sx={{ lineHeight: "2.321rem" }}>{" - "}</Box>
      <CustomTimepicker
        disabled={disabled}
        disabledInputs={disabledInputs}
        control={control}
        fieldName={`${fieldName}.end`}
        label="Close"
        errors={errors}
        rules={rulesEnd}
        required={requiredEnd}
        start={start}
        end={end}
      />
      <Box display="flex" alignItems="center">
        <Controller
          name={`${fieldName}.closed`}
          control={control}
          rules={{
            validate: (value) => {
              if ((start === null || end === null) && value === false) {
                return "Either enter open and close hours or choose closed";
              }
              return true;
            },
          }}
          render={({ field }) => {
            return (
              <Checkbox
                {...field}
                checked={field.value}
                disabled={disabled}
                size="small"
              />
            );
          }}
        />
        <Typography
          variant="caption"
          color={disabled ? "InactiveCaptionText" : undefined}
        >
          Closed
        </Typography>
      </Box>
    </Box>
  );
};

type CustomTimepickerProps = {
  fieldName: string;
  control: Control<FieldValues>;
  disabled?: boolean;
  disabledInputs?: boolean;
  label?: string;
  errors: FieldErrors;
  rules?: UseControllerProps["rules"];
  required?: boolean;
  start: unknown;
  end: unknown;
};

const CustomTimepicker = ({
  fieldName,
  control,
  disabled,
  disabledInputs,
  label,
  required,
  start,
  end,
}: CustomTimepickerProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Controller
        name={fieldName}
        control={control}
        rules={{
          validate: (value) => {
            if ((start === null || end === null) && value === false) {
              return "Either enter open and close hours or check closed";
            }
            return true;
          },
        }}
        render={({ field }) => (
          <TimePicker
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            value={field.value}
            disabled={disabled || disabledInputs ? true : false}
            clearable
            renderInput={(field) => (
              <TextField
                {...field}
                size="small"
                InputProps={{
                  endAdornment: null,
                }}
                label={`${label}${required ? " *" : ""}`}
                onClick={() => !disabled && !disabledInputs && setOpen(true)}
              />
            )}
            onChange={(value) =>
              field.onChange(value ? (value as DateTime).toUTC().toISO() : null)
            }
          />
        )}
      />
    </Box>
  );
};
