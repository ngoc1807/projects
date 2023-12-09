import {
  Grid,
  MenuItem,
  Select,
  Stack,
  Typography,
  Checkbox,
  ListItemText,
  useTheme,
  Box,
} from "@mui/material";
import {
  Controller,
  ControllerRenderProps,
  FieldValues,
} from "react-hook-form";
import { RequiredAsterisk } from "src/components/forms/common/required-asterisk";
import { CustomFormHelperText } from "src/components/forms/common/custom-form-helper-text";
import { SelectFormFieldProps } from "./form-field-props.types";
import { getErrorMessageByFieldName } from "src/utils/errors";

export const FormSelectContainer = (props: SelectFormFieldProps) => {
  const {
    control,
    errors,
    name,
    placeholder,
    label,
    options,
    direction,
    disabled,
    required,
    rules,
    multiple,
    size = "large",
    fullWidth = false,
    rightAlign = false,
    onChange,
    onBlur,
  } = props;
  const theme = useTheme();

  const errorMessage = getErrorMessageByFieldName(errors, name);

  const renderValueFunction = (multiple: boolean | undefined) =>
    multiple
      ? (selected: string[]) =>
          selected
            .map(
              (item) => options.find((option) => option.value === item)?.name
            )
            .join(", ")
      : undefined;

  const getController = () => (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field,
      }: {
        field: ControllerRenderProps<FieldValues, string>;
      }) => (
        <Select
          {...field}
          size="small"
          fullWidth={fullWidth}
          placeholder={placeholder}
          multiple={multiple}
          disabled={disabled}
          renderValue={renderValueFunction(multiple)}
          sx={{ width: !fullWidth ? 260 : undefined }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 500,
              },
            },
          }}
          onChange={(event, child) => {
            onChange && onChange(event, child);
            field.onChange(event);
          }}
          onBlur={(event) => {
            onBlur && onBlur(event);
            field.onBlur();
          }}
        >
          {options.map(({ name, value }) => (
            <MenuItem key={name} value={value}>
              {multiple && <Checkbox checked={field.value.includes(value)} />}
              <ListItemText
                primary={name}
                sx={{ marginTop: 0, marginBottom: 0 }}
              />
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );

  if (direction === "column") {
    return (
      <Stack direction="column">
        <Box>
          <Typography variant="subtitle1" display="inline">
            {label}
          </Typography>
          <RequiredAsterisk required={required} />
        </Box>
        {getController()}
        <CustomFormHelperText variant="error" text={errorMessage} />
      </Stack>
    );
  }
  return (
    <>
      <Grid
        container
        alignItems="flex-start"
        columnGap={theme.customVariables.columnSpacing}
      >
        <Grid item xs={12} sm>
          <Typography variant="body2" display="inline">
            {label}
          </Typography>
          <RequiredAsterisk required={required} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={size === "large" ? 8 : 5}
          sx={
            rightAlign
              ? { display: "flex", justifyContent: "flex-end" }
              : undefined
          }
        >
          {getController()}
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="flex-start"
        columnGap={theme.customVariables.columnSpacing}
      >
        <Grid item xs={12} sm></Grid>
        <Grid
          item
          xs={12}
          sm={size === "large" ? 8 : 5}
          sx={
            rightAlign
              ? { display: "flex", justifyContent: "flex-end" }
              : undefined
          }
        >
          <CustomFormHelperText variant="error" text={errorMessage} />
        </Grid>
      </Grid>
    </>
  );
};
