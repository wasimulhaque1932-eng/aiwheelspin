import styles from "./Ticker.module.css";

const items = [
  { label: "AI Decision Wheel", tag: "NEW" },
  { label: "Giveaway Winner Picker", tag: "VIRAL" },
  { label: "What Should I Eat?", tag: "1M+ SPINS" },
  { label: "Team Generator", tag: "HOT" },
  { label: "PUBG Challenge Wheel", tag: "TRENDING" },
  { label: "Travel Destination Picker", tag: "NEW" },
  { label: "Business Idea Generator", tag: "AI" },
  { label: "IPL Team Picker", tag: "🔥" },
];

export default function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            🎯 {item.label} <span className={styles.tag}>{item.tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
