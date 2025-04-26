import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "@testing-library/jest-dom";

jest.mock("../../src/components/pdf/PdfDocument", () => ({
  PdfDocument: () => <div>Mocked PDF Document</div>,
}));

describe("Card Collapse Behavior", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Initially, Personal Details should be expanded", () => {
    const personalExpandedCard = screen.getByPlaceholderText(/Email/i);
    expect(personalExpandedCard).toBeInTheDocument();
  });

  test("Clicking on a card should toggle its expanded state", async () => {
    const user = userEvent.setup();
    const personalExpandedCard = screen.queryByPlaceholderText(/Email/i);
    const workCard = screen.getByRole("button", {
      name: /Work Experience/i,
    });
    const workCollapsedCard = screen.queryByRole("button", {
      name: /New Item/i,
    });

    expect(personalExpandedCard).toBeInTheDocument();
    expect(workCollapsedCard).not.toBeInTheDocument();

    await user.click(workCard);

    const workExpandedCard = await screen.findByRole("button", {
      name: /New Item/i,
    });

    expect(personalExpandedCard).not.toBeInTheDocument();
    expect(workExpandedCard).toBeInTheDocument();
  });
});
