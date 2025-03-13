import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import GameScreen from "../../components/pages/GameScreen";
import "@testing-library/jest-dom";

jest.mock("react-modal");


describe("GameScreen component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <GameScreen />
        </MemoryRouter>
      </Provider>
    );
  });

  it("Renders initial elements correctly", () => {
    expect(screen.getByText(/Your current score is/i)).toBeInTheDocument();
    expect(screen.getByText("Real")).toBeInTheDocument();
    expect(screen.getByText("Not Real")).toBeInTheDocument();
  });;
});
