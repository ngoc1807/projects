import { cleanup, render } from "@testing-library/react";
import { ReportingSubNav } from "../reporting-sub-nav";

describe("reporting-sub-nav", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly", () => {
    const { container } = render(<ReportingSubNav />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
