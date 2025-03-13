import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import imageData from "../../appData/imagesData";
import { changeScore } from "../../Redux/Quiz/quizSlice";
import { useDispatch, useSelector } from "react-redux";
import ResetButton from '../buttons/ResetQuizButton';

function GameScreen() {
  const navigate = useNavigate();
  const score = useSelector((state) => state.quiz.score);
  const dispatch = useDispatch();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = imageData[currentImageIndex];
  // Fuction to handle answer selected by user
  const handleAnswer = (isCorrect) => {
    setSelectedAnswer(isCorrect);
  };

  // Function to navigate to next image
  const nextImage = () => {
    if (currentImageIndex + 1 < imageData.length) {
      setCurrentImageIndex(currentImageIndex + 1);
    
      // Reset selected answer for the new question
      setSelectedAnswer(null);
    } else {
      navigate("/result");
    }
  };
 
  // Function to handle if answer is correct and update score
  const handleNextQuestion = () => {
    if (selectedAnswer === currentImage.isCorrect) {
      dispatch(changeScore(score + 10));
    }

    nextImage();
  };

  return (
    <div className="quiz-screen">
        <div>
          <p id="question">
            Image {currentImageIndex + 1} of {imageData.length} • Your current score is {score}%
          </p>
          <h1 className="question"> Is this image Real? Or was it created by AI?</h1>
          <img
              className="game-image"
              src={process.env.PUBLIC_URL + currentImage.imageUrl}
              alt={`Real or Not Real - ${currentImage.id}`}
            />
          <div className="answer-row">
              <button className="answer pointer" onClick={() => handleAnswer(true)}>Real</button>
              <button className="answer pointer" onClick={() => handleAnswer(false)}>Not Real</button>
            </div>
        </div>
      <div className="button-row">
            <ResetButton />
            <button
            className="submit-button pointer"
            onClick={handleNextQuestion}
            disabled={selectedAnswer === null}
          >
            Next Image
          </button>
      </div>
    </div>
  );
}

export default GameScreen;
