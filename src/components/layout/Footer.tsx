import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>
          Questions?{' '}
          <a href="mailto:shane@shaneraymartin.com">shane@shaneraymartin.com</a>
        </p>
        <p className={styles.small}>
          PeaceTech is a technology that can reduce, mitigate, or prevent violent conflict.
        </p>
      </div>
    </footer>
  );
}
