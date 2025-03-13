import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Register from "../../components/pages/Register";
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

describe("Register component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("renders registration form and handles submission", async () => {
    axios.post.mockResolvedValue(); // Mock successful registration response

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Register />
      </Provider>
    );

    const usernameInput = getByLabelText("Username:");
    const passwordInput = getByLabelText("Password:");
    const registerButton = getByText("Register");

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    fireEvent.click(registerButton);

    // Check if axios post method is called with the correct arguments
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "api/user/register",
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
