import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect button to text to be "Change to red"
  expect(colorButton.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  // check button starts enabled
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("should disable button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: /change to blue/i });
  const checkbox = screen.getByRole("checkbox");
  // click once to disable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  // click again to enable button
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
