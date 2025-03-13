import ResultScreen from "../../components/pages/ResultScreen";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

jest.mock("react-modal");


describe("Result Screen tests", () => {
  beforeEach(() => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <ResultScreen />
        </MemoryRouter>
      </Provider>
    );
  });

  //Navigation to render ResultScreen
  it("Check page is rendered with correct text", () => {
    // Check if the componet is being rendered corrently
    const scoredText = screen.getByText("You scored:");
    expect(scoredText).toBeInTheDocument();
  });

  //Check if the result message is displayed
  it("Check if the result message is displayed", () => {
    // Check if the result message is displayed
    const messageText = screen.getByText(
      "Please revisit the material and try again! 🔄"
    );
    expect(messageText).toBeInTheDocument();
  });
});
