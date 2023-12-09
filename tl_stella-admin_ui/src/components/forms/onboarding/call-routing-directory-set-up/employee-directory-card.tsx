import { Delete as DeleteIcon } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import { FC, useEffect } from "react";
import { Control, FieldErrors, FieldValues, useWatch } from "react-hook-form";
import { FormSelectContainer } from "src/components/forms/common/form-select-container";
import { FormTextFieldContainer } from "src/components/forms/common/form-textfield-container";
import { employeeRules } from "../common/validation/rules";
import { departments, getRolesByDepartment } from "../common/data/roles";
import { FormSwitchContainer } from "../../common/form-switch-container";

interface EmployeeDirectoryItemProps {
  control: Control<FieldValues>;
  errors: FieldErrors;
  fieldName: string;
  remove: () => void;
  trigger: (name?: string | string[]) => Promise<boolean>;
}

export const EmployeeDirectoryCard: FC<EmployeeDirectoryItemProps> = ({
  control,
  errors,
  fieldName,
  remove,
  trigger,
}) => {
  const theme = useTheme();
  const departmentsList = departments.map((department) => ({
    value: department,
    name: department,
  }));
  const selectedDepartment = useWatch({
    control,
    name: `${fieldName}.department`,
  });

  const useVoicemail = useWatch({
    control,
    name: `${fieldName}.useVoicemail`,
  });
  const email = useWatch({
    control,
    name: `${fieldName}.email`,
  });
  const cell = useWatch({
    control,
    name: `${fieldName}.cell`,
  });

  useEffect(() => {
    trigger([`${fieldName}.cell`, `${fieldName}.email`]);
  }, [useVoicemail, cell, email, fieldName, trigger]);

  return (
    <Card sx={{ width: "100%", marginBottom: 1 }} raised={false} elevation={0}>
      <CardContent>
        <Box
          display="flex"
          alignItems="flex-start"
          columnGap={theme.customVariables.columnSpacing}
        >
          <Grid
            container
            columnSpacing={theme.customVariables.columnSpacing}
            rowSpacing={theme.customVariables.rowSpacing}
          >
            <Grid item xs={12} sm={6} lg={3}>
              <FormTextFieldContainer
                control={control}
                errors={errors}
                direction="column"
                label="Name"
                name={`${fieldName}.name`}
                fullWidth
                required={!!employeeRules.name?.required}
                rules={{
                  pattern: employeeRules.name?.pattern,
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <FormSelectContainer
                control={control}
                errors={errors}
                direction="column"
                label="Department"
                name={`${fieldName}.department`}
                options={departmentsList}
                fullWidth
                required={!!employeeRules.department?.required}
                rules={{
                  pattern: employeeRules.department?.pattern,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <FormSelectContainer
                control={control}
                errors={errors}
                direction="column"
                label="Role"
                name={`${fieldName}.role`}
                disabled={!selectedDepartment}
                options={getRolesByDepartment(selectedDepartment)}
                fullWidth
                required={!!employeeRules.role?.required}
                rules={{
                  pattern: employeeRules.role?.pattern,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <FormTextFieldContainer
                control={control}
                errors={errors}
                direction="column"
                label="Phone Number"
                name={`${fieldName}.phone`}
                fullWidth
                required={!!employeeRules.phone?.required}
                rules={{
                  pattern: employeeRules.phone?.pattern,
                }}
              />
            </Grid>
            <Grid item xs={12} md="auto">
              <FormSwitchContainer
                control={control}
                errors={errors}
                label="Use voicemail"
                direction="column"
                name={`${fieldName}.useVoicemail`}
                size="small"
                rightAlign
              />
            </Grid>
            <Grid item xs={12} md={true}>
              <FormTextFieldContainer
                control={control}
                errors={errors}
                direction="column"
                label="Cell Phone"
                name={`${fieldName}.cell`}
                required={!!employeeRules.cell?.required}
                rules={{
                  pattern: employeeRules.cell?.pattern,
                  validate: (value) => {
                    if (useVoicemail && email === "" && value === "") {
                      return "One of these fields is required";
                    }
                    return true;
                  },
                }}
                fullWidth
                disabled={!useVoicemail}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <FormTextFieldContainer
                control={control}
                errors={errors}
                direction="column"
                label="Email"
                name={`${fieldName}.email`}
                required={!!employeeRules.email?.required}
                rules={{
                  pattern: employeeRules.email?.pattern,
                  validate: (value) => {
                    if (useVoicemail && cell === "" && value === "") {
                      return "One of these fields is required";
                    }
                    return true;
                  },
                }}
                fullWidth
                disabled={!useVoicemail}
              />
            </Grid>
          </Grid>
          <IconButton onClick={remove}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
