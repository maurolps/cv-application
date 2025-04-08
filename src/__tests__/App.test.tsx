import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("Card Collapse Behavior", () => {
  test("Initially, Personal Details should be expanded", () => {
    render(<App />);
    const personalExpandedCard = screen.getByPlaceholderText(/Phone Number/i);
    expect(personalExpandedCard).toBeInTheDocument();
  });
});
