import styles from "./Categories.module.css";

const cats = [
  { emoji: "📚", name: "Education", count: "42 tools" },
  { emoji: "🎮", name: "Gaming", count: "68 tools" },
  { emoji: "🏏", name: "Sports", count: "35 tools" },
  { emoji: "💼", name: "Business", count: "54 tools" },
  { emoji: "🎉", name: "Fun & Party", count: "89 tools" },
  { emoji: "🍽️", name: "Food", count: "28 tools" },
  { emoji: "✈️", name: "Travel", count: "31 tools" },
  { emoji: "💪", name: "Fitness", count: "22 tools" },
  { emoji: "🎬", name: "Movies & TV", count: "19 tools" },
  { emoji: "🎵", name: "Music", count: "16 tools" },
  { emoji: "🐾", name: "Pets", count: "11 tools" },
  { emoji: "🌐", name: "Random World", count: "47 tools" },
];

export default function Categories() {
  return (
    <section className={styles.section} id="categories">
      <div className={styles.head}>
        <h2 className={styles.title}>Every Category. Every Need.</h2>
        <p className={styles.sub}>500+ SEO pages targeting every niche — education, gaming, sports, fun & more.</p>
      </div>
      <div className={styles.grid}>
        {cats.map((c) => (
          <div key={c.name} className={styles.card}>
            <div className={styles.emoji}>{c.emoji}</div>
            <div className={styles.name}>{c.name}</div>
            <div className={styles.count}>{c.count}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
