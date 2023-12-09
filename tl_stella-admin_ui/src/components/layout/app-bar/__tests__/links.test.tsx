import { cleanup, render } from "@testing-library/react";
import { Links } from "../links";

describe("links", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<Links />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
