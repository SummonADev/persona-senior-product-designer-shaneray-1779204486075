import styles from './SocialProof.module.css';

const sponsors = [
  { name: 'Carta', src: '/logos/trusted/carta.png' },
  { name: 'Rho', src: '/logos/trusted/rho.png' },
  { name: 'Finstrat Management', src: '/logos/trusted/finstrat.png' },
  { name: 'Arlington, Virginia', src: '/logos/trusted/arlington.png' },
  { name: 'Salesforce', src: '/logos/trusted/salesforce.png' },
];

export default function SocialProof() {
  return (
    <section className={styles.root} aria-label="Trusted by">
      <div className={styles.sponsorHeader}>
        <span className={styles.sponsorLabel}>Backed &amp; trusted by</span>
      </div>

      <div className={styles.logos}>
        {sponsors.map((s) => (
          <div key={s.name} className={styles.logoItem}>
            <img
              src={s.src}
              alt={s.name}
              className={styles.logoImage}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
