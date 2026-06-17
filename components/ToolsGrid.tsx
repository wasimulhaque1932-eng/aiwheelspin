import styles from "./ToolsGrid.module.css";

const tools = [
  { icon: "🎯", name: "AI Decision Wheel", desc: "Tell AI your dilemma and get a customised decision wheel instantly", tag: "⚡ Most Popular" },
  { icon: "🎁", name: "Giveaway Winner Picker", desc: "Fair, transparent winner selection for Instagram, YouTube & contests", tag: "🔥 Viral" },
  { icon: "🍕", name: "What Should I Eat?", desc: "Can't decide dinner? Let AI pick from your preferences & mood", tag: "😋 Fun" },
  { icon: "👥", name: "Team Generator", desc: "AI-balanced team splits for sports, class, office or gaming sessions", tag: "🏆 Teams" },
  { icon: "💡", name: "Business Idea Generator", desc: "Tell AI your budget & skills, get 20 tailored business ideas on a wheel", tag: "🚀 AI" },
  { icon: "✈️", name: "Travel Destination Picker", desc: "AI picks your next travel destination based on budget, season & vibe", tag: "🌏 Explore" },
  { icon: "🎮", name: "Gaming Challenge Wheel", desc: "PUBG, Free Fire, Minecraft & 50+ game challenge wheels", tag: "🎮 Gaming" },
  { icon: "🔢", name: "Number Generator", desc: "Random numbers, lottery picks, dice rolls with full customisation", tag: "🎲 Random" },
];

export default function ToolsGrid() {
  return (
    <section className={styles.section} id="tools">
      <div className={styles.head}>
        <h2 className={styles.title}>1,000+ Tools for Every Decision</h2>
        <p className={styles.sub}>Every tool is SEO-optimised and AI-enhanced. Start with the most popular ones.</p>
      </div>
      <div className={styles.grid}>
        {tools.map((t) => (
          <div key={t.name} className={styles.card}>
            <div className={styles.icon}>{t.icon}</div>
            <div className={styles.name}>{t.name}</div>
            <div className={styles.desc}>{t.desc}</div>
            <span className={styles.tag}>{t.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
