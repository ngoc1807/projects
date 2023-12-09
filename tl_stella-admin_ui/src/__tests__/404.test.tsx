import { cleanup, render } from "@testing-library/react";
import Error404 from "../pages/404";

describe("404 error", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<Error404 />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
