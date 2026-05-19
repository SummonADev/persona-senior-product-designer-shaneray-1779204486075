import { useNavigate } from 'react-router-dom';
import styles from './Thanks.module.css';

export default function Thanks() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.badge}>✌️</div>
        <h1 className={styles.headline}>Thank you very much<br />for applying</h1>
        <p className={styles.body}>
          Please follow us on LinkedIn. If you have questions, send me a text at{' '}
          <a href="tel:+14806199239">480-619-9239</a>.
          We'll be in touch if you're accepted.
        </p>
        <button
          className={styles.btn}
          onClick={() => navigate('/')}
          type="button"
        >
          Back to home
        </button>
      </div>
      <p className={styles.wordmark}>PeaceTech Accelerator</p>
    </div>
  );
}
