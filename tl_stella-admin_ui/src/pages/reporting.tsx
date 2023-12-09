import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { MainHeading } from "src/components/layout/main-heading";
import { ReportingFilters } from "src/components/reporting/reporting-filters";
import { ReportingStats } from "src/components/reporting/reporting-stats";
import { selectedTenantSelector } from "src/features/organization/organization.slice";
import { useAppSelector, wrapper } from "src/store/store";
import { DateRange, thisMonthRange } from "src/utils/date-range";

const ReportingPage = () => {
  const selectedTenant = useAppSelector(selectedTenantSelector);
  const [dateRange, setDateRange] = useState<DateRange>(thisMonthRange);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item sx={{ mx: "auto", width: "100%", maxWidth: 1500 }}>
        <MainHeading>
          {selectedTenant?.name
            ? `Reporting for ${selectedTenant.name}`
            : undefined}
        </MainHeading>
        <ReportingFilters dateRange={dateRange} setDateRange={setDateRange} />
        <ReportingStats dateRange={dateRange} />
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

export default ReportingPage;
