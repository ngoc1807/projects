import {
  Box,
  Grid,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { RequiredAsterisk } from "src/components/forms/common/required-asterisk";
import { CustomFormHelperText } from "src/components/forms/common/custom-form-helper-text";
import { TextFormFieldProps } from "./form-field-props.types";
import { getErrorMessageByFieldName } from "src/utils/errors";

export const FormTextFieldContainer = (props: TextFormFieldProps) => {
  const {
    control,
    errors,
    name,
    placeholder,
    label,
    direction,
    required,
    rules,
    size = "large",
    fullWidth = false,
    rightAlign = false,
    disabled = false,
    onChange,
    onBlur,
  } = props;

  const theme = useTheme();
  const errorMessage = getErrorMessageByFieldName(errors, name);

  const getController = () => (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          disabled={disabled}
          size="small"
          onChange={(event) => {
            onChange && onChange(event);
            field.onChange(event);
          }}
          onBlur={(event) => {
            onBlur && onBlur(event);
            field.onBlur();
          }}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
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
