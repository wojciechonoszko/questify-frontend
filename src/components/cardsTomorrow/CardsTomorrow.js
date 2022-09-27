import Card from '../card/Card';

import styles from './CardsTomorrow.module.css';

const CardsTomorrow = () => {
    return (
      <section className={styles.section}>
        <h2 className={styles.title}>Tomorrow</h2>
        <ul className={styles.cardSet}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </section>
    );
}

export default CardsTomorrow;