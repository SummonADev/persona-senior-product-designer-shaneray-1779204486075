import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FormField from '@/components/form/FormField';
import TextInput from '@/components/form/TextInput';
import Textarea from '@/components/form/Textarea';
import RadioGroup from '@/components/form/RadioGroup';
import FileUpload from '@/components/form/FileUpload';
import SubmitButton from '@/components/form/SubmitButton';
import SocialProof from '@/components/layout/SocialProof';
import { useFormState } from '@/hooks/useFormState';
import { isFormValid } from '@/lib/validation';
import styles from './ApplicationForm.module.css';

const DELAWARE_OPTIONS = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'Not yet', label: 'Not yet' },
];

const PEACE_OPTIONS = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
  { value: 'Unsure', label: 'Unsure' },
];

export default function ApplicationForm() {
  const navigate = useNavigate();
  const { data, errors, setField, setPhoneField, touchField } = useFormState();
  const [loading, setLoading] = useState(false);
  const formValid = isFormValid(data);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formValid || loading) return;

    setLoading(true);

    // Simulate async submission (no backend)
    await new Promise<void>(resolve => setTimeout(resolve, 1200));

    // Persist to localStorage for reference
    try {
      const submission = {
        ...data,
        deckFileName: data.deckFile ? data.deckFile.name : null,
        deckFile: undefined,
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem('peacetech_submission', JSON.stringify(submission));
    } catch (_) {
      // ignore storage errors
    }

    setLoading(false);
    navigate('/thanks');
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        {/* Hero Zone */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>Apply for the<br />PeaceTech Accelerator</h1>
          <p className={styles.heroSubtitle}>Takes about 2 minutes</p>
          <div className={styles.deadline}>
            <span className={styles.deadlineDot} />
            Applications close September 1st
          </div>
        </section>

        {/* Social Proof Zone */}
        <SocialProof />

        {/* Context Zone */}
        <section className={styles.context}>
          <p className={styles.contextIntro}>
            PeaceTech Accelerator is for software founders who want to close more sales and raise VC.
            You should apply if you meet most of the following:
          </p>
          <ul className={styles.eligibilityList}>
            <li>Your team is 2 to 10 people</li>
            <li>You are at the pre-seed or seed stage</li>
            <li>You have a working product or MVP</li>
            <li>You are building a software or AI company</li>
            <li>Your goal is to sell to Fortune 1000 companies or top governments</li>
            <li>You are actively working to land pilots or enterprise customers in the next 12 months</li>
          </ul>
          <p className={styles.contextNote}>
            Once submitted, we will review your application and follow up with next steps.
          </p>
        </section>

        {/* Form Zone */}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.fieldStack}>
            <FormField label="Full Name" htmlFor="fullName" required error={errors.fullName}>
              <TextInput
                id="fullName"
                value={data.fullName}
                onChange={(v) => setField('fullName', v)}
                onBlur={() => touchField('fullName')}
                placeholder="Jane Smith"
                autoComplete="name"
                hasError={!!errors.fullName}
              />
            </FormField>

            <FormField label="Email Address" htmlFor="email" required error={errors.email}>
              <TextInput
                id="email"
                type="email"
                value={data.email}
                onChange={(v) => setField('email', v)}
                onBlur={() => touchField('email')}
                placeholder="jane@company.com"
                autoComplete="email"
                hasError={!!errors.email}
              />
            </FormField>

            <FormField label="Phone Number" htmlFor="phone" required error={errors.phone}>
              <TextInput
                id="phone"
                type="tel"
                value={data.phone}
                onChange={(v) => setPhoneField(v)}
                onBlur={() => touchField('phone')}
                placeholder="(555) 000-0000"
                autoComplete="tel"
                hasError={!!errors.phone}
              />
            </FormField>

            <FormField label="Company Name" htmlFor="companyName" required error={errors.companyName}>
              <TextInput
                id="companyName"
                value={data.companyName}
                onChange={(v) => setField('companyName', v)}
                onBlur={() => touchField('companyName')}
                placeholder="Acme PeaceTech Corp"
                autoComplete="organization"
                hasError={!!errors.companyName}
              />
            </FormField>

            <FormField label="Is your company a Delaware C-Corp?" required error={errors.delawareCorp}>
              <RadioGroup
                name="delawareCorp"
                options={DELAWARE_OPTIONS}
                value={data.delawareCorp}
                onChange={(v) => { setField('delawareCorp', v as typeof data.delawareCorp); touchField('delawareCorp'); }}
                onBlur={() => touchField('delawareCorp')}
                hasError={!!errors.delawareCorp}
              />
            </FormField>

            <FormField
              label="What is one thing holding you back from $1M annual revenue right now?"
              htmlFor="revenueHoldback"
              required
              error={errors.revenueHoldback}
            >
              <Textarea
                id="revenueHoldback"
                value={data.revenueHoldback}
                onChange={(v) => setField('revenueHoldback', v)}
                onBlur={() => touchField('revenueHoldback')}
                placeholder="Be specific. What's the single biggest constraint?"
                hasError={!!errors.revenueHoldback}
                maxLength={500}
                rows={5}
              />
            </FormField>

            <FormField
              label={`After the 12 week PeaceTech accelerator finishes, what would make you say "joining this changed everything for me"?`}
              htmlFor="acceleratorImpact"
              required
              error={errors.acceleratorImpact}
            >
              <Textarea
                id="acceleratorImpact"
                value={data.acceleratorImpact}
                onChange={(v) => setField('acceleratorImpact', v)}
                onBlur={() => touchField('acceleratorImpact')}
                placeholder="Describe the outcome that would define success for you."
                hasError={!!errors.acceleratorImpact}
                maxLength={750}
                rows={6}
              />
            </FormField>

            <FormField
              label="Attach your deck"
              required
              error={errors.deckFile}
              hint="PDF, PPT, or PPTX — max 25MB"
            >
              <FileUpload
                value={data.deckFile}
                onChange={(file) => { setField('deckFile', file); touchField('deckFile'); }}
                onBlur={() => touchField('deckFile')}
                hasError={!!errors.deckFile}
              />
            </FormField>

            <FormField
              label="Do you believe peace is possible? ✌️"
              required
              error={errors.peaceBelief}
            >
              <RadioGroup
                name="peaceBelief"
                options={PEACE_OPTIONS}
                value={data.peaceBelief}
                onChange={(v) => { setField('peaceBelief', v as typeof data.peaceBelief); touchField('peaceBelief'); }}
                onBlur={() => touchField('peaceBelief')}
                hasError={!!errors.peaceBelief}
              />
            </FormField>
          </div>

          {/* Action Zone */}
          <div className={styles.action}>
            <SubmitButton disabled={!formValid} loading={loading} />
            {!formValid && (
              <p className={styles.actionHint}>Complete all fields above to submit</p>
            )}
          </div>

          {/* PS Note at the very end of the form */}
          <p className={styles.contextPS}>
            <em>PS, we see PeaceTech as a technology that can reduce, mitigate, or prevent violent conflict.</em>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
}
