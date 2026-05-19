import styles from './SocialProof.module.css';

// Sponsor logos rendered as clean SVG wordmarks so there are zero external
// image dependencies. Swap these out for real <img> tags once you have assets.
const sponsors = [
  {
    name: 'In-Q-Tel',
    logo: (
      <svg viewBox="0 0 80 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="In-Q-Tel">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="currentColor">IQT</text>
      </svg>
    ),
  },
  {
    name: 'Defense Innovation Unit',
    logo: (
      <svg viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DIU">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="currentColor">DIU</text>
      </svg>
    ),
  },
  {
    name: 'DARPA',
    logo: (
      <svg viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="DARPA">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="currentColor">DARPA</text>
      </svg>
    ),
  },
  {
    name: 'Schmidt Futures',
    logo: (
      <svg viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Schmidt Futures">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="14" fill="currentColor">Schmidt Futures</text>
      </svg>
    ),
  },
  {
    name: 'Sequoia',
    logo: (
      <svg viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sequoia">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="15" fill="currentColor">Sequoia</text>
      </svg>
    ),
  },
];

const stats = [
  { value: '42', label: 'companies funded' },
  { value: '$180M', label: 'raised by alumni' },
  { value: '12 wks', label: 'intensive program' },
];

export default function SocialProof() {
  return (
    <section className={styles.root}>
      {/* Stats row */}
      <div className={styles.stats}>
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Divider + label */}
      <div className={styles.sponsorHeader}>
        <span className={styles.sponsorLabel}>Backed &amp; trusted by</span>
      </div>

      {/* Logo strip */}
      <div className={styles.logos}>
        {sponsors.map((s) => (
          <div key={s.name} className={styles.logoItem} title={s.name}>
            {s.logo}
          </div>
        ))}
      </div>
    </section>
  );
}
