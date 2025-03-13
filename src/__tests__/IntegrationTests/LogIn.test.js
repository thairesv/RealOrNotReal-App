import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Login from "../../components/pages/Login";
import axios from "../../utils/axios";

// Mocking axios post method
jest.mock("../../utils/axios", () => ({
  post: jest.fn(),
}));

// Mock the useNavigate hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// Mocking Redux store
const mockStore = configureStore([]);

describe("Login component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("renders login form and handles submission", async () => {
    axios.post.mockResolvedValue(); // Mock successful login response

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const usernameInput = getByLabelText("Username:");
    const passwordInput = getByLabelText("Password:");
    const loginButton = getByText("Login");

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    fireEvent.click(loginButton);

    // Check if axios post method is called with the correct arguments
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "api/user/login",
        {
          name: "testuser",
          password: "testpassword",
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    });
  });
});
