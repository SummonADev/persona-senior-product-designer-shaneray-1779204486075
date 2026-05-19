import styles from './Textarea.module.css';
import clsx from 'clsx';

type TextareaProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  hasError?: boolean;
  maxLength: number;
  rows?: number;
};

export default function Textarea({
  id,
  value,
  onChange,
  onBlur,
  placeholder,
  hasError,
  maxLength,
  rows = 5,
}: TextareaProps) {
  const remaining = maxLength - value.length;
  const isNearLimit = remaining <= 50;

  return (
    <div className={styles.wrapper}>
      <textarea
        id={id}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          if (e.target.value.length <= maxLength) {
            onChange(e.target.value);
          }
        }}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={rows}
        className={clsx(styles.textarea, hasError && styles.textareaError)}
      />
      <p className={clsx(styles.counter, isNearLimit && styles.counterNear)}>
        {value.length} / {maxLength}
      </p>
    </div>
  );
}
