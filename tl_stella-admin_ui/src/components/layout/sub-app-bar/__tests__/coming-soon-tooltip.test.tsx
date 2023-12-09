import { ListItemButton, ListItemText } from "@mui/material";
import { cleanup, render } from "@testing-library/react";
import { ComingSoonTooltip } from "../coming-soon-tooltip";

describe("coming-soon-tooltip", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(
      <ComingSoonTooltip>
        <div>
          <ListItemButton
            selected={false}
            onClick={() => jest.fn()}
            disabled
            sx={{ cursor: "default" }}
          >
            <ListItemText primary="Receptionist" />
          </ListItemButton>
        </div>
      </ComingSoonTooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
