import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import IntroScreen from "../../components/pages/IntroScreen";
import "@testing-library/jest-dom";

describe("IntroScreen component testing", () => {
  beforeEach(() => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <IntroScreen />
        </MemoryRouter>
      </Provider>
    );
  });

  it("Renders initial elements correctly", () => {
    expect(screen.getByAltText(/Real or No Real/i)).toBeInTheDocument();
    expect(screen.getByText(/spot a deep fake?/i)).toBeInTheDocument();
  });

  it("Loads the logo image", () => {
    const logoImage = screen.getByAltText("Real or No Real");

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      "src",
      "/real-or-no-real-logo_white.svg" 
    );
  });


});

