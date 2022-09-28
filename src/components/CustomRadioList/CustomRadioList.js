import PropTypes from 'prop-types';
import styles from './CustomRadioList.module.css';

export default function CustomRadioList({
  isChallenge,
  type,
  options,
  value,
  handleOptionsChange,
}) {
  const isDifficultyType = type === 'difficulty';
  const containerStyle =
    isChallenge && isDifficultyType
      ? [styles[type + '_container'], styles.dark_container].join(' ')
      : styles[type + '_container'];
  const radioStyle =
    isChallenge && isDifficultyType
      ? styles[type + '_dark_radio']
      : styles[type + '_radio'];

  return (
    <ul className={containerStyle}>
      {options.map(option => (
        <li key={option}>
          <label className={styles[type + '_label']}>
            <input
              type="radio"
              checked={value === option}
              name={type}
              value={option}
              onChange={handleOptionsChange}
              className={radioStyle}
            />
            {isDifficultyType ? (
              <>
                <span className={styles.radio_outline}></span>
                <span className={[styles[type + '_text'], styles[option]].join(' ')}>
                  {option}
                </span>
              </>
            ) : (
              <span className={styles[type + '_text']}>{option}</span>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
}

CustomRadioList.propTypes = {
  isChallenge: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleOptionsChange: PropTypes.func.isRequired,
};
