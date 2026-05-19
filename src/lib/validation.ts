import { FormData, FormErrors } from '@/types';

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10;
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function validateField(field: keyof FormData, value: string | File | null): string | undefined {
  switch (field) {
    case 'fullName':
      if (!value || (typeof value === 'string' && value.trim().length < 2)) {
        return 'Full name is required';
      }
      break;
    case 'email':
      if (!value || typeof value !== 'string' || !validateEmail(value)) {
        return 'Please enter a valid email address';
      }
      break;
    case 'phone':
      if (!value || typeof value !== 'string' || !validatePhone(value)) {
        return 'Please enter a valid phone number';
      }
      break;
    case 'companyName':
      if (!value || (typeof value === 'string' && value.trim().length < 1)) {
        return 'Company name is required';
      }
      break;
    case 'delawareCorp':
      if (!value) {
        return 'Please select an option';
      }
      break;
    case 'revenueHoldback':
      if (!value || (typeof value === 'string' && value.trim().length < 10)) {
        return 'Please provide a meaningful answer (at least 10 characters)';
      }
      break;
    case 'acceleratorImpact':
      if (!value || (typeof value === 'string' && value.trim().length < 10)) {
        return 'Please provide a meaningful answer (at least 10 characters)';
      }
      break;
    case 'deckFile':
      if (!value) {
        return 'Please attach your deck';
      }
      if (value instanceof File) {
        const maxSize = 25 * 1024 * 1024;
        const allowedTypes = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
        if (value.size > maxSize) {
          return 'File must be under 25MB';
        }
        const ext = value.name.split('.').pop()?.toLowerCase();
        if (!ext || !['pdf', 'ppt', 'pptx'].includes(ext)) {
          return 'File must be PDF, PPT, or PPTX';
        }
        if (!allowedTypes.some(t => value.type === t) && !['pdf', 'ppt', 'pptx'].includes(ext)) {
          return 'File must be PDF, PPT, or PPTX';
        }
      }
      break;
    case 'peaceBelief':
      if (!value) {
        return 'Please select an option';
      }
      break;
  }
  return undefined;
}

export function validateAll(data: FormData): FormErrors {
  const errors: FormErrors = {};
  const fields: (keyof FormData)[] = [
    'fullName', 'email', 'phone', 'companyName',
    'delawareCorp', 'revenueHoldback', 'acceleratorImpact',
    'deckFile', 'peaceBelief'
  ];
  for (const field of fields) {
    const error = validateField(field, data[field] as string | File | null);
    if (error) {
      (errors as Record<string, string>)[field] = error;
    }
  }
  return errors;
}

export function isFormValid(data: FormData): boolean {
  const errors = validateAll(data);
  return Object.keys(errors).length === 0;
}
