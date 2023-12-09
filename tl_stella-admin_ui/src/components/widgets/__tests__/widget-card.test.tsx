import { cleanup, render } from "@testing-library/react";
import { WidgetCard } from "../widget-card";

describe("widget-card", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(
      <WidgetCard>
        <div>Foo Div</div>
      </WidgetCard>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
