import { api } from 'src/services/platform/reporting';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
};

export enum AccentOptions {
  American = 'AMERICAN',
  Foreign = 'FOREIGN',
  ForeignChinese = 'FOREIGN_CHINESE',
  ForeignHispanic = 'FOREIGN_HISPANIC',
  Unknown = 'UNKNOWN'
}

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export type BooleanOperationFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type CallAnalysis = {
  __typename?: 'CallAnalysis';
  conversationId?: Maybe<Scalars['String']>;
  notes?: Maybe<Scalars['String']>;
  result?: Maybe<CallAnalysisResult>;
  status?: Maybe<CallAnalysisStatus>;
};

export type CallAnalysisFilterInput = {
  and?: InputMaybe<Array<CallAnalysisFilterInput>>;
  conversationId?: InputMaybe<StringOperationFilterInput>;
  notes?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CallAnalysisFilterInput>>;
  result?: InputMaybe<NullableOfCallAnalysisResultOperationFilterInput>;
  status?: InputMaybe<NullableOfCallAnalysisStatusOperationFilterInput>;
};

export enum CallAnalysisResult {
  FrustratedCallForwarded = 'FRUSTRATED_CALL_FORWARDED',
  FrustratedCallHangUp = 'FRUSTRATED_CALL_HANG_UP',
  SuccessfulTransaction = 'SUCCESSFUL_TRANSACTION',
  ValidCallForwarded = 'VALID_CALL_FORWARDED',
  WrongBooking = 'WRONG_BOOKING'
}

export type CallAnalysisSortInput = {
  conversationId?: InputMaybe<SortEnumType>;
  notes?: InputMaybe<SortEnumType>;
  result?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
};

export enum CallAnalysisStatus {
  AbandonedCall = 'ABANDONED_CALL',
  BadCall = 'BAD_CALL',
  GoodCall = 'GOOD_CALL',
  OutOfScope = 'OUT_OF_SCOPE'
}

export type CallClassification = {
  __typename?: 'CallClassification';
  accent?: Maybe<AccentOptions>;
  conversationId?: Maybe<Scalars['String']>;
  desiredSchedulingTimeIdentification?: Maybe<YesNoWithNaOptions>;
  flowDetected?: Maybe<YesNoOptions>;
  phoneNumberIdentification?: Maybe<YesNoWithNaOptions>;
  scope?: Maybe<CallClassificationScope>;
  serviceOptionIdentification?: Maybe<YesNoWithNaOptions>;
  transportTypeIdentification?: Maybe<YesNoWithNaOptions>;
  vehicleTypeIdentification?: Maybe<YesNoWithNaOptions>;
};

export type CallClassificationFilterInput = {
  accent?: InputMaybe<NullableOfAccentOptionsOperationFilterInput>;
  and?: InputMaybe<Array<CallClassificationFilterInput>>;
  conversationId?: InputMaybe<StringOperationFilterInput>;
  desiredSchedulingTimeIdentification?: InputMaybe<NullableOfYesNoWithNaOptionsOperationFilterInput>;
  flowDetected?: InputMaybe<NullableOfYesNoOptionsOperationFilterInput>;
  or?: InputMaybe<Array<CallClassificationFilterInput>>;
  phoneNumberIdentification?: InputMaybe<NullableOfYesNoWithNaOptionsOperationFilterInput>;
  scope?: InputMaybe<NullableOfCallClassificationScopeOperationFilterInput>;
  serviceOptionIdentification?: InputMaybe<NullableOfYesNoWithNaOptionsOperationFilterInput>;
  transportTypeIdentification?: InputMaybe<NullableOfYesNoWithNaOptionsOperationFilterInput>;
  vehicleTypeIdentification?: InputMaybe<NullableOfYesNoWithNaOptionsOperationFilterInput>;
};

export enum CallClassificationScope {
  Book = 'BOOK',
  Cancel = 'CANCEL',
  Change = 'CHANGE',
  Confirm = 'CONFIRM',
  Faq = 'FAQ',
  Other = 'OTHER',
  Quote = 'QUOTE',
  ServiceAdvisor = 'SERVICE_ADVISOR'
}

export type CallClassificationSortInput = {
  accent?: InputMaybe<SortEnumType>;
  conversationId?: InputMaybe<SortEnumType>;
  desiredSchedulingTimeIdentification?: InputMaybe<SortEnumType>;
  flowDetected?: InputMaybe<SortEnumType>;
  phoneNumberIdentification?: InputMaybe<SortEnumType>;
  scope?: InputMaybe<SortEnumType>;
  serviceOptionIdentification?: InputMaybe<SortEnumType>;
  transportTypeIdentification?: InputMaybe<SortEnumType>;
  vehicleTypeIdentification?: InputMaybe<SortEnumType>;
};

/** A connection to a list of items. */
export type CallLogsConnection = {
  __typename?: 'CallLogsConnection';
  /** A list of edges. */
  edges?: Maybe<Array<CallLogsEdge>>;
  /** A flattened list of the nodes. */
  nodes?: Maybe<Array<Maybe<CcaCallLog>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

/** An edge in a connection. */
export type CallLogsEdge = {
  __typename?: 'CallLogsEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<CcaCallLog>;
};

export type CallerInfo = {
  __typename?: 'CallerInfo';
  category?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type CallerInfoFilterInput = {
  and?: InputMaybe<Array<CallerInfoFilterInput>>;
  category?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<CallerInfoFilterInput>>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  source?: InputMaybe<StringOperationFilterInput>;
};

export type CallerInfoSortInput = {
  category?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  source?: InputMaybe<SortEnumType>;
};

export type CcaBookings = {
  __typename?: 'CcaBookings';
  appointmentCreationTime?: Maybe<Scalars['Long']>;
  appointmentDateTime?: Maybe<Scalars['Long']>;
  appointmentId?: Maybe<Scalars['String']>;
  backTrackRecord?: Maybe<Scalars['String']>;
  backTrackTime?: Maybe<Scalars['Long']>;
  conversationId?: Maybe<Scalars['String']>;
  customerId?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  incomingRequest?: Maybe<Scalars['String']>;
  isConfirm?: Maybe<Scalars['Boolean']>;
  orgId?: Maybe<Scalars['String']>;
  outgoingBookingRequest?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  subOrgId?: Maybe<Scalars['String']>;
  tenantId?: Maybe<Scalars['String']>;
};

export type CcaBookingsFilterInput = {
  and?: InputMaybe<Array<CcaBookingsFilterInput>>;
  appointmentCreationTime?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  appointmentDateTime?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  appointmentId?: InputMaybe<StringOperationFilterInput>;
  backTrackRecord?: InputMaybe<StringOperationFilterInput>;
  backTrackTime?: InputMaybe<ComparableNullableOfInt64OperationFilterInput>;
  conversationId?: InputMaybe<StringOperationFilterInput>;
  customerId?: InputMaybe<StringOperationFilterInput>;
  id?: InputMaybe<ComparableInt32OperationFilterInput>;
  incomingRequest?: InputMaybe<StringOperationFilterInput>;
  isConfirm?: InputMaybe<BooleanOperationFilterInput>;
  or?: InputMaybe<Array<CcaBookingsFilterInput>>;
  orgId?: InputMaybe<StringOperationFilterInput>;
  outgoingBookingRequest?: InputMaybe<StringOperationFilterInput>;
  phoneNumber?: InputMaybe<StringOperationFilterInput>;
  provider?: InputMaybe<StringOperationFilterInput>;
  subOrgId?: InputMaybe<StringOperationFilterInput>;
  tenantId?: InputMaybe<StringOperationFilterInput>;
};

export type CcaBookingsQuery = {
  __typename?: 'CcaBookingsQuery';
  bookings?: Maybe<Array<Maybe<CcaBookings>>>;
  callLogBySequence?: Maybe<Array<Maybe<CcaCallLog>>>;
  callLogDetails?: Maybe<Array<Maybe<CcaCallLog>>>;
  callLogDistinctValue?: Maybe<Array<Maybe<Scalars['String']>>>;
  callLogs?: Maybe<CallLogsConnection>;
  callSummary: Scalars['Int'];
};


export type CcaBookingsQueryBookingsArgs = {
  end_date?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<CcaBookingsSortInput>>;
  org_id?: InputMaybe<Scalars['String']>;
  start_date?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<CcaBookingsFilterInput>;
};


export type CcaBookingsQueryCallLogBySequenceArgs = {
  sequence?: InputMaybe<Scalars['String']>;
};


export type CcaBookingsQueryCallLogDetailsArgs = {
  convID?: InputMaybe<Scalars['String']>;
};


export type CcaBookingsQueryCallLogDistinctValueArgs = {
  property?: InputMaybe<Scalars['String']>;
  stack?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<StringOperationFilterInput>;
};


export type CcaBookingsQueryCallLogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Array<CcaCallLogSortInput>>;
  transcript?: InputMaybe<Scalars['String']>;
  where?: InputMaybe<CcaCallLogFilterInput>;
};


export type CcaBookingsQueryCallSummaryArgs = {
  end_time: Scalars['DateTime'];
  source?: InputMaybe<Scalars['String']>;
  start_time: Scalars['DateTime'];
  status?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['String']>;
};

export type CcaBookingsSortInput = {
  appointmentCreationTime?: InputMaybe<SortEnumType>;
  appointmentDateTime?: InputMaybe<SortEnumType>;
  appointmentId?: InputMaybe<SortEnumType>;
  backTrackRecord?: InputMaybe<SortEnumType>;
  backTrackTime?: InputMaybe<SortEnumType>;
  conversationId?: InputMaybe<SortEnumType>;
  customerId?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  incomingRequest?: InputMaybe<SortEnumType>;
  isConfirm?: InputMaybe<SortEnumType>;
  orgId?: InputMaybe<SortEnumType>;
  outgoingBookingRequest?: InputMaybe<SortEnumType>;
  phoneNumber?: InputMaybe<SortEnumType>;
  provider?: InputMaybe<SortEnumType>;
  subOrgId?: InputMaybe<SortEnumType>;
  tenantId?: InputMaybe<SortEnumType>;
};

export type CcaCallLog = {
  __typename?: 'CcaCallLog';
  answerTime?: Maybe<Scalars['DateTime']>;
  audioLink?: Maybe<Scalars['String']>;
  bookings?: Maybe<Array<CcaBookings>>;
  callAnalysis?: Maybe<CallAnalysis>;
  callClassification?: Maybe<CallClassification>;
  callExtension?: Maybe<Scalars['String']>;
  callRecordingPath?: Maybe<Scalars['String']>;
  callSid?: Maybe<Scalars['String']>;
  callType?: Maybe<Scalars['String']>;
  callerInfo?: Maybe<Scalars['String']>;
  callerName?: Maybe<Scalars['String']>;
  context?: Maybe<Scalars['String']>;
  conversationId?: Maybe<Scalars['String']>;
  endedAt: Scalars['DateTime'];
  id?: Maybe<Scalars['String']>;
  nluDetails?: Maybe<Array<NluDetails>>;
  org?: Maybe<Scalars['String']>;
  phoneNumberInformation?: Maybe<CallerInfo>;
  reason?: Maybe<Scalars['String']>;
  sequence: Scalars['Int'];
  source?: Maybe<Scalars['String']>;
  stack?: Maybe<Scalars['String']>;
  startedAt: Scalars['DateTime'];
  status?: Maybe<Scalars['String']>;
  subOrg?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  transcript?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  uniqueId?: Maybe<Scalars['String']>;
  voicemailRecordingPath?: Maybe<Scalars['String']>;
  voicemailTranscript?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CcaCallLogFilterInput = {
  and?: InputMaybe<Array<CcaCallLogFilterInput>>;
  answerTime?: InputMaybe<ComparableNullableOfDateTimeOperationFilterInput>;
  audioLink?: InputMaybe<StringOperationFilterInput>;
  bookings?: InputMaybe<ListFilterInputTypeOfCcaBookingsFilterInput>;
  callAnalysis?: InputMaybe<CallAnalysisFilterInput>;
  callClassification?: InputMaybe<CallClassificationFilterInput>;
  callExtension?: InputMaybe<StringOperationFilterInput>;
  callRecordingPath?: InputMaybe<StringOperationFilterInput>;
  callSid?: InputMaybe<StringOperationFilterInput>;
  callType?: InputMaybe<StringOperationFilterInput>;
  callerInfo?: InputMaybe<StringOperationFilterInput>;
  callerName?: InputMaybe<StringOperationFilterInput>;
  context?: InputMaybe<StringOperationFilterInput>;
  conversationId?: InputMaybe<StringOperationFilterInput>;
  endedAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  id?: InputMaybe<StringOperationFilterInput>;
  nluDetails?: InputMaybe<ListFilterInputTypeOfNluDetailsFilterInput>;
  or?: InputMaybe<Array<CcaCallLogFilterInput>>;
  org?: InputMaybe<StringOperationFilterInput>;
  phoneNumberInformation?: InputMaybe<CallerInfoFilterInput>;
  reason?: InputMaybe<StringOperationFilterInput>;
  sequence?: InputMaybe<ComparableInt32OperationFilterInput>;
  source?: InputMaybe<StringOperationFilterInput>;
  stack?: InputMaybe<StringOperationFilterInput>;
  startedAt?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  status?: InputMaybe<StringOperationFilterInput>;
  subOrg?: InputMaybe<StringOperationFilterInput>;
  telephone?: InputMaybe<StringOperationFilterInput>;
  transcript?: InputMaybe<ListStringOperationFilterInput>;
  type?: InputMaybe<StringOperationFilterInput>;
  uniqueId?: InputMaybe<StringOperationFilterInput>;
  voicemailRecordingPath?: InputMaybe<StringOperationFilterInput>;
  voicemailTranscript?: InputMaybe<ListStringOperationFilterInput>;
};

export type CcaCallLogSortInput = {
  answerTime?: InputMaybe<SortEnumType>;
  audioLink?: InputMaybe<SortEnumType>;
  callAnalysis?: InputMaybe<CallAnalysisSortInput>;
  callClassification?: InputMaybe<CallClassificationSortInput>;
  callExtension?: InputMaybe<SortEnumType>;
  callRecordingPath?: InputMaybe<SortEnumType>;
  callSid?: InputMaybe<SortEnumType>;
  callType?: InputMaybe<SortEnumType>;
  callerInfo?: InputMaybe<SortEnumType>;
  callerName?: InputMaybe<SortEnumType>;
  context?: InputMaybe<SortEnumType>;
  conversationId?: InputMaybe<SortEnumType>;
  endedAt?: InputMaybe<SortEnumType>;
  id?: InputMaybe<SortEnumType>;
  org?: InputMaybe<SortEnumType>;
  phoneNumberInformation?: InputMaybe<CallerInfoSortInput>;
  reason?: InputMaybe<SortEnumType>;
  sequence?: InputMaybe<SortEnumType>;
  source?: InputMaybe<SortEnumType>;
  stack?: InputMaybe<SortEnumType>;
  startedAt?: InputMaybe<SortEnumType>;
  status?: InputMaybe<SortEnumType>;
  subOrg?: InputMaybe<SortEnumType>;
  telephone?: InputMaybe<SortEnumType>;
  type?: InputMaybe<SortEnumType>;
  uniqueId?: InputMaybe<SortEnumType>;
  voicemailRecordingPath?: InputMaybe<SortEnumType>;
};

export type ComparableDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<Scalars['DateTime']>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableInt32OperationFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
  ngt?: InputMaybe<Scalars['Int']>;
  ngte?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<Scalars['Int']>>;
  nlt?: InputMaybe<Scalars['Int']>;
  nlte?: InputMaybe<Scalars['Int']>;
};

export type ComparableNullableOfDateTimeOperationFilterInput = {
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  ngt?: InputMaybe<Scalars['DateTime']>;
  ngte?: InputMaybe<Scalars['DateTime']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  nlt?: InputMaybe<Scalars['DateTime']>;
  nlte?: InputMaybe<Scalars['DateTime']>;
};

export type ComparableNullableOfInt64OperationFilterInput = {
  eq?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  neq?: InputMaybe<Scalars['Long']>;
  ngt?: InputMaybe<Scalars['Long']>;
  ngte?: InputMaybe<Scalars['Long']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  nlt?: InputMaybe<Scalars['Long']>;
  nlte?: InputMaybe<Scalars['Long']>;
};

export type ListFilterInputTypeOfCcaBookingsFilterInput = {
  all?: InputMaybe<CcaBookingsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<CcaBookingsFilterInput>;
  some?: InputMaybe<CcaBookingsFilterInput>;
};

export type ListFilterInputTypeOfNluDetailsFilterInput = {
  all?: InputMaybe<NluDetailsFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<NluDetailsFilterInput>;
  some?: InputMaybe<NluDetailsFilterInput>;
};

export type ListStringOperationFilterInput = {
  all?: InputMaybe<StringOperationFilterInput>;
  any?: InputMaybe<Scalars['Boolean']>;
  none?: InputMaybe<StringOperationFilterInput>;
  some?: InputMaybe<StringOperationFilterInput>;
};

export type NluDetails = {
  __typename?: 'NluDetails';
  callLog?: Maybe<CcaCallLog>;
  conversationId?: Maybe<Scalars['String']>;
  dialogSequence: Scalars['Int'];
  entities?: Maybe<Scalars['String']>;
  intents?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  spacVersion?: Maybe<Scalars['String']>;
  timestamp: Scalars['DateTime'];
  transcription?: Maybe<Scalars['String']>;
};

export type NluDetailsFilterInput = {
  and?: InputMaybe<Array<NluDetailsFilterInput>>;
  callLog?: InputMaybe<CcaCallLogFilterInput>;
  conversationId?: InputMaybe<StringOperationFilterInput>;
  dialogSequence?: InputMaybe<ComparableInt32OperationFilterInput>;
  entities?: InputMaybe<StringOperationFilterInput>;
  intents?: InputMaybe<StringOperationFilterInput>;
  or?: InputMaybe<Array<NluDetailsFilterInput>>;
  role?: InputMaybe<StringOperationFilterInput>;
  spacVersion?: InputMaybe<StringOperationFilterInput>;
  timestamp?: InputMaybe<ComparableDateTimeOperationFilterInput>;
  transcription?: InputMaybe<StringOperationFilterInput>;
};

export type NullableOfAccentOptionsOperationFilterInput = {
  eq?: InputMaybe<AccentOptions>;
  in?: InputMaybe<Array<InputMaybe<AccentOptions>>>;
  neq?: InputMaybe<AccentOptions>;
  nin?: InputMaybe<Array<InputMaybe<AccentOptions>>>;
};

export type NullableOfCallAnalysisResultOperationFilterInput = {
  eq?: InputMaybe<CallAnalysisResult>;
  in?: InputMaybe<Array<InputMaybe<CallAnalysisResult>>>;
  neq?: InputMaybe<CallAnalysisResult>;
  nin?: InputMaybe<Array<InputMaybe<CallAnalysisResult>>>;
};

export type NullableOfCallAnalysisStatusOperationFilterInput = {
  eq?: InputMaybe<CallAnalysisStatus>;
  in?: InputMaybe<Array<InputMaybe<CallAnalysisStatus>>>;
  neq?: InputMaybe<CallAnalysisStatus>;
  nin?: InputMaybe<Array<InputMaybe<CallAnalysisStatus>>>;
};

export type NullableOfCallClassificationScopeOperationFilterInput = {
  eq?: InputMaybe<CallClassificationScope>;
  in?: InputMaybe<Array<InputMaybe<CallClassificationScope>>>;
  neq?: InputMaybe<CallClassificationScope>;
  nin?: InputMaybe<Array<InputMaybe<CallClassificationScope>>>;
};

export type NullableOfYesNoOptionsOperationFilterInput = {
  eq?: InputMaybe<YesNoOptions>;
  in?: InputMaybe<Array<InputMaybe<YesNoOptions>>>;
  neq?: InputMaybe<YesNoOptions>;
  nin?: InputMaybe<Array<InputMaybe<YesNoOptions>>>;
};

export type NullableOfYesNoWithNaOptionsOperationFilterInput = {
  eq?: InputMaybe<YesNoWithNaOptions>;
  in?: InputMaybe<Array<InputMaybe<YesNoWithNaOptions>>>;
  neq?: InputMaybe<YesNoWithNaOptions>;
  nin?: InputMaybe<Array<InputMaybe<YesNoWithNaOptions>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** Indicates whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Indicates whether more edges exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export enum SortEnumType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringOperationFilterInput = {
  and?: InputMaybe<Array<StringOperationFilterInput>>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ncontains?: InputMaybe<Scalars['String']>;
  nendsWith?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nstartsWith?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<StringOperationFilterInput>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum YesNoOptions {
  No = 'NO',
  Yes = 'YES'
}

export enum YesNoWithNaOptions {
  Na = 'NA',
  No = 'NO',
  Yes = 'YES'
}

export type GetBookingBreakdownSummaryQueryVariables = Exact<{
  startOfToday: Scalars['DateTime'];
  endOfToday: Scalars['DateTime'];
  firstDayOfThisWeek: Scalars['DateTime'];
  firstDayOfThisMonth: Scalars['DateTime'];
  firstDayOfLastMonth: Scalars['DateTime'];
  tenantId?: InputMaybe<Scalars['String']>;
}>;


export type GetBookingBreakdownSummaryQuery = { __typename?: 'CcaBookingsQuery', totalToday: number, transferredToday: number, bookedToday: number, rescheduledToday: number, totalThisWeek: number, transferredThisWeek: number, bookedThisWeek: number, rescheduledThisWeek: number, totalThisMonth: number, transferredThisMonth: number, bookedThisMonth: number, rescheduledThisMonth: number, totalLastMonth: number, transferredLastMonth: number, bookedLastMonth: number, rescheduledLastMonth: number };

export type GetOverallBookingSummaryQueryVariables = Exact<{
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  tenantId?: InputMaybe<Scalars['String']>;
}>;


export type GetOverallBookingSummaryQuery = { __typename?: 'CcaBookingsQuery', total: number, transferred: number, booked: number, rescheduled: number };


export const GetBookingBreakdownSummaryDocument = `
    query GetBookingBreakdownSummary($startOfToday: DateTime!, $endOfToday: DateTime!, $firstDayOfThisWeek: DateTime!, $firstDayOfThisMonth: DateTime!, $firstDayOfLastMonth: DateTime!, $tenantId: String) {
  totalToday: callSummary(
    start_time: $startOfToday
    end_time: $endOfToday
    tenant_id: $tenantId
    source: "external"
  )
  transferredToday: callSummary(
    start_time: $startOfToday
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "transferred"
    source: "external"
  )
  bookedToday: callSummary(
    start_time: $startOfToday
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "success"
    source: "external"
  )
  rescheduledToday: callSummary(
    start_time: $startOfToday
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "rescheduled"
    source: "external"
  )
  totalThisWeek: callSummary(
    start_time: $firstDayOfThisWeek
    end_time: $endOfToday
    tenant_id: $tenantId
    source: "external"
  )
  transferredThisWeek: callSummary(
    start_time: $firstDayOfThisWeek
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "transferred"
    source: "external"
  )
  bookedThisWeek: callSummary(
    start_time: $firstDayOfThisWeek
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "success"
    source: "external"
  )
  rescheduledThisWeek: callSummary(
    start_time: $firstDayOfThisWeek
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "rescheduled"
    source: "external"
  )
  totalThisMonth: callSummary(
    start_time: $firstDayOfThisMonth
    end_time: $endOfToday
    tenant_id: $tenantId
    source: "external"
  )
  transferredThisMonth: callSummary(
    start_time: $firstDayOfThisMonth
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "transferred"
    source: "external"
  )
  bookedThisMonth: callSummary(
    start_time: $firstDayOfThisMonth
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "success"
    source: "external"
  )
  rescheduledThisMonth: callSummary(
    start_time: $firstDayOfThisMonth
    end_time: $endOfToday
    tenant_id: $tenantId
    status: "rescheduled"
    source: "external"
  )
  totalLastMonth: callSummary(
    start_time: $firstDayOfLastMonth
    end_time: $firstDayOfThisMonth
    tenant_id: $tenantId
    source: "external"
  )
  transferredLastMonth: callSummary(
    start_time: $firstDayOfLastMonth
    end_time: $firstDayOfThisMonth
    tenant_id: $tenantId
    status: "transferred"
    source: "external"
  )
  bookedLastMonth: callSummary(
    start_time: $firstDayOfLastMonth
    end_time: $firstDayOfThisMonth
    tenant_id: $tenantId
    status: "success"
    source: "external"
  )
  rescheduledLastMonth: callSummary(
    start_time: $firstDayOfLastMonth
    end_time: $firstDayOfThisMonth
    tenant_id: $tenantId
    status: "rescheduled"
    source: "external"
  )
}
    `;
export const GetOverallBookingSummaryDocument = `
    query GetOverallBookingSummary($startDate: DateTime!, $endDate: DateTime!, $tenantId: String) {
  total: callSummary(
    start_time: $startDate
    end_time: $endDate
    tenant_id: $tenantId
    source: "external"
  )
  transferred: callSummary(
    start_time: $startDate
    end_time: $endDate
    tenant_id: $tenantId
    status: "transferred"
    source: "external"
  )
  booked: callSummary(
    start_time: $startDate
    end_time: $endDate
    tenant_id: $tenantId
    status: "success"
    source: "external"
  )
  rescheduled: callSummary(
    start_time: $startDate
    end_time: $endDate
    tenant_id: $tenantId
    status: "rescheduled"
    source: "external"
  )
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    GetBookingBreakdownSummary: build.query<GetBookingBreakdownSummaryQuery, GetBookingBreakdownSummaryQueryVariables>({
      query: (variables) => ({ document: GetBookingBreakdownSummaryDocument, variables })
    }),
    GetOverallBookingSummary: build.query<GetOverallBookingSummaryQuery, GetOverallBookingSummaryQueryVariables>({
      query: (variables) => ({ document: GetOverallBookingSummaryDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useGetBookingBreakdownSummaryQuery, useLazyGetBookingBreakdownSummaryQuery, useGetOverallBookingSummaryQuery, useLazyGetOverallBookingSummaryQuery } = injectedRtkApi;

