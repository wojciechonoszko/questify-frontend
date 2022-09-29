import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Icons from '../../images/icons.svg';
import Icon from '../Icon';

import styles from './CompletedCard.module.css';
import './CompletedAnimation.css';

const CompletedCard = ({ text, isChallenge, onCompleted, onClose }) => {
  const classList = isChallenge ? styles.challengeBox : styles.questBox;

  const classHiddenTrophy = isChallenge ? '' : styles.hidden;
  const classHiddenTarget = isChallenge ? styles.hidden : '';

  const handleClick = () => {
    onClose();
    onCompleted();
  };

  return (
    <div className={classList}>
      <div className={styles.contentBox}>
        <p className={styles.content}>COMPLETED:</p>
        <p onClick={onClose} className={styles.link}>
          <span className={styles.linkText}>{text}</span>
        </p>
      </div>
      <div className={styles.awardBox}>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="leftClouds"
          unmountOnExit
        >
          <svg className={styles.leftClouds}>
            <use xlinkHref={`${Icons}#icon-left-clouds`} />
          </svg>
        </CSSTransition>
        <CSSTransition
          in={true}
          appear={true}
          timeout={1250}
          classNames="rightClouds"
          unmountOnExit
        >
          <svg className={styles.rightClouds}>
            <use xlinkHref={`${Icons}#icon-right-clouds`} />
          </svg>
        </CSSTransition>
        <svg className={styles.iconBase}>
          <use xlinkHref={`${Icons}#icon-base`} />
        </svg>

        <div className={classHiddenTrophy}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="trophy"
            unmountOnExit
          >
            <svg className={styles.iconTrophy}>
              <use xlinkHref={`${Icons}#icon-trophy-cup`} />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="first"
            unmountOnExit
          >
            <svg className={styles.iconFirst}>
              <use xlinkHref={`${Icons}#icon-first`} />
            </svg>
          </CSSTransition>
        </div>
        <div className={classHiddenTarget}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="target"
            unmountOnExit
          >
            <svg className={styles.iconTarget}>
              <use xlinkHref={`${Icons}#icon-target`} />
            </svg>
          </CSSTransition>
          <CSSTransition
            in={true}
            appear={true}
            timeout={2000}
            classNames="arrow"
            unmountOnExit
          >
            <svg className={styles.iconArrow}>
              <use xlinkHref={`${Icons}#icon-arrow`} />
            </svg>
          </CSSTransition>
        </div>
      </div>

      <button onClick={handleClick} className={styles.button}>
        <span>Continue</span>
        <Icon className={styles.arrow} name={'arrow-right'} size={7} />
      </button>
    </div>
  );
};

CompletedCard.propTypes = {
  text: PropTypes.string,
  isChallenge: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

export default CompletedCard;
