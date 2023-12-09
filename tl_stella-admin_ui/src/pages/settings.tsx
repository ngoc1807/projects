import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { MainHeading } from "src/components/layout/main-heading";
import { OperationManagementSetting } from "src/components/settings/operation-management-setting";
import { WidgetCard } from "src/components/widgets/widget-card";
import { selectedTenantSelector } from "src/features/organization/organization.slice";
import { useAppSelector, wrapper } from "src/store/store";

const SettingsPage = () => {
  const selectedTenant = useAppSelector(selectedTenantSelector);
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item sx={{ mx: "auto", width: "100%", maxWidth: 1500 }}>
        <MainHeading>
          {selectedTenant?.name
            ? `Settings for ${selectedTenant.name}`
            : undefined}
        </MainHeading>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={4} md={3} lg={2}>
            // sub nav here
          </Grid>
          <Grid item xs={12} sm={8} md={9} lg={10}> */}
          <Grid item xs={6}>
            <WidgetCard>
              <OperationManagementSetting />
            </WidgetCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

// every page should either have getServerSideProps setting the session or authenticationDisabled
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => {
    return async (context) => {
      return {
        props: {
          session: await getSession(context),
        },
      };
    };
  });

export default SettingsPage;
