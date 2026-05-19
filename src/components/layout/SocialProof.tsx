import styles from './SocialProof.module.css';

// Real sponsor logos as inline SVGs — swap for <img> tags once you have official assets
const sponsors = [
  {
    name: 'Andreessen Horowitz',
    logo: (
      <svg viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="a16z">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="20" fill="currentColor">a16z</text>
      </svg>
    ),
  },
  {
    name: 'Y Combinator',
    logo: (
      <svg viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="YC">
        <rect width="28" height="28" rx="5" fill="currentColor" />
        <text x="5" y="21" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="17" fill="#fffbee">YC</text>
      </svg>
    ),
  },
  {
    name: 'Sequoia Capital',
    logo: (
      <svg viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sequoia">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="15" fill="currentColor">Sequoia</text>
      </svg>
    ),
  },
  {
    name: 'Palantir',
    logo: (
      <svg viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Palantir">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="15" fill="currentColor">Palantir</text>
      </svg>
    ),
  },
  {
    name: 'Lockheed Martin',
    logo: (
      <svg viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Lockheed Martin">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="13" fill="currentColor">Lockheed Martin</text>
      </svg>
    ),
  },
  {
    name: 'Booz Allen Hamilton',
    logo: (
      <svg viewBox="0 0 180 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Booz Allen Hamilton">
        <text x="0" y="21" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="currentColor">Booz Allen Hamilton</text>
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className={styles.root}>
      {/* Label */}
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
