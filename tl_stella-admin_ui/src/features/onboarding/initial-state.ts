import { DateTime, Info } from "luxon";
import {
  ClosedHolidaysType,
  OnboardingState,
  TransportType,
  WorkHoursType,
} from "src/features/onboarding/onboarding.types";

export const defaultHoursValues = Info.weekdays("long").map(
  () =>
    ({
      start: null,
      end: null,
      closed: false,
      name: "",
      date: null,
    } as WorkHoursType)
);

const now = DateTime.now();
const currentYear = now.get("year");
const currentMonth = now.get("month");
const currentDay = now.get("day");

export const defaultStartTime = DateTime.local(
  currentYear,
  currentMonth,
  currentDay,
  7
)
  .toUTC()
  .toISO();
export const defaultEndTime = DateTime.local(
  currentYear,
  currentMonth,
  currentDay,
  19
)
  .toUTC()
  .toISO();

const thanksgivingDayUSA = () => {
  const first = DateTime.local(currentYear, 7, 4).weekday;
  const date = 22 + ((11 - first) % 7);
  return DateTime.local(currentYear, 11, date).toUTC().toISO();
};

export const defaultClosedHolidays: ClosedHolidaysType[] = [
  {
    id: "01",
    name: "4th of July",
    start: defaultStartTime,
    end: defaultEndTime,
    date: DateTime.local(currentYear, 7, 4).toUTC().toISO(),
    toggled: false,
    closed: false,
    custom: false,
  },
  {
    id: "02",
    name: "Thanksgiving",
    start: defaultStartTime,
    end: defaultEndTime,
    date: thanksgivingDayUSA(),
    toggled: false,
    closed: false,
    custom: false,
  },
  {
    id: "03",
    name: "Christmas Eve",
    start: defaultStartTime,
    end: defaultEndTime,
    date: DateTime.local(currentYear, 12, 24).toUTC().toISO(),
    toggled: false,
    closed: false,
    custom: false,
  },
  {
    id: "04",
    name: "Christmas Day",
    start: defaultStartTime,
    end: defaultEndTime,
    date: DateTime.local(currentYear, 12, 25).toUTC().toISO(),
    toggled: false,
    closed: false,
    custom: false,
  },
  {
    id: "05",
    name: "New Year's Day",
    start: defaultStartTime,
    end: defaultEndTime,
    date: DateTime.local(currentYear + 1, 1, 1)
      .toUTC()
      .toISO(),
    toggled: false,
    closed: false,
    custom: false,
  },
];

export const initialState: OnboardingState = {
  isOnBoardingCompleted: false,
  formsSaved: [],
  formsSubmitted: false,
  dealershipInfo: {
    addressExplanation: "",
    dealershipName: "",
    dealershipAddress: "",
    dealershipMainPhoneNumber: "",
    makesSold: [],
    makesServiced: [],
    timezone: "",
    groupName: "",
    serviceAddress: "",
    websiteUrl: "",
  },
  workingHours: {
    storeHours: [...defaultHoursValues],
    serviceHours: [...defaultHoursValues],
    closedHolidays: [...defaultClosedHolidays],
  },
  technologySetUp: {
    defaultOpCode: "",
    mainDealerShipITContact: {
      name: "",
      phoneNumber: "",
      email: "",
    },
    serviceScheduler: "",
    defaultTransportType: TransportType.dropoff,
    transportTypes: [TransportType.dropoff, TransportType.waiter],
  },
  callRoutingSetUp: {
    salesPhoneNumber: "",
    salesUseVoicemail: false,
    salesCellPhone: "",
    salesEmailAddress: "",
    servicePhoneNumber: "",
    serviceUseVoicemail: false,
    serviceCellPhone: "",
    serviceEmailAddress: "",
    partsPhoneNumber: "",
    partsUseVoicemail: false,
    partsCellPhone: "",
    partsEmailAddress: "",
    preownedSalesPhoneNumber: "",
    spanishTransferNumber: "",
    receptionistPhoneNumber: "",
    emergencyRoadsideAssistance: "",
    defaultVoicemailEmail: "",
    employees: [],
  },
  callConfiguration: {
    handleAllCalls: false,
    allowHowManySecondsBeforePickup: 1,
    allowHowManySecondsRinging: 2,
    indicateCallRecorded: true,
    includeTextAppointments: false,
    includesCallSurvey: true,
  },
};
