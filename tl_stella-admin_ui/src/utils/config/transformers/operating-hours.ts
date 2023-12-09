import { DateTime, Info } from "luxon";
import {
  ClosedHolidaysType,
  ClosedHolidayType,
  WorkHoursType,
  WorkHourType,
} from "src/features/onboarding/onboarding.types";

const getFormattedTimeStamp = (timeStamp: string | null): string => {
  if (!timeStamp || !DateTime.isDateTime(DateTime.fromISO(timeStamp))) {
    return "";
  }
  return DateTime.fromISO(timeStamp)
    .toUTC()
    .toLocaleString(DateTime.TIME_24_WITH_SECONDS);
};

const getFormattedHoursJsonString = (hours: WorkHoursType[]) => {
  if (hours.length <= 0) {
    return JSON.stringify([]);
  }

  const daysOfWeek = Info.weekdays("long");

  const formattedHours = hours.map((item, index) => ({
    [daysOfWeek[index]]: item?.closed
      ? null
      : {
          Start:
            item?.start && !item?.closed
              ? DateTime.fromISO(item.start).toFormat("HH:mm:ss")
              : null,
          End:
            item?.end && !item?.closed
              ? DateTime.fromISO(item.end).toFormat("HH:mm:ss")
              : null,
        },
  }));

  return JSON.stringify(formattedHours);
};

const getFormattedHolidaysJsonString = (holidays: ClosedHolidaysType[]) => {
  if (holidays.length <= 0) {
    return JSON.stringify([]);
  }

  const formattedHolidays = holidays.map((holiday) => ({
    Name: holiday.name,
    Closed: holiday.closed,
    Custom: holiday.custom,
    Date: holiday.date,
    Enabled: holiday.toggled,
    Start:
      holiday?.start && !holiday?.closed
        ? DateTime.fromISO(holiday.start).toFormat("HH:mm:ss")
        : null,
    End:
      holiday?.end && !holiday?.closed
        ? DateTime.fromISO(holiday.end).toFormat("HH:mm:ss")
        : null,
  }));

  return JSON.stringify(formattedHolidays);
};

const getHoursFormData = (value: WorkHourType[]): WorkHoursType[] => {
  const hours: WorkHoursType[] = [];

  Info.weekdays("long").map((day, index) => {
    const workHours = value[index];
    const dayHours = workHours?.[day];

    const startDateTime: DateTime | null = dayHours?.Start
      ? DateTime.fromFormat(dayHours.Start, "hh:mm:ss")
      : null;
    const endDateTime: DateTime | null = dayHours?.End
      ? DateTime.fromFormat(dayHours.End, "hh:mm:ss")
      : null;

    const closed = !(
      startDateTime === null &&
      endDateTime === null &&
      dayHours !== null
    );

    hours.push(
      dayHours
        ? {
            start: startDateTime?.toISO() || null,
            end: endDateTime?.toISO() || null,
            closed: false,
          }
        : {
            start: null,
            end: null,
            closed,
          }
    );
  });

  return hours;
};

const getHolidaysFormData = (
  value: ClosedHolidayType[]
): ClosedHolidaysType[] => {
  const holidays: ClosedHolidaysType[] = [];

  value.map((holiday) => {
    const startDateTime = holiday.Start
      ? DateTime.fromFormat(holiday.Start, "hh:mm:ss")
      : null;
    const endDateTime = holiday.End
      ? DateTime.fromFormat(holiday.End, "hh:mm:ss")
      : null;

    holidays.push({
      start: startDateTime?.toISO() || null,
      end: endDateTime?.toISO() || null,
      closed: holiday.Closed,
      custom: holiday.Custom,
      date: holiday.Date,
      toggled: holiday.Enabled,
      name: holiday.Name,
    });
  });

  return holidays;
};

export {
  getHolidaysFormData,
  getHoursFormData,
  getFormattedHolidaysJsonString,
  getFormattedHoursJsonString,
  getFormattedTimeStamp,
};
