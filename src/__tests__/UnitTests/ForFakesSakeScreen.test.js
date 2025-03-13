import React from "react";
import { render, screen } from "@testing-library/react";
import ForFakesSakeScreen from "../../components/pages/ForFakesSakeScreen";
import "@testing-library/jest-dom";

describe("ForFakesSakeScreen component", () => {
  beforeEach(() => {
    render(<ForFakesSakeScreen />);
  });

  it("Renders the iframe with the correct title and attributes", () => {
    const iframeElement = screen.getByTitle("Use-Our-Deep-Fake-Detector");
    
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute("src", "https://sumsub-sumsub-ffs-demo.hf.space");
    expect(iframeElement).toHaveAttribute("frameborder", "0");
    expect(iframeElement).toHaveAttribute("width", "1000");
    expect(iframeElement).toHaveAttribute("height", "1500");
  });
});