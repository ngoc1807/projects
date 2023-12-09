import { cleanup, render } from "@testing-library/react";
import { ReportingError } from "../reporting-error";

describe("reporting-error", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<ReportingError />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
