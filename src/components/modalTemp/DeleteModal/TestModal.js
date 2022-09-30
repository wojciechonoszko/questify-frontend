import { createPortal } from 'react-dom';
import styles from './TestModal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children }) {
  return createPortal(
    <div className={styles.Overlay}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}
