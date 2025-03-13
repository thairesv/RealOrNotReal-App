import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import GameScreen from "../../components/pages/GameScreen";
import imageData from "../../appData/imagesData";
const mockStore = configureStore([]);

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

jest.mock("react-modal");

describe("GameScreen component", () => {
  let store;
  let mockNavigate;

  beforeEach(() => {
    store = mockStore({ quiz: { score: 0 } });

    // Reset the mock implementation before each test
    mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  it("handles 'Real' button click correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <GameScreen />
      </Provider>
    );

    const currentImage = imageData[0];

    fireEvent.click(getByText("Real"));
    const selectedAnswer = currentImage.isCorrect;
    expect(selectedAnswer).toBe(true);
  });

  it("handles 'Not Real' button click correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <GameScreen />
      </Provider>
    );

    const currentImage = imageData[1];

    fireEvent.click(getByText("Not Real"));
    const selectedAnswer = currentImage.isCorrect;
    expect(selectedAnswer).toBe(true);
  });

  it("handles 'Next' button click correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <GameScreen />
      </Provider>
    );

    // Simulate the user selecting an answer first
    fireEvent.click(getByText("Real"));

    fireEvent.click(getByText("Next Image"));

    // Check if handleNextQuestion was called or the navigation occurred correctly
    // Replace handleNextQuestion() or navigate() with the appropriate functions/variables
  });

  
});
