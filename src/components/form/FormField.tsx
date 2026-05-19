import { ReactNode } from 'react';
import styles from './FormField.module.css';
import clsx from 'clsx';

type FormFieldProps = {
  label: string;
  htmlFor?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
};

export default function FormField({ label, htmlFor, error, required, children, hint }: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {required && <span className={styles.required} aria-hidden="true"> *</span>}
      </label>
      {hint && <p className={styles.hint}>{hint}</p>}
      {children}
      {error && (
        <p className={clsx(styles.error)} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
