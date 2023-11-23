import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },

  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    border: 'none',
    background: 'transparent',
  },
};

Modal.setAppElement('#root');

export const ModalWindow = ({ isOpen, onClose, largeImageURL, tags }) => {
  console.log('largeImageURL:', largeImageURL);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="overlay"
      style={customStyles}
    >
      <img src={largeImageURL} alt={tags} style={{ maxWidth: '700px', maxHeight: '450px' }}/>
    </Modal>
  );
};
