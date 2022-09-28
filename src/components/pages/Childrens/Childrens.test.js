import Children from "./Childrens";
import { render, screen } from "@testing-library/react";

describe("test children component", () => {
  test("test element", () => {
    render(<Children />);
    const testElement = screen.getByText("hello kids");
    expect(testElement).toBeInTheDocument();
  });

  test("test element ", async () => {
    render(<Children />);
    const testElementId = await screen.findByTestId("titleId");
    expect(testElementId).toBeInTheDocument();
  });

  test("test the class name",
    () => {
      render(<Children />);
      const testClass = screen.getByText("hello kids");
      expect(testClass).toHaveClass("spanId");
    });
});
