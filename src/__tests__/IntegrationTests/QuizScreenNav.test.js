import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import QuizScreen from "../../components/pages/QuizScreen";
import "@testing-library/jest-dom";
import Questions from "../../appData/Questions";

//Mock Store
const mockStore = configureStore([]);

// Mock React-modal before importing QuizScreen
jest.mock("react-modal");

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("QuizScreen component tests", () => {
  let store;
  let mockNavigate;

  beforeEach(() => {
    store = mockStore({
      quiz: {
        currentQuestion: 10, // Assuming the 10th question triggers result navigation
      },
    });
    // Reset the mock implementation before each test
    mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  it("navigates to the result page on pressing 'Next' on the 10th question", () => {
    const { getByText, getAllByRole } = render(
      <Provider store={store}>
        <MemoryRouter>
          <QuizScreen />
        </MemoryRouter>
      </Provider>
    );

    const nextQuestionButton = screen.getByText("Next Question");

    // Simulate reaching the 10th question by clicking 'Next' nine times
    for (let i = 0; i < 10; i++) {
      const currentQuestion = Questions[i];
      const optionButtons = currentQuestion.options.map((option) => {
        return screen.getByText(option.text);
      });
      const randomOptionIndex = Math.floor(
        Math.random() * optionButtons.length
      );
      fireEvent.click(optionButtons[randomOptionIndex]);
      fireEvent.click(nextQuestionButton);
    }

    expect(mockNavigate).toHaveBeenCalledWith("/result");
  });
});
