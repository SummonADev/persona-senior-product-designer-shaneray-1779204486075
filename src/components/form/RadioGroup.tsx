import styles from './RadioGroup.module.css';
import clsx from 'clsx';

type RadioOption = {
  value: string;
  label: string;
};

type RadioGroupProps = {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  hasError?: boolean;
};

export default function RadioGroup({
  name,
  options,
  value,
  onChange,
  onBlur,
  hasError,
}: RadioGroupProps) {
  return (
    <div className={clsx(styles.group, hasError && styles.groupError)} role="group">
      {options.map(option => (
        <label key={option.value} className={clsx(styles.option, value === option.value && styles.optionSelected)}>
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            onBlur={onBlur}
            className={styles.radio}
          />
          <span className={styles.optionLabel}>{option.label}</span>
        </label>
      ))}
    </div>
  );
}
