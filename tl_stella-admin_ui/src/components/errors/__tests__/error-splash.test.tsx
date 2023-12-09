import { cleanup, render } from "@testing-library/react";
import { ErrorSplash } from "../error-splash";

describe("error-splash", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly when no error message is passed", () => {
    const { container } = render(<ErrorSplash />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when an error message is passed", () => {
    const errorMessage = "404 Error: Page Not Found";
    const { container } = render(<ErrorSplash errorMessage={errorMessage} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when error is an auth error", () => {
    const errorMessage = "Authentication Error";
    const { container } = render(
      <ErrorSplash authError={true} errorMessage={errorMessage} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
