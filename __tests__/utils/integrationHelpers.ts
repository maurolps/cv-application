import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

export async function newItemHelper() {
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

export async function addItemHelper() {
  const user = await newItemHelper();
  const companyNameInput = await screen.findByPlaceholderText(/Company Name/i);

  const addButton = screen.getByRole("button", {
    name: /Add/i,
  });

  await user.type(companyNameInput, "Test Company");
  await user.click(addButton);

  return user;
}
