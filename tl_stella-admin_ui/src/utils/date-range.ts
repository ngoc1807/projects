import { DateTime } from "luxon";

const MIN_DATE = DateTime.fromFormat("03-01-2022", "MM-dd-yyyy").startOf("day"); // from this day we've started collecting all important metrics (for calls)
const MAX_DATE = DateTime.local().endOf("day");

export interface DateRange {
  name: string;
  startDate: string;
  endDate: string;
}

const now = DateTime.local();

// pre defined data ranges
const todayRange: DateRange = {
  name: "Today",
  startDate: now.startOf("day").toUTC().toISO(),
  endDate: now.endOf("day").toUTC().toISO(),
};
const yesterdayRange: DateRange = {
  name: "Yesterday",
  startDate: now.minus({ days: 1 }).startOf("day").toUTC().toISO(),
  endDate: now.minus({ days: 1 }).endOf("day").toUTC().toISO(),
};
// now.startOf("week").toUTC().toISO()
// now.endOf("week").toUTC().toISO()
// The above commands should work but Luxon defaults the start of the week to Monday
// https://github.com/moment/luxon/issues/373
// this is a temporary solution until Luxon has this functionality, keep an eye on that issue
const thisWeekRange: DateRange = {
  name: "This Week",
  startDate: now
    .startOf("week")
    .plus({ week: now.weekdayShort === "Sun" ? 1 : 0 })
    .minus({ day: 1 })
    .toUTC()
    .toISO(),
  endDate: now
    .endOf("week")
    .plus({ week: now.weekdayShort === "Sat" ? 1 : 0 })
    .minus({ day: 1 })
    .toUTC()
    .toISO(),
};
const thisMonthRange: DateRange = {
  name: "This Month",
  startDate: now.startOf("month").toUTC().toISO(),
  endDate: now.endOf("day").toUTC().toISO(),
};
const lastMonthRange: DateRange = {
  name: "Last Month",
  startDate: now.minus({ month: 1 }).startOf("month").toUTC().toISO(),
  endDate: now.minus({ month: 1 }).endOf("month").toUTC().toISO(),
};

const predefinedDateRanges: DateRange[] = [
  todayRange,
  yesterdayRange,
  thisWeekRange,
  thisMonthRange,
  lastMonthRange,
];

const getPredefinedDateRange = (
  startDate: DateTime,
  endDate: DateTime
): DateRange => {
  const match = predefinedDateRanges.find(
    (range) =>
      range.startDate === startDate.startOf("day").toUTC().toISO() &&
      range.endDate === endDate.endOf("day").toUTC().toISO()
  );

  if (match) {
    return match;
  }

  return {
    name: "Custom",
    startDate: startDate.startOf("day").toUTC().toISO(),
    endDate: endDate.endOf("day").toUTC().toISO(),
  };
};

export {
  MIN_DATE,
  MAX_DATE,
  todayRange,
  yesterdayRange,
  thisWeekRange,
  thisMonthRange,
  lastMonthRange,
  getPredefinedDateRange,
};
