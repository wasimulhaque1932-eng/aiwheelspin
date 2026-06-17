import styles from "./ViralSection.module.css";

const cards = [
  {
    icon: "📱",
    title: "TikTok & Reels Ready",
    desc: "Every wheel result generates a shareable image + caption. Post your spin in one tap.",
  },
  {
    icon: "🔗",
    title: "Instant Share Links",
    desc: "Every wheel gets a unique URL. Send to friends, embed on sites, post on any social.",
  },
  {
    icon: "🏆",
    title: "Giveaway Widgets",
    desc: "Embed a live giveaway wheel on your website or YouTube stream. Viewers participate in real time.",
  },
];

export default function ViralSection() {
  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>Built to Go Viral</h2>
        <p className={styles.sub}>Every feature designed for sharing, engagement, and organic growth.</p>
      </div>
      <div className={styles.grid}>
        {cards.map((c) => (
          <div key={c.title} className={styles.card}>
            <div className={styles.icon}>{c.icon}</div>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.desc}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
