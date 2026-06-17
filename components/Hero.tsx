import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          World&apos;s #1 AI Decision Platform
        </div>

        <h1 className={styles.title}>
          Stop Overthinking.<br />
          Let <span className={styles.gradient}>AI Decide</span> for You.
        </h1>

        <p className={styles.subtitle}>
          1,000+ smart tools powered by AI. Spin wheels, pick winners, generate
          ideas, plan teams — in seconds.
        </p>

        <div className={styles.btns}>
          <a href="#wheel" className={styles.btnPrimary}>
            🎯 Spin Now — It&apos;s Free
          </a>
          <a href="#tools" className={styles.btnSecondary}>
            Explore 1000+ Tools
          </a>
        </div>

        <div className={styles.stats}>
          {[
            { num: "2.4M+", label: "Spins This Month" },
            { num: "1,000+", label: "AI-Powered Tools" },
            { num: "98K+", label: "Happy Users" },
            { num: "4.9★", label: "User Rating" },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
