import React, { useContext } from 'react';

import { UserContext } from '../../App';
import './modal.scss';

export const Modal = () => {
  const {setIsModalVisible, isModalVisible} = useContext(UserContext);
  const handleModalClose = () => {
    setIsModalVisible(false)
    document.body.style.overflow = 'unset';
  }
  return isModalVisible ? (
    <div className="modal" onClick={handleModalClose}>
      <div className="modal__content">
        <h1>Modal</h1>
      </div>
    </div>
  ) : null;
};
