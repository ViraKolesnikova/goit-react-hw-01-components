import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ title = '', stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles['stat-list']}>
        {stats.map(stat => (
          <li
            className={styles.item}
            key={stat.id}
            style={{
              backgroundColor:
                '#' +
                (Math.random().toString(16) + '000000')
                  .substring(2, 8)
                  .toUpperCase(),
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage + '%'}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
