import LuxonAdapter from "@date-io/luxon";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { cleanup, configure, render } from "@testing-library/react";
import { DateTime } from "luxon";
import { within } from "@testing-library/dom";

import {
  defaultClosedHolidays,
  initialState,
} from "src/features/onboarding/initial-state";
import { WorkingHoursForm } from ".";

configure({ testIdAttribute: "id" });

describe("closed holidays component", () => {
  afterEach(() => {
    cleanup();
  });

  xit("should render correctly", () => {
    const { container, getByText, getByTestId, getByDisplayValue } = render(
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

    const closedHolidaysSectionLabel = getByText(
      "Closed Holidays (all dates with non-standard hours)"
    );

    for (const [index, item] of [...defaultClosedHolidays].entries()) {
      const closedHolidayFormItem = getByTestId(
        `closed-holiday-form-item-inputs-closedHolidays.${index}`
      );
      expect(closedHolidayFormItem).toBeInTheDocument();

      const nameInput = container.querySelector(
        `input[name="closedHolidays.${index}.name"]`
      );
      expect(nameInput).toBeInTheDocument();
      expect(nameInput).toHaveValue(item.name);
      expect(nameInput).toHaveAttribute("disabled");

      if (item.date) {
        const dateInput = getByDisplayValue(
          DateTime.fromISO(item.date).toFormat("M/d/yyyy")
        );
        expect(dateInput).toBeInTheDocument();
        expect(dateInput).toHaveAttribute("disabled");
      }

      if (item.start) {
        const startTimeInput = within(closedHolidayFormItem).getByDisplayValue(
          DateTime.fromISO(item.start).toFormat("hh:mm a")
        );
        expect(startTimeInput).toBeInTheDocument();
        expect(startTimeInput).toHaveAttribute("disabled");
      }

      if (item.end) {
        const endTimeInput = within(closedHolidayFormItem).getByDisplayValue(
          DateTime.fromISO(item.end).toFormat("hh:mm a")
        );
        expect(endTimeInput).toBeInTheDocument();
        expect(endTimeInput).toHaveAttribute("disabled");
      }

      // TODO: test the checkbox

      const switchInput = container.querySelector(
        `input[name="closedHolidays.${index}.disabled"]`
      );
      expect(switchInput).toBeInTheDocument();
      expect(switchInput).not.toBeChecked();

      // TODO: test the delete button
    }

    expect(closedHolidaysSectionLabel).toBeInTheDocument();
  });
});
