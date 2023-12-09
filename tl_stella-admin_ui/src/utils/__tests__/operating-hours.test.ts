import { DateTime } from "luxon";
import {
  WorkHoursType,
  WorkHourType,
} from "src/features/onboarding/onboarding.types";
import {
  getFormattedHoursJsonString,
  getFormattedTimeStamp,
  getHoursFormData,
} from "../config/transformers/operating-hours";
describe("Config util operating hours", () => {
  describe("getFormattedHoursJsonString", () => {
    it("getFormattedHoursJsonString to return object", () => {
      const hours: WorkHoursType[] = [
        {
          start: getFormattedTimeStamp("2020-01-01T08:00:00.000Z"),
          end: getFormattedTimeStamp("2020-01-01T20:00:00.000Z"),
          closed: true,
        },
        {
          start: "",
          end: "",
          closed: false,
        },
        {
          start: getFormattedTimeStamp("2020-01-01T08:00:00.000Z"),
          end: getFormattedTimeStamp("2020-01-01T20:00:00.000Z"),
          closed: false,
        },
        {
          start: getFormattedTimeStamp("2020-01-01T08:00:00.000Z"),
          end: getFormattedTimeStamp("2020-01-01T20:00:00.000Z"),
          closed: false,
        },
        {
          start: getFormattedTimeStamp("2020-01-01T08:00:00.000Z"),
          end: getFormattedTimeStamp("2020-01-01T20:00:00.000Z"),
          closed: false,
        },
        {
          start: getFormattedTimeStamp("2020-01-01T08:00:00.000Z"),
          end: getFormattedTimeStamp("2020-01-01T20:00:00.000Z"),
          closed: false,
        },
        {
          start: getFormattedTimeStamp(null),
          end: getFormattedTimeStamp("2020-01-01T20:00:00.000Z"),
          closed: false,
        },
      ];

      const formattedHours = getFormattedHoursJsonString(hours);

      expect(formattedHours).toEqual(
        JSON.stringify([
          {
            Monday: null,
          },
          {
            Tuesday: {
              Start: null,
              End: null,
            },
          },
          {
            Wednesday: {
              Start: "08:00:00",
              End: "20:00:00",
            },
          },
          {
            Thursday: {
              Start: "08:00:00",
              End: "20:00:00",
            },
          },
          {
            Friday: {
              Start: "08:00:00",
              End: "20:00:00",
            },
          },
          {
            Saturday: {
              Start: "08:00:00",
              End: "20:00:00",
            },
          },
          {
            Sunday: {
              Start: null,
              End: "20:00:00",
            },
          },
        ])
      );
    });

    it("getFormattedHoursJsonString to exit on no data", () => {
      expect(getFormattedHoursJsonString([])).toEqual(JSON.stringify([]));
    });
  });
  describe("getHoursFormData", () => {
    it("test getHoursFormData - all three states (open, closed, initial)", () => {
      const now = DateTime.now();
      const currentYear = now.get("year");
      const currentMonth = now.get("month");
      const currentDay = now.get("day");

      const value: WorkHourType[] = [
        {
          Monday: {
            Start: "08:00:00", // Open state
            End: "18:00:00",
          },
        },
        {
          Tuesday: {
            Start: "07:00:00",
            End: "18:00:00",
          },
        },
        {
          Wednesday: null, // Closed state
        },
        {
          Thursday: {
            Start: "00:00:00",
            End: "18:00:00",
          },
        },
        {
          Friday: {
            Start: null, // Initial state, user has not stated open or closed yet
            End: null,
          },
        },
        {
          Saturday: {
            Start: "08:00:00",
            End: "18:00:00",
          },
        },
        {
          Sunday: {
            Start: "08:00:00",
            End: "12:00:00",
          },
        },
      ];
      const result: WorkHoursType[] = [
        {
          start: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            8
          ).toISO(),
          end: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            18
          ).toISO(),
          closed: false,
        },
        {
          start: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            7
          ).toISO(),
          end: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            18
          ).toISO(),
          closed: false,
        },
        {
          closed: true,
          end: null,
          start: null,
        },
        {
          start: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            0
          ).toISO(),
          end: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            18
          ).toISO(),
          closed: false,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          start: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            8
          ).toISO(),
          end: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            18
          ).toISO(),
          closed: false,
        },
        {
          start: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            8
          ).toISO(),
          end: DateTime.local(
            currentYear,
            currentMonth,
            currentDay,
            12
          ).toISO(),
          closed: false,
        },
      ];

      expect(getHoursFormData(value)).toEqual(result);
    });
    it("test getHoursFormData - empty", () => {
      const result: WorkHoursType[] = [
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
      ];
      expect(getHoursFormData([])).toEqual(result);
    });
    it("test getHoursFormData - all are null", () => {
      const value: WorkHourType[] = [
        {
          Monday: {
            Start: null,
            End: null,
          },
        },
        {
          Tuesday: {
            Start: null,
            End: null,
          },
        },
        {
          Wednesday: {
            Start: null,
            End: null,
          },
        },
        {
          Thursday: {
            Start: null,
            End: null,
          },
        },
        {
          Friday: {
            Start: null,
            End: null,
          },
        },
        {
          Saturday: {
            Start: null,
            End: null,
          },
        },
        {
          Sunday: {
            Start: null,
            End: null,
          },
        },
      ];
      const result: WorkHoursType[] = [
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
        {
          closed: false,
          end: null,
          start: null,
        },
      ];

      expect(getHoursFormData(value)).toEqual(result);
    });
  });
});
