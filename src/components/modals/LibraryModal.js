import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modals';
import BookViewerTwo from '../BookViewerTwo';
import './LibraryModal.css';

const LibraryModal = ({ visible }) => {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className='modal' onClick={() => dispatch(closeModal())}>
      <div className='modal-container'>
        <BookViewerTwo />
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default LibraryModal;
