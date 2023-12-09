import { Grid, Stack, Box, Typography, Switch, useTheme } from "@mui/material";
import { Controller } from "react-hook-form";
import { CustomFormHelperText } from "src/components/forms/common/custom-form-helper-text";
import { getErrorMessageByFieldName } from "src/utils/errors";
import { FormSwitchProps } from "./form-field-props.types";

export const FormSwitchContainer = (props: FormSwitchProps) => {
  const {
    control,
    errors,
    label,
    name,
    direction,
    size = "large",
    rules,
    rightAlign = false,
    onChange,
    onBlur,
  } = props;

  const theme = useTheme();
  const errorMessage = getErrorMessageByFieldName(errors, name);

  const getController = () => (
    <Box>
      <Typography variant="caption">No</Typography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Switch
            {...field}
            checked={field.value}
            color="secondary"
            onChange={(event, checked) => {
              field.onChange(checked);
              onChange && onChange(event, checked);
            }}
            onBlur={(event) => {
              onBlur && onBlur(event);
              field.onBlur();
            }}
          />
        )}
      />
      <Typography variant="caption">Yes</Typography>
    </Box>
  );

  if (direction === "column") {
    return (
      <Stack direction="column">
        <Typography variant="subtitle1" display="inline">
          {label}
        </Typography>
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
      <CustomFormHelperText variant="error" text={errorMessage} />
    </>
  );
};
