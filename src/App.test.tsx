import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("title", () => {
  render(<App />);
  const appTitle = screen.getByText(/MWeather/i);
  expect(appTitle).toBeInTheDocument();
});
