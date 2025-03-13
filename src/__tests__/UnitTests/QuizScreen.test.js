import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import store from "../../redux/store";
import QuizScreen from "../../components/pages/QuizScreen";
import "@testing-library/jest-dom";

// Mock React-modal before importing QuizScreen
jest.mock("react-modal");

describe("QuizScreen component tests", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <QuizScreen />
      </MemoryRouter>
    </Provider>
  );
});

// Check if the question and timer are rendered
it("Renders the question and timer", async () => {
  const questionElement = screen.getByText(
    "Question 1 of 10 • Your current score is 0%"
  );
  const timerElement = screen.getByText(/⏳/i);

  expect(questionElement).toBeInTheDocument();
  expect(timerElement).toBeInTheDocument();
});
