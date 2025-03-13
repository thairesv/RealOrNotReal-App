import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import IntroScreen from "../../components/pages/IntroScreen";

const mockStore = configureStore([]);

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// Mocking the selectIsLoggedIn selector
const initialState = {
  login: {
    isLoggedIn: true, // Set the initial state for isLoggedIn as needed for testing
  },
};

describe("IntroScreen component", () => {
  let store;
  let mockNavigate;

  beforeEach(() => {
    store = mockStore(initialState);

    // Reset the mock implementation before each test
    mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  it("handles 'Knowledge quiz' button click correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <IntroScreen />
      </Provider>
    );

    fireEvent.click(getByText("Knowledge quiz"));

    // Check if resetScore was dispatched
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual("quiz/resetScore");

    // Check if useNavigate was called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith("/quiz");
  });

  it("handles 'Play Real or No Real' button click correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <IntroScreen />
      </Provider>
    );

    fireEvent.click(getByText("Play Real or No Real"));

    // Check if resetScore was dispatched
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual("quiz/resetScore");

    // Check if useNavigate was called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith("/game");
  });

  it("handles 'Use Our Deep Fake Detector' button click correctly", () => {
    const { getByText,  getByRole } = render(
      <Provider store={store}>
        <IntroScreen />
      </Provider>
    );

    const deepFakeButton = getByRole("button", { name: "Got an image you're not sure of? Use Our Deep Fake Detector"});

    fireEvent.click(deepFakeButton);
  

    // Check if useNavigate was called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith("/api2");
  });
});