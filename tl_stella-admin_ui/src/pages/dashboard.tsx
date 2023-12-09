import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { CustomSkeleton } from "src/components/custom-skeleton/custom-skeleton";
import { ReportingError } from "src/components/errors/reporting-error";
import { MainHeading } from "src/components/layout/main-heading";
import { WidgetCard } from "src/components/widgets/widget-card";
import { selectedTenantSelector } from "src/features/organization/organization.slice";
import { useGetBookingBreakdownSummaryQuery } from "src/services/platform/reporting/generated";
import { useAppSelector, wrapper } from "src/store/store";
import {
  lastMonthRange,
  thisMonthRange,
  thisWeekRange,
  todayRange,
} from "src/utils/date-range";

type RowType = {
  name: string;
  today?: number | "-";
  thisWeek?: number | "-";
  thisMonth?: number | "-";
  lastMonth?: number | "-";
};

export function createTable(rows: RowType[], title: string) {
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6" sx={{ paddingBottom: 1 }}>
                {title}
              </Typography>
            </TableCell>
            <TableCell align="right">Today</TableCell>
            <TableCell align="right">This Week</TableCell>
            <TableCell align="right">This Month</TableCell>
            <TableCell align="right">Last Month</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.today ?? (
                    <CustomSkeleton width={25} height={12} isInTable />
                  )}
                </TableCell>
                <TableCell align="right">
                  {row.thisWeek ?? (
                    <CustomSkeleton width={25} height={12} isInTable />
                  )}
                </TableCell>
                <TableCell align="right">
                  {row.thisMonth ?? (
                    <CustomSkeleton width={25} height={12} isInTable />
                  )}
                </TableCell>
                <TableCell align="right">
                  {row.lastMonth ?? (
                    <CustomSkeleton width={25} height={12} isInTable />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const DashboardPage = () => {
  const selectedTenant = useAppSelector(selectedTenantSelector);
  const [callsRows, setCallsRows] = useState<RowType[]>([]);
  const [appointmentsRows, setAppointmentsRow] = useState<RowType[]>([]);
  const [transfersRows, setTransfersRows] = useState<RowType[]>([]);

  const { data: reportingData, error } = useGetBookingBreakdownSummaryQuery(
    {
      tenantId: selectedTenant?.id,
      startOfToday: todayRange.startDate,
      endOfToday: todayRange.endDate,
      firstDayOfThisWeek: thisWeekRange.startDate,
      firstDayOfThisMonth: thisMonthRange.startDate,
      firstDayOfLastMonth: lastMonthRange.startDate,
    },
    { skip: !selectedTenant }
  );

  useEffect(() => {
    setCallsRows([
      {
        name: "Total Calls",
        today: reportingData?.totalToday,
        thisWeek: reportingData?.totalThisWeek,
        thisMonth: reportingData?.totalThisMonth,
        lastMonth: reportingData?.totalLastMonth,
      },
    ]);
    setTransfersRows([
      {
        name: "Transferred Calls",
        today: reportingData?.transferredToday,
        thisWeek: reportingData?.transferredThisWeek,
        thisMonth: reportingData?.transferredThisMonth,
        lastMonth: reportingData?.transferredLastMonth,
      },
    ]);
    setAppointmentsRow([
      {
        name: "Booked Appointments",
        today: reportingData?.bookedToday,
        thisWeek: reportingData?.bookedThisWeek,
        thisMonth: reportingData?.bookedThisMonth,
        lastMonth: reportingData?.bookedLastMonth,
      },
      {
        name: "Rescheduled Appointments",
        today: reportingData?.rescheduledToday,
        thisWeek: reportingData?.rescheduledThisWeek,
        thisMonth: reportingData?.rescheduledThisMonth,
        lastMonth: reportingData?.rescheduledLastMonth,
      },
    ]);
  }, [reportingData]);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item sx={{ mx: "auto", width: "100%", maxWidth: 1500 }}>
        <MainHeading>
          {selectedTenant?.name
            ? `Dashboard for ${selectedTenant.name}`
            : undefined}
        </MainHeading>

        {error ? (
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <WidgetCard>
                <ReportingError />
              </WidgetCard>
            </Grid>
          </Grid>
        ) : (
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <WidgetCard>
                <Box display="flex" flexDirection="column">
                  {createTable(callsRows, "Calls")}
                </Box>
              </WidgetCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <WidgetCard>
                <Box display="flex" flexDirection="column">
                  {createTable(transfersRows, "Transfers")}
                </Box>
              </WidgetCard>
            </Grid>
            <Grid item xs={12} lg={6}>
              <WidgetCard>
                <Box display="flex" flexDirection="column">
                  {createTable(appointmentsRows, "Appointments")}
                </Box>
              </WidgetCard>
            </Grid>
          </Grid>
        )}
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

export default DashboardPage;
