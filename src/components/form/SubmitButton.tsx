import styles from './SubmitButton.module.css';
import clsx from 'clsx';

type SubmitButtonProps = {
  disabled: boolean;
  loading: boolean;
  label?: string;
};

export default function SubmitButton({ disabled, loading, label = 'Submit Application' }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className={clsx(styles.btn, (disabled || loading) && styles.btnDisabled)}
    >
      {loading ? (
        <span className={styles.spinnerWrapper}>
          <span className={styles.spinner} aria-hidden="true" />
          <span>Submitting…</span>
        </span>
      ) : (
        label
      )}
    </button>
  );
}
