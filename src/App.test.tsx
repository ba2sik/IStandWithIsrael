import { render, screen } from "@testing-library/react";
import App from "./App";

test("App renders without failure", () => {
  global.ResizeObserver = require("resize-observer-polyfill");
  render(<App />);
  const headline = screen.getByText(
    "Show your support to Israel!"
  );

  expect(headline).toBeInTheDocument();
});
