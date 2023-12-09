import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import { RequiredAsterisk } from "src/components/forms/common/required-asterisk";
import { CustomFormHelperText } from "../../common/custom-form-helper-text";
import {
  mainDealerShipItContactRules,
  technologySetUpRules,
} from "../common/validation/rules";

export const MainDealershipITContact = ({
  control,
  errors,
}: {
  control: Control<FieldValues>;
  errors: FieldErrors;
}) => {
  const theme = useTheme();
  const breakpointMediumAndUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Card variant="outlined">
      <CardContent
        sx={{
          "&:last-child": {
            paddingBottom: "10px",
          },
        }}
      >
        <Grid container columnSpacing={theme.customVariables.sectionSpacing}>
          <Grid item xs={12} md="auto">
            <Typography
              variant="body2"
              textAlign="right"
              maxWidth={breakpointMediumAndUp ? 200 : "none"}
              display="inline"
            >
              Main Dealership IT Contact
            </Typography>
            <RequiredAsterisk required />
          </Grid>
          <Grid item xs={12} md>
            <Grid container columnSpacing={theme.customVariables.columnSpacing}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="mainDealerShipITContact.name"
                  control={control}
                  rules={{
                    pattern: mainDealerShipItContactRules.name?.pattern,
                  }}
                  render={({ field }) => (
                    <TextField {...field} size="small" label="Name" fullWidth />
                  )}
                />
                <CustomFormHelperText
                  variant="error"
                  text={errors["mainDealerShipITContact"]?.name?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="mainDealerShipITContact.phoneNumber"
                  control={control}
                  rules={{
                    pattern: mainDealerShipItContactRules.phoneNumber?.pattern,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label="Phone number"
                      fullWidth
                    />
                  )}
                />
                <CustomFormHelperText
                  variant="error"
                  text={errors["mainDealerShipITContact"]?.phoneNumber?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="mainDealerShipITContact.email"
                  control={control}
                  rules={{
                    pattern: (
                      technologySetUpRules.mainDealerShipITContact as Record<
                        string,
                        RegisterOptions
                      >
                    ).email?.pattern,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      size="small"
                      label="Email"
                      fullWidth
                    />
                  )}
                />
                <CustomFormHelperText
                  variant="error"
                  text={errors["mainDealerShipITContact"]?.email?.message}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
