import React from "react";
import { useSelector } from "react-redux";
import ResetButton from "../buttons/ResetQuizButton";
import LogOutButton from "../buttons/LogOutButton";
import { selectIsLoggedIn } from "../../Redux/loginSlice";


function ResultScreen() {
  const score = useSelector((state) => state.quiz.score);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // Personalized messages based on the user's score to improve user experience
  let message = "";
  if (score === 100) {
    message = "Congratulations! You got a perfect score! 🎉";
  } else if (score >= 70) {
    message = "Well done! You did a great job! 👏";
  } else if (score >= 40) {
    message = "Good try! Just a few things to check to improve your score 💪";
  } else {
    message = "Please revisit the material and try again! 🔄";
  }

  return (
    <div className="result-screen">
      <div className="logout-row">
      {isLoggedIn && <LogOutButton />} {/* Conditionally render LogOutButton */}
      </div>
      <p className="tagline">You scored:</p>
      <p className="update">{score}%</p>
      <p className="message">{message}</p>
      <ResetButton />
    </div>
  );
}

export default ResultScreen;
