import { useRef, useState } from 'react';
import styles from './FileUpload.module.css';
import clsx from 'clsx';
import { Paperclip, X } from 'lucide-react';

type FileUploadProps = {
  value: File | null;
  onChange: (file: File | null) => void;
  onBlur?: () => void;
  hasError?: boolean;
};

export default function FileUpload({ value, onChange, onBlur, hasError }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File | null) => {
    onChange(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
    if (onBlur) onBlur();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    handleFile(file || null);
    if (onBlur) onBlur();
  };

  const handleRemove = () => {
    onChange(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div
      className={clsx(
        styles.zone,
        isDragging && styles.dragging,
        hasError && styles.error,
        value && styles.hasFile
      )}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      onClick={() => !value && inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.ppt,.pptx,application/pdf,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation"
        onChange={handleChange}
        className={styles.hiddenInput}
        tabIndex={-1}
      />
      {value ? (
        <div className={styles.fileInfo}>
          <Paperclip size={16} />
          <span className={styles.fileName}>{value.name}</span>
          <span className={styles.fileSize}>{formatSize(value.size)}</span>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); handleRemove(); }}
            className={styles.removeBtn}
            aria-label="Remove file"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div className={styles.placeholder}>
          <Paperclip size={18} className={styles.icon} />
          <span className={styles.cta}>Click to upload or drag and drop</span>
          <span className={styles.meta}>PDF, PPT, PPTX — max 25MB</span>
        </div>
      )}
    </div>
  );
}
