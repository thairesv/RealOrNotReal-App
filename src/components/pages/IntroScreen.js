import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogOutButton from "../buttons/LogOutButton";
import { resetScore } from "../../Redux/Quiz/quizSlice";
import { selectIsLoggedIn } from "../../Redux/loginSlice";

function IntroScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleQuizButtonClick = () => {
    dispatch(resetScore());
    navigate("/quiz");
  };

  const handleGameButtonClick = () => {
    dispatch(resetScore());
    navigate("/game");
  };

  const handleApiButtonClick = () => {
    dispatch(resetScore());
    navigate("/api2");
  };

  return (
    <div className="intro-menu">
      <div className="logout-row">
      {isLoggedIn && <LogOutButton />} {/* Conditionally render LogOutButton */}
    </div>
      <img className="logo" src="/real-or-no-real-logo_white.svg" alt="Real or No Real" />
      <h1 className="tagline">Can <i>you</i> spot a deep fake?</h1>
      <div className="row">
        <div className="column">
          <button className="accent-button equal-button pointer" onClick={handleQuizButtonClick}>Knowledge quiz</button>
        </div>
        <div className="column">
          <button className="equal-button play-button pointer" onClick={handleGameButtonClick}>Play Real or No Real</button>
        </div>
      </div>
      <div className="row">
          <button className="deep-fake-button pointer" onClick={handleApiButtonClick}>Got an image you're not sure of? <u>Use Our Deep Fake Detector</u></button>
        </div>
    </div>
  );
}

export default IntroScreen;

