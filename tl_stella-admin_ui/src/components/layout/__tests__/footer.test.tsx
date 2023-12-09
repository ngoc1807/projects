import { cleanup, render } from "@testing-library/react";
import { Footer } from "../footer";

describe("footer", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
