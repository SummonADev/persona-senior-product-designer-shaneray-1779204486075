import styles from './SocialProof.module.css';

const sponsors = [
  { name: 'NSIN', src: '/logos/nsin.svg' },
  { name: 'DIU', src: '/logos/diu.svg' },
  { name: 'AFWERX', src: '/logos/afwerx.svg' },
  { name: 'NAB DEF CAP', src: '/logos/nabcdefcap.svg' },
];

export default function SocialProof() {
  return (
    <section className={styles.root}>
      <div className={styles.sponsorHeader}>
        <span className={styles.sponsorLabel}>Backed &amp; trusted by</span>
      </div>

      <div className={styles.logos}>
        {sponsors.map((s) => (
          <div key={s.name} className={styles.logoItem} title={s.name}>
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
