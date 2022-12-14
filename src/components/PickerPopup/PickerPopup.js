import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './PickerPopup.module.css';

import '../modalTemp/DeleteModal/DeleteModalAnimation.css';

PickerPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default function PickerPopup({ children, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <>
      <div className={styles.backdrop} onClick={handleBackdropClick}></div>
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="content"
        unmountOnExit
      >
        {children}
      </CSSTransition>
    </>
  );
}
