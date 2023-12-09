import { cleanup, render } from "@testing-library/react";
import { Head } from "../head";

describe("head", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<Head />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
