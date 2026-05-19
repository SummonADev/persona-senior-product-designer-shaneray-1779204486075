import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.wordmark}>PeaceTech Accelerator</span>
      </div>
    </header>
  );
}
