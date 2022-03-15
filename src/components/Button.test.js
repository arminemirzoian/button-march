import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

test("should renders button component with children", () => {
  render(<Button>button text</Button>);
  const buttonEl = screen.getByText(/button text/i);
  expect(buttonEl).toBeInTheDocument();
});

test("should render a button with the class of primary", () => {
  render(<Button color="primary">primary button</Button>);
  const buttonEl = screen.getByRole("button", { name: /primary button/i });
  expect(buttonEl).toHaveClass("btn--primary", { exact: false });
});

test("should render a button with the class of secondary", () => {
  render(<Button color="secondary">secondary button</Button>);
  const buttonEl = screen.getByRole("button", { name: /secondary button/i });
  expect(buttonEl).toHaveClass("btn--secondary");
});

test("should render a button with the class of solid", () => {
  render(<Button color="solid">solid button</Button>);
  const buttonEl = screen.getByRole("button", { name: /solid button/i });
  expect(buttonEl).toHaveClass("btn--solid");
});

test("should render a disabled button with the class of primary", () => {
  render(
    <Button color="primary" disabled>
      primary button
    </Button>
  );
  const buttonEl = screen.getByRole("button", { name: /primary button/i });
  expect(buttonEl).toHaveClass("btn--primary");
  expect(buttonEl).toBeDisabled();
});

test("should call onClick callback", () => {
  const mockCallBack = jest.fn();

  render(
    <Button color="primary" onClick={mockCallBack}>
      primary button
    </Button>
  );

  const buttonEl = screen.getByRole("button", { name: /primary button/i });
  fireEvent.click(buttonEl);
  expect(mockCallBack).toBeCalledTimes(1);
});
