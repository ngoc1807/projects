import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import LuxonAdapter from "@date-io/luxon";
import { cleanup, render } from "@testing-library/react";
import { DateTime } from "luxon";
import { ReportingFilters } from "../reporting-filters";

const now = DateTime.local();
const mockDateRange = {
  name: "Today",
  startDate: now.startOf("day").toUTC().toISO(),
  endDate: now.endOf("day").toUTC().toISO(),
};
const setDateRange = jest.fn();

describe("reporting-filters", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container, getByText } = render(
      <LocalizationProvider dateAdapter={LuxonAdapter}>
        <ReportingFilters
          dateRange={mockDateRange}
          setDateRange={setDateRange}
        />
      </LocalizationProvider>
    );
    const todayButton = getByText("Today");
    const yesterdayButton = getByText("Yesterday");
    const thisMonthButton = getByText("This Month");
    const lastMonthButton = getByText("Last Month");
    expect(getByText("Date Filters")).toBeInTheDocument();
    expect(todayButton).toBeInTheDocument();
    expect(todayButton.getAttribute("aria-pressed")).toEqual("true");
    expect(yesterdayButton).toBeInTheDocument();
    expect(yesterdayButton.getAttribute("aria-pressed")).toEqual("false");
    expect(thisMonthButton).toBeInTheDocument();
    expect(thisMonthButton.getAttribute("aria-pressed")).toEqual("false");
    expect(lastMonthButton).toBeInTheDocument();
    expect(lastMonthButton.getAttribute("aria-pressed")).toEqual("false");

    // expect(container.firstChild).toMatchSnapshot(); // cannot enable this because dates will always change
    expect(
      container.querySelector(".MuiToggleButtonGroup-root")
    ).toBeInTheDocument();
  });
});
