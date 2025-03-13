import React, { useState } from 'react';
import ModalConfirm from '../modals/ModalConfirm';
import { useDispatch } from 'react-redux';
import { resetGame } from '../../Redux/Quiz/quizSlice';
import { useNavigate } from 'react-router-dom';

function ResetButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleReset = () => {
    // Dispatch the resetGame action from the quizSlice
    dispatch(resetGame());

    // Navigate to the "/intro" route after resetting
    navigate('/intro');

    // Close the modal after resetting
    closeModal();
  };

  return (
    <div>
      <button className='back-button left-button pointer' onClick={openModal}><i class="fa-solid fa-house"></i>Exit</button>

      <ModalConfirm
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onConfirm={handleReset}
      />
    </div>
  );
}

export default ResetButton;
