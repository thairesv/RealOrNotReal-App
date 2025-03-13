import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeScore } from '../../Redux/Quiz/quizSlice';
import Questions from '../../appData/Questions';
import { useNavigate } from 'react-router-dom';
import ResetButton from '../buttons/ResetQuizButton';
import TimeUpModal from '../modals/TimerModal.js';

const INITIAL_COUNTDOWN = 30;

function QuizScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [countdown, setCountdown] = useState(INITIAL_COUNTDOWN);
  const [timeUpModalIsOpen, setTimeUpModalIsOpen] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const score = useSelector((state) => state.quiz.score);
  const currentQuestion = Questions[currentQuestionIndex];
  const percentageIncreasePerQuestion = 100 / Questions.length;

  const openTimeUpModal = () => {
    setTimeUpModalIsOpen(true);
    setIsTimerActive(false); // Disable the timer
  };

  const closeTimeUpModal = () => {
    setTimeUpModalIsOpen(false);
  };

  useEffect(() => {
    setCountdown(INITIAL_COUNTDOWN);
    setIsTimerActive(true); // Enable the timer

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : prevCountdown
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (countdown === 0) {
      openTimeUpModal();
    }
  }, [countdown]);

  const handleAnswerSelection = (isCorrect) => {
    setCurrentOption(isCorrect);
  };

  const handleNextQuestion = () => {
    // Reset the timer and enable for the next question
    setCountdown(INITIAL_COUNTDOWN);
    setIsTimerActive(true); 

    if (!timeUpModalIsOpen && currentOption === true) {
      const percentageScoreIncrease = percentageIncreasePerQuestion;
      dispatch(changeScore(score + percentageScoreIncrease));
    }

    setCurrentOption(null);

    if (currentQuestionIndex < Questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/result');
    }
  };

  return (
    <div className="quiz-screen">
      {currentQuestion && (
        <div>
          <p id="question">
            Question {currentQuestionIndex + 1} of {Questions.length} • Your current score is {score}%
          </p>
          <p className={`timer ${isTimerActive ? '' : 'inactive'}`}>
            <span className="emoji">⏳</span> {countdown}s
          </p>
          <h1 className="question">{currentQuestion.text}</h1>
          <ul className="answers" id="answers-list">
            {currentQuestion.options.map((option) => (
              <li key={option.id}>
                <button
                  className={`answer ${!timeUpModalIsOpen && option.isCorrect ? 'correct' : ''} pointer`}
                  onClick={() => handleAnswerSelection(option.isCorrect)}
                  disabled={!isTimerActive || timeUpModalIsOpen}
                >
                  {option.text}
                </button>

              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="button-row">
          <ResetButton />
          <button
            className="submit-button pointer"
            onClick={handleNextQuestion}
            disabled={isTimerActive && currentOption === null}
          >
            Next Question
          </button>
      </div>

      {/* Modal for Time's Up */}
      <TimeUpModal
        isOpen={timeUpModalIsOpen}
        onRequestClose={closeTimeUpModal}
        correctAnswer={currentQuestion.options.find((option) => option.isCorrect).text}
      />
    </div>
  );
}

export default QuizScreen;
