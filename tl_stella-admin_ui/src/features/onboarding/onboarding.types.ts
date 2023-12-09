import { AgentsDataObjectType } from "src/utils/config/dealer-info/general";

export interface ClosedHolidaysType extends WorkHoursType {
  id?: string;
  custom?: boolean;
  toggled: boolean;
  name?: string | null;
  date: string | null;
}
export interface WorkingHours {
  storeHours?: WorkHoursType[];
  serviceHours?: WorkHoursType[];
  closedHolidays?: ClosedHolidaysType[];
}

export type ClosedHolidayType = {
  Name: string | null;
  Closed: boolean;
  Date: string | null;
  Enabled: boolean;
  Start: string | null;
  End: string | null;
  Custom: boolean;
};

export type WorkHourType = {
  [key in string]: {
    Start: string | null;
    End: string | null;
  } | null;
};

export interface WorkHoursType {
  start: string | null;
  end: string | null;
  closed: boolean;
}

export interface DealershipInfo {
  addressExplanation?: string;
  dealershipAddress?: string;
  dealershipMainPhoneNumber?: string;
  dealershipName?: string;
  groupName?: string;
  makesServiced?: string[];
  makesSold?: string[];
  serviceAddress?: string;
  timezone?: string;
  websiteUrl?: string;
}

export interface MainDealerShipITContact {
  name: string;
  phoneNumber: string;
  email: string;
}

export interface TechnologySetUp {
  defaultOpCode?: string;
  mainDealerShipITContact: MainDealerShipITContact;
  serviceScheduler?: string;
  defaultTransportType?: TransportType;
  transportTypes?: TransportType[];
}

export interface CallRoutingType {
  salesPhoneNumber?: string;
  salesUseVoicemail?: boolean;
  salesCellPhone?: string;
  salesEmailAddress?: string;
  servicePhoneNumber?: string;
  serviceUseVoicemail?: boolean;
  serviceCellPhone?: string;
  serviceEmailAddress?: string;
  partsPhoneNumber?: string;
  partsUseVoicemail?: boolean;
  partsCellPhone?: string;
  partsEmailAddress?: string;
  preownedSalesPhoneNumber?: string;
}

export interface CallRoutingSetUp {
  salesPhoneNumber?: string;
  salesUseVoicemail?: boolean;
  salesCellPhone?: string;
  salesEmailAddress?: string;
  servicePhoneNumber?: string;
  serviceUseVoicemail?: boolean;
  serviceCellPhone?: string;
  serviceEmailAddress?: string;
  partsPhoneNumber?: string;
  partsUseVoicemail?: boolean;
  partsCellPhone?: string;
  partsEmailAddress?: string;
  preownedSalesPhoneNumber?: string;
  spanishTransferNumber?: string;
  receptionistPhoneNumber?: string;
  emergencyRoadsideAssistance?: string;
  defaultVoicemailEmail?: string;
  employees?: EmployeeDirectoryItem[];
  agents?: AgentsDataObjectType[];
  callRouting?: CallRoutingType;
}

export interface CallConfiguration {
  handleAllCalls?: boolean;
  allowHowManySecondsBeforePickup?: number;
  allowHowManySecondsRinging?: number;
  indicateCallRecorded?: boolean;
  includeTextAppointments?: boolean;
  includesCallSurvey?: boolean;
}

export interface EmployeeDirectoryItem {
  id?: string;
  name?: string;
  department?: string;
  role?: string;
  phone?: string;
  email?: string;
  cell?: string;
  useVoicemail?: boolean;
}

export interface OnboardingState {
  isOnBoardingCompleted: boolean;
  formsSaved: string[];
  formsSubmitted: boolean;
  dealershipInfo?: DealershipInfo;
  workingHours?: WorkingHours;
  technologySetUp?: TechnologySetUp;
  callRoutingSetUp?: CallRoutingSetUp;
  callConfiguration?: CallConfiguration;
  formCompletedStatuses?: boolean[];
}

export enum TransportType {
  "dropoff" = "dropoff",
  "waiter" = "waiter",
  "loaner" = "loaner",
  "shuttle" = "shuttle",
  "rental" = "rental",
}

export const TransportTypeLabels: { [key in TransportType]: string } = {
  dropoff: "Drop Off",
  waiter: "Waiter",
  loaner: "Loaner",
  shuttle: "Shuttle",
  rental: "Rental",
};

export type DealerInfoFormField = keyof DealershipInfo;
export type WorkingHoursFields = keyof WorkingHours;
export type TechnologySetUpFields = keyof TechnologySetUp;
export type CallRoutingSetUpFields = keyof CallRoutingSetUp;
export type CallConfigurationFields = keyof CallConfiguration;
