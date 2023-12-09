import { cleanup, render } from "@testing-library/react";
import { PageLoading } from "../page-loading";

describe("page-loading", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(<PageLoading />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
