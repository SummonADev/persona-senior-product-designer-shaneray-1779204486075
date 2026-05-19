export type DelCorpStatus = 'Yes' | 'No' | 'Not yet';
export type PeaceBeliefStatus = 'Yes' | 'No' | 'Unsure';

export type FormData = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  delawareCorp: DelCorpStatus | '';
  revenueHoldback: string;
  acceleratorImpact: string;
  deckFile: File | null;
  peaceBelief: PeaceBeliefStatus | '';
};

export type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  delawareCorp?: string;
  revenueHoldback?: string;
  acceleratorImpact?: string;
  deckFile?: string;
  peaceBelief?: string;
};
