import { cleanup, render } from "@testing-library/react";
import { StellaIcon } from "../stella-icon";

describe("stella-icon", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly when no props are passed", () => {
    const { container } = render(<StellaIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when props are passed", () => {
    const { container } = render(
      <StellaIcon variant="long" size={24} color1="white" color2="red" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
