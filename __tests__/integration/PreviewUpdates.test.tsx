import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "@testing-library/jest-dom";

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
