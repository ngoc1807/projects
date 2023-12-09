import { Box, Stack, Switch, Typography } from "@mui/material";
import { FC, useState } from "react";
import {
  CustomFormHelperText,
  FormHelperTextVariants,
} from "src/components/forms/common/custom-form-helper-text";
import { selectedTenantSelector } from "src/features/organization/organization.slice";
import {
  platformOperationsApi,
  useGetStellaStatusQuery,
} from "src/services/platform/operations";
import { useAppDispatch, useAppSelector } from "src/store/store";

export const OperationManagementSetting: FC = () => {
  const [helperText, setHelperText] = useState(
    undefined as
      | undefined
      | {
          status: FormHelperTextVariants;
          text: string;
          persist: boolean;
        }
  );
  const dispatch = useAppDispatch();

  const selectedTenant = useAppSelector(selectedTenantSelector);
  const { data: stellaStatus, refetch } = useGetStellaStatusQuery(
    selectedTenant?.id || "",
    {
      skip: !selectedTenant,
    }
  );
  const handleOperationChange = async (checked: boolean) => {
    if (!selectedTenant) {
      return;
    }
    const status: "1" | "0" | "x" = checked === false ? "0" : "1";
    setHelperText(undefined);

    const response = await dispatch(
      platformOperationsApi.endpoints.updateStellaStatus.initiate({
        tenant_id: selectedTenant?.id,
        status,
      })
    );

    if ("data" in response && response?.data?.resultCode === 200) {
      setTimeout(() => {
        setHelperText({
          status: "success",
          text: "Saved!",
          persist: false,
        });
        refetch();
      }, 200);
      return;
    }

    setHelperText({
      status: "error",
      text: "There was an error. Please try again!",
      persist: true,
    });
  };

  return (
    <Box display="flex">
      <Typography variant="h6" sx={{ marginRight: 4 }} display="inline">
        Control STELLA&trade;
      </Typography>
      <Box>
        <Stack direction="row" alignItems="center">
          <Typography>Off</Typography>
          <Switch
            color="secondary"
            checked={stellaStatus?.status === "0" ? false : true}
            onChange={(_, value) => handleOperationChange(value)}
          />
          <Typography>On</Typography>
        </Stack>
        <CustomFormHelperText
          variant={helperText?.status}
          persist={helperText?.persist}
          text={helperText?.text}
        />
      </Box>
    </Box>
  );
};
