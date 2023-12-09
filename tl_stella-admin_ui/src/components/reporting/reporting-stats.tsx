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
import { DateTime } from "luxon";
import { FC, useEffect, useState } from "react";
import { CustomSkeleton } from "src/components/custom-skeleton/custom-skeleton";
import { ReportingError } from "src/components/errors/reporting-error";
import { WidgetCard } from "src/components/widgets/widget-card";
import { selectedTenantSelector } from "src/features/organization/organization.slice";
import { useGetOverallBookingSummaryQuery } from "src/services/platform/reporting/generated";
import { useAppSelector } from "src/store/store";
import { DateRange, thisMonthRange } from "src/utils/date-range";

interface Props {
  dateRange: DateRange;
}

type RowType = {
  name: string;
  value: number | undefined | "-";
};

function createTable(rows: RowType[], title: string) {
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
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            // SKELETON: uncomment this to show skeleton load
            // row = { name: row.name };
            return (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {row.value ?? (
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

export const ReportingStats: FC<Props> = ({ dateRange }) => {
  const selectedTenant = useAppSelector(selectedTenantSelector);
  const [callsRows, setCallsRows] = useState<RowType[]>([]);
  const [appointmentsRows, setAppointmentsRow] = useState<RowType[]>([]);
  const [transfersRows, setTransfersRows] = useState<RowType[]>([]);
  const startDate: string = DateTime.fromISO(
    dateRange.startDate ?? thisMonthRange.startDate
  )
    .toUTC()
    .toISO();
  const endDate: string = DateTime.fromISO(
    dateRange.endDate ?? thisMonthRange.endDate
  )
    .toUTC()
    .toISO();

  const { data: reportingData, error } = useGetOverallBookingSummaryQuery(
    {
      tenantId: selectedTenant?.id,
      startDate,
      endDate,
    },
    { skip: !selectedTenant }
  );

  useEffect(() => {
    setCallsRows([{ name: "Total Calls", value: reportingData?.total }]);
    setTransfersRows([
      { name: "Transferred Calls", value: reportingData?.transferred },
    ]);
    setAppointmentsRow([
      { name: "Booked Appointments", value: reportingData?.booked },
      { name: "Rescheduled Appointments", value: reportingData?.rescheduled },
    ]);
  }, [reportingData]);

  return error ? (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <WidgetCard>
          <ReportingError />
        </WidgetCard>
      </Grid>
    </Grid>
  ) : (
    <Grid container spacing={3}>
      {/* <Grid item xs={12} sm={4} md={3} lg={2}>
              <ReportingSubNav />
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10}> */}
      <Grid item xs={12} sm={6} md={3}>
        <WidgetCard>
          <Box display="flex" flexDirection="column">
            {createTable(callsRows, "Calls")}
          </Box>
        </WidgetCard>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <WidgetCard>
          <Box display="flex" flexDirection="column">
            {createTable(transfersRows, "Transfers")}
          </Box>
        </WidgetCard>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <WidgetCard>
          <Box display="flex" flexDirection="column">
            {createTable(appointmentsRows, "Appointments")}
          </Box>
        </WidgetCard>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3}>
        <WidgetCard>
          <Box display="flex" flexDirection="column">
            {createTable(callRatingsRows, "Call Ratings")}
          </Box>
        </WidgetCard>
      </Grid> */}
    </Grid>
  );
};
