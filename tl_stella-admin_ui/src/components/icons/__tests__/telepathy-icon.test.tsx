import { cleanup, render } from "@testing-library/react";
import { TelepathyIcon } from "../telepathy-icon";

describe("telepathy-icon", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly when no props are passed", () => {
    const { container } = render(<TelepathyIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when props are passed", () => {
    const { container } = render(<TelepathyIcon color="inherit" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
