import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import "@testing-library/jest-dom";

describe("Card Collapse Behavior", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Initially, Personal Details should be expanded", () => {
    const personalExpandedCard = screen.getByPlaceholderText(/Phone Number/i);
    expect(personalExpandedCard).toBeInTheDocument();
  });

  test("Clicking on a card should toggle its expanded state", async () => {
    const user = userEvent.setup();
    const personalExpandedCard = screen.queryByPlaceholderText(/Phone Number/i);
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

describe("Inputs Behavior and Preview Updates", () => {
  test("Preview should update when input fields change", async () => {
    render(<App />);
    const user = userEvent.setup();
    const nameInput = screen.getByPlaceholderText(/Name/i);

    await user.type(nameInput, "Mauro");

    const previewName = await screen.findByRole("heading", {
      name: /Mauro/i,
    });

    expect(previewName).toHaveTextContent("Mauro");
  });
});

describe("Add, Update and Delete Items", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Adding a new item should display the new input fields", async () => {
    const user = userEvent.setup();
    const workCard = screen.getByRole("button", {
      name: /Work Experience/i,
    });

    await user.click(workCard);
    const addButton = await screen.findByRole("button", {
      name: /New Item/i,
    });

    await user.click(addButton);

    const newItemInput = await screen.findByPlaceholderText(/Company Name/i);
    expect(newItemInput).toBeInTheDocument();
  });
});
