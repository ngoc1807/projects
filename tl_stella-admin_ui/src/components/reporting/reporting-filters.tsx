import { CalendarToday as CalendarTodayIcon } from "@mui/icons-material";
import LuxonAdapter from "@date-io/luxon";
import { DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { DateTime } from "luxon";
import {
  Dispatch,
  FC,
  FocusEvent,
  forwardRef,
  Ref,
  SetStateAction,
} from "react";
import {
  DateRange,
  getPredefinedDateRange,
  lastMonthRange,
  MAX_DATE,
  MIN_DATE,
  thisMonthRange,
  todayRange,
  yesterdayRange,
} from "src/utils/date-range";

interface Props {
  dateRange: DateRange;
  setDateRange: Dispatch<SetStateAction<DateRange>>;
}

const DateInput = forwardRef(
  (props: TextFieldProps, reference: Ref<HTMLDivElement>) => {
    return (
      <TextField
        {...props}
        size="small"
        InputProps={{
          inputRef: reference,
          endAdornment: (
            <InputAdornment position="end" sx={{ marginRight: -1 }}>
              <IconButton
                onClick={(event) =>
                  props.inputProps?.onFocus &&
                  props.inputProps?.onFocus(
                    event as unknown as FocusEvent<HTMLInputElement>
                  )
                }
              >
                <CalendarTodayIcon color="inherit" fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
);
// added to silence the react/display-name warning (false positive: https://github.com/yannickcr/eslint-plugin-react/issues/2269)
DateInput.displayName = "DateInput";

export const ReportingFilters: FC<Props> = ({ setDateRange, dateRange }) => {
  const dateRanges = [
    todayRange,
    yesterdayRange,
    thisMonthRange,
    lastMonthRange,
  ];

  const handleDateChange = (dateRange: DateRange) => {
    setDateRange(dateRange);
  };

  return (
    <Box mb={5} display="flex" flexDirection="column">
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Date Filters
      </Typography>
      <ToggleButtonGroup
        exclusive
        onChange={(_, value) => handleDateChange(value)}
        size="small"
        sx={{ marginBottom: 2 }}
      >
        {dateRanges.map((range) => (
          <ToggleButton
            key={range.name}
            value={range}
            selected={range.name === dateRange.name}
          >
            {range.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box sx={{ display: "flex" }}>
        <LocalizationProvider dateAdapter={LuxonAdapter}>
          <DateRangePicker
            startText="start"
            endText="end"
            minDate={MIN_DATE}
            maxDate={MAX_DATE}
            value={[dateRange.startDate, dateRange.endDate]}
            onChange={([startDate, endDate]: [
              DateTime | null,
              DateTime | null
            ]) => {
              if (startDate && endDate) {
                setDateRange(getPredefinedDateRange(startDate, endDate));
              }
            }}
            renderInput={(startProps, endProps) => (
              <>
                <DateInput {...startProps} />
                <Box sx={{ mx: 2 }}> - </Box>
                <DateInput {...endProps} />
              </>
            )}
          />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};
