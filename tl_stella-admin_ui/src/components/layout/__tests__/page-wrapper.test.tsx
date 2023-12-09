import { cleanup, render } from "@testing-library/react";
import { PageWrapper } from "../page-wrapper";
import { ThemeProvider } from "@mui/material";
import { theme } from "src/styles/theme";

describe("page-wrapper", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly", () => {
    const { container } = render(
      // TODO: We should be wrapping ALL of our tests with ThemeProvider
      // figure out a way to add it to jest.setup.js so it's automatically on every test
      // do we also need SessionProvider and LocalizationProvider?
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <></>
        </PageWrapper>
      </ThemeProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
