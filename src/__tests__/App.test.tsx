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

  async function newItemHelper() {
    const user = userEvent.setup();
    const workCard = screen.getByRole("button", {
      name: /Work Experience/i,
    });

    await user.click(workCard);
    const addButton = await screen.findByRole("button", {
      name: /New Item/i,
    });

    await user.click(addButton);

    return user;
  }

  test("Adding a new item should display the new input fields", async () => {
    await newItemHelper();

    const newItemInput = await screen.findByPlaceholderText(/Company Name/i);
    expect(newItemInput).toBeInTheDocument();
  });

  async function addItemHelper() {
    const user = await newItemHelper();
    const companyNameInput = await screen.findByPlaceholderText(
      /Company Name/i
    );

    const addButton = screen.getByRole("button", {
      name: /Add/i,
    });

    await user.type(companyNameInput, "Test Company");
    await user.click(addButton);

    return user;
  }

  test("Adding an item should display it on the item list and Preview", async () => {
    await addItemHelper();

    const newItemCompany = await screen.findAllByText(/Test Company/i);

    expect(newItemCompany).toHaveLength(2);
  });

  test("Deleting an item should remove it from the item list and Preview", async () => {
    const user = await addItemHelper();
    const deleteItem = screen.getByRole("button", {
      name: /Remove Item/i,
    });
    const newItemCompany = screen.queryAllByText(/Test Company/i);

    await user.click(deleteItem);

    expect(newItemCompany[0]).not.toBeInTheDocument();
  });

  test("Editing an item should update the item list and Preview", async () => {
    const user = await addItemHelper();
    const editButton = screen.getByRole("button", {
      name: /Edit/i,
    });

    await user.click(editButton);

    const companyEditInput = await screen.findByPlaceholderText(
      /Company Name/i
    );

    const updateButton = screen.getByRole("button", {
      name: /Update/i,
    });

    await user.type(companyEditInput, "Edited Company");
    await user.click(updateButton);

    const editedCompany = await screen.findAllByText(/Edited Company/i);
    expect(editedCompany).toHaveLength(2);
  });
});
