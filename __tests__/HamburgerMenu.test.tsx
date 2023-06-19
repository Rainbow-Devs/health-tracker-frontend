import { screen, fireEvent, render } from "@testing-library/react";
import HamburgerMenu from "@organisms/HamburgerMenu";
import "@testing-library/jest-dom/extend-expect";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));

test("Menu starts closed by default", () => {
  const component = <HamburgerMenu />;
  render(component);
  const menu = screen.queryByRole("menu");
  expect(menu).not.toBeInTheDocument();
});

describe("Component test", () => {
  test("Menu opens when hamburger icon is clicked", () => {
    render(<HamburgerMenu />);
    const hamburgerIcon = screen.getByLabelText("Open menu");
    fireEvent.click(hamburgerIcon);
    const menu = screen.getByTestId("hamburgerMenu");
    expect(menu).toBeInTheDocument();
  });
  test("Menu closes when close icon is clicked", () => {
    render(<HamburgerMenu />);
    const hamburgerIcon = screen.getByLabelText("Open menu");
    fireEvent.click(hamburgerIcon);
    const closeIcon = screen.getByLabelText("Close menu");
    fireEvent.click(closeIcon);
    expect(closeIcon).not.toBeInTheDocument();
  });
  test("Menu item triggers toggleMenu function when clicked", () => {
    render(<HamburgerMenu />);
    const hamburgerIcon = screen.getByLabelText("Open menu");
    fireEvent.click(hamburgerIcon);
    const menuItem = screen.getByText("Log In");
    fireEvent.click(menuItem);
    expect(menuItem).not.toBeInTheDocument();
  });
});
