import styles from "./CtaSection.module.css";

export default function CtaSection() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Ready to <span className={styles.gradient}>Stop Deciding</span><br />
          and Start Spinning?
        </h2>
        <p className={styles.sub}>Join 98,000+ users who let AI make life&apos;s choices easier.</p>
        <button className={styles.btn}>🚀 Start Free — No Credit Card</button>
      </div>
    </section>
  );
}
