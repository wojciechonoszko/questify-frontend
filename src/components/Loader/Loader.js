import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader({ size }) {
  return (
    <Audio
      className={styles.containerLoader}
      color="#00d7ff"
      height={size}
      width={size}
      radius="9"
      ariaLabel="loading"
    />
  );
}
