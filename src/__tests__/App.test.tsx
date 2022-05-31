import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders App div", async () => {
    render(<App />);
    const appElement = await screen.findByTestId("App");
    expect(appElement).toBeInTheDocument();
  });
});
