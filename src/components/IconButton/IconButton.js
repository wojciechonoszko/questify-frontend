import PropTypes from 'prop-types';
import styles from './IconButton.module.css';

const IconButton = ({ children, onClick, className, ...allProps }) => {
  const classList = [className, styles.IconButton].join(' ');

  return (
    <button onClick={onClick} className={classList} {...allProps}>
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string,
};

export default IconButton;
