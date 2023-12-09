import { cleanup, render } from "@testing-library/react";
import Error500 from "../pages/500";

describe("500 error", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<Error500 />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
