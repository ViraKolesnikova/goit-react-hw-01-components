import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles['transaction-history']}>
      <thead className={styles['table-head']}>
        <tr>
          <th className={styles['table-box']}>Type</th>
          <th className={styles['table-box']}>Amount</th>
          <th className={styles['table-box']}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr
            key={item.id}
            style={{ backgroundColor: index % 2 !== 0 && 'rgb(236 241 245)' }}
          >
            <td className={styles.type}>{item.type}</td>
            <td className={styles.amount}>{item.amount}</td>
            <td className={styles.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
