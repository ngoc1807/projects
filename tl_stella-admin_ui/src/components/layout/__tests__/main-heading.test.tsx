import { cleanup, render } from "@testing-library/react";
import { MainHeading } from "../main-heading";

describe("main-heading", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<MainHeading>test</MainHeading>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
