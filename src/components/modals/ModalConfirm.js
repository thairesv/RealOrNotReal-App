import React, { useEffect } from "react";
import Modal from "react-modal";
import "../../styles/confirm.css";

Modal.setAppElement("#root");

const ModalConfirm = ({ isOpen, onRequestClose, onConfirm }) => {
  useEffect(() => {
    // Disable scroll when the modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      console.log('Scroll disabled');
    } else {
      // Restore scroll when the modal is closed
      document.body.style.overflow = "auto";
      console.log('Scroll restored');
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "auto";
      console.log('Scroll restored (cleanup)');
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation Modal"
      className="modal"
    >
      <div>
        <p>Are you sure you want to exit and reset your score?</p>
        <button className="yes-button back-button pointer" onClick={onConfirm}>Yes</button>
        <button className="no-button submit-button pointer" onClick={onRequestClose}>No</button>

      </div>
    </Modal>
  );
};

export default ModalConfirm;
