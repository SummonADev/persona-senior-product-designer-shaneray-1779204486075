import styles from './TextInput.module.css';
import clsx from 'clsx';

type TextInputProps = {
  id: string;
  type?: 'text' | 'email' | 'tel';
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  hasError?: boolean;
  autoComplete?: string;
};

export default function TextInput({
  id,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  hasError,
  autoComplete,
}: TextInputProps) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      onBlur={onBlur}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={clsx(styles.input, hasError && styles.inputError)}
      spellCheck={false}
    />
  );
}
