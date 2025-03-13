import React from "react";
import Modal from "react-modal";
import "../../styles/timer.css";

Modal.setAppElement("#root");

const TimeUpModal = ({ isOpen, onRequestClose, correctAnswer }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="TimeUpModal"
      className="modal"
    >
      <div>
        <h2>Time's up!</h2>
        <p>The correct answer is: <span className="correct-answer">{correctAnswer}</span>.</p>
        <p>Click <span className="correct-answer">NEXT QUESTION</span> to continue.</p>
        <button className="submit-button pointer" onClick={onRequestClose}>Close</button>
      </div>
    </Modal>
  );
};

export default TimeUpModal;
