import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import LogOutButton from "../../components/buttons/LogOutButton";

const mockStore = configureStore([]);

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("LogOutButton component", () => {
  let store;
  let mockNavigate;

  beforeEach(() => {
    store = mockStore({});

    // Reset the mock implementation before each test
    mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);
  });

  it("dispatches the logout action and navigates to '/' on button click", () => {
    const { getByText } = render(
      <Provider store={store}>
        <LogOutButton />
      </Provider>
    );

    // Simulate a button click to trigger logout
    fireEvent.click(getByText("Log Out"));

    const actions = store.getActions();

    // Check if the logout action was dispatched
    expect(actions).toHaveLength(1);
    expect(actions[0].type).toEqual("login/logout");

    // Check if useNavigate was called with the correct argument
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});