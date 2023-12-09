import { cleanup, render } from "@testing-library/react";
import { CustomFormHelperText } from "../custom-form-helper-text";

const errorHelperText = "Oh no there's an error!";
const infoHelperText = "Informational helper";
const successHelperText = "Success!";

describe("custom-form-helper-text", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly when only required props are passed", () => {
    const { container } = render(<CustomFormHelperText />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when optional props are passed for informational messaging", () => {
    const { container } = render(
      <CustomFormHelperText
        persist={false}
        variant="info"
        text={infoHelperText}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when optional props are passed for success messaging", () => {
    const { container } = render(
      <CustomFormHelperText
        persist={true}
        variant="success"
        text={successHelperText}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when optional props are passed for error messaging", () => {
    const { container } = render(
      <CustomFormHelperText
        persist={true}
        variant="error"
        text={errorHelperText}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
