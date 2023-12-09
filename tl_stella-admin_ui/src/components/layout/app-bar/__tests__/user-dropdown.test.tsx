import { cleanup, render } from "@testing-library/react";
import { UserDropdown } from "../user-dropdown";
import { User } from "next-auth";

const testUser = {
  id: "1",
  name: "test",
  firstName: "testing",
  lastName: "testy",
  email: "test@test.com",
  organizationID: "2",
  defaultTenantID: "3",
  isInternalUser: false,
};

describe("user-dropdown", () => {
  afterEach(() => {
    cleanup();
  });
  it("should render correctly when user is undefined", () => {
    const { container } = render(<UserDropdown user={undefined} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when user is defined with only a name", () => {
    const user: User = { ...testUser, name: "Steve Rogers" };
    const { container } = render(<UserDropdown user={user} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when user is defined with only a firstName", () => {
    const user: User = { ...testUser, firstName: "Steve" };
    const { container } = render(<UserDropdown user={user} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when user is defined with only a lastName", () => {
    const user: User = { ...testUser, lastName: "Rogers" };
    const { container } = render(<UserDropdown user={user} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when user is defined with a firstName and lastName but no name", () => {
    const user: User = { ...testUser, firstName: "Steve", lastName: "Rogers" };
    const { container } = render(<UserDropdown user={user} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it("should render correctly when user is defined with firstName, lastName, and name", () => {
    const user: User = {
      ...testUser,
      firstName: "Steve",
      lastName: "Rogers",
      name: "Steve Rogers",
    };
    const { container } = render(<UserDropdown user={user} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
