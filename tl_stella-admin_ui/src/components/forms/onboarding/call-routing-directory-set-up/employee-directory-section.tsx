import { Fab, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Control, FieldErrors, FieldValues } from "react-hook-form";
import { EmployeeDirectoryItem } from "src/features/onboarding/onboarding.types";
import { EmployeeDirectoryCard } from "./employee-directory-card";
import { Add as AddIcon } from "@mui/icons-material";

interface EmployeeDirectorySectionProps {
  valuesKey: string;
  control: Control<FieldValues>;
  errors: FieldErrors;
  fields: EmployeeDirectoryItem[];
  add: () => void;
  remove: (index: number) => void;
  trigger: (name?: string | string[]) => Promise<boolean>;
}

export const EmployeeDirectorySection = ({
  add,
  remove,
  fields,
  control,
  errors,
  valuesKey,
  trigger,
}: EmployeeDirectorySectionProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        marginTop: theme.customVariables.sectionSpacing,
      }}
    >
      {fields.map((employee: EmployeeDirectoryItem, index: number) => (
        <EmployeeDirectoryCard
          key={employee.id}
          fieldName={`${valuesKey}.${index}`}
          control={control}
          errors={errors}
          remove={() => remove(index)}
          trigger={trigger}
        />
      ))}
      <Fab size="small" color="secondary" onClick={add} sx={{ marginTop: 1 }}>
        <AddIcon />
      </Fab>
    </Box>
  );
};
