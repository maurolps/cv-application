import { cleanup, render, screen } from "@testing-library/react";
import { addItemHelper, newItemHelper } from "../utils/integrationHelpers";
import useAppStore from "../../src/store/useAppStore";
import App from "../../src/App";
import "@testing-library/jest-dom";

describe("Add, Update and Delete Items", () => {
  beforeEach(() => {
    useAppStore.getState().resetStore();
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  test("Adding a new item should display the new input fields", async () => {
    await newItemHelper();

    const newItemInput = await screen.findByPlaceholderText(/Company Name/i);
    expect(newItemInput).toBeInTheDocument();
  });

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
