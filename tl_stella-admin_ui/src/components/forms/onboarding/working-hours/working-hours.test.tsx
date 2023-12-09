import LuxonAdapter from "@date-io/luxon";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { cleanup, configure, render } from "@testing-library/react";
import {
  defaultClosedHolidays,
  initialState,
} from "src/features/onboarding/initial-state";
import { WorkingHoursForm } from ".";

configure({ testIdAttribute: "id" });

describe("working hours", () => {
  afterEach(() => {
    cleanup();
  });

  xit("should render correctly", () => {
    const { getByText, getByTestId } = render(
      <LocalizationProvider dateAdapter={LuxonAdapter}>
        <WorkingHoursForm
          submitForm={jest.fn()}
          defaultValues={initialState.workingHours}
          activeStep={1}
          setActiveStep={jest.fn()}
          setNewStep={jest.fn()}
          newStep={null}
          finishOnboarding={jest.fn()}
        />
      </LocalizationProvider>
    );

    const storeHoursSectionLabel = getByText("Store Hours");
    const serviceHoursSectionLabel = getByText("Service Hours");
    const closedHolidaysSectionLabel = getByText(
      "Closed Holidays (all dates with non-standard hours)"
    );

    for (const [index] of [...defaultClosedHolidays].entries()) {
      const closedHolidayFormItem = getByTestId(
        `closed-holiday-form-item-inputs-closedHolidays.${index}`
      );
      expect(closedHolidayFormItem).toBeInTheDocument();
    }

    expect(storeHoursSectionLabel).toBeInTheDocument();
    expect(serviceHoursSectionLabel).toBeInTheDocument();
    expect(closedHolidaysSectionLabel).toBeInTheDocument();
  });
});
