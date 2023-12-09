import { cleanup, render } from "@testing-library/react";
import { CustomSkeleton } from "../custom-skeleton";

describe("custom-skeleton", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly when only required props are passed", () => {
    const { container } = render(<CustomSkeleton height={64} width="100%" />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when optional prop isInTable is passed as true", () => {
    const { container } = render(
      <CustomSkeleton
        height={64}
        isInTable={true}
        width="100%"
        sx={{ fontWeight: "bold" }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
