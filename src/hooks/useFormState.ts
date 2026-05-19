import { useState, useCallback } from 'react';
import { FormData, FormErrors } from '@/types';
import { validateField, formatPhone } from '@/lib/validation';

const initialData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  delawareCorp: '',
  revenueHoldback: '',
  acceleratorImpact: '',
  deckFile: null,
  peaceBelief: '',
};

export function useFormState() {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  const setField = useCallback(<K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value as string | File | null);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  }, [touched]);

  const setPhoneField = useCallback((raw: string) => {
    const formatted = formatPhone(raw);
    setData(prev => ({ ...prev, phone: formatted }));
    if (touched['phone']) {
      const error = validateField('phone', formatted);
      setErrors(prev => ({ ...prev, phone: error }));
    }
  }, [touched]);

  const touchField = useCallback((field: keyof FormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(prev => {
      const error = validateField(field, (data[field] as string | File | null));
      return { ...prev, [field]: error };
    });
  }, [data]);

  const reset = useCallback(() => {
    setData(initialData);
    setErrors({});
    setTouched({});
  }, []);

  return { data, errors, touched, setField, setPhoneField, touchField, reset };
}
