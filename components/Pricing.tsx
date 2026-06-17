import styles from "./Pricing.module.css";

const plans = [
  {
    name: "Free",
    price: "0",
    period: "/mo",
    featured: false,
    features: ["5 AI requests/day", "All basic tools", "Share wheel links", "Winner history (7 days)", "Mobile friendly"],
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: "4.99",
    period: "/mo",
    featured: true,
    badge: "MOST POPULAR",
    features: ["100 AI requests/day", "No ads ever", "Custom branding on wheels", "Unlimited winner history", "Priority support", "Export to PDF/CSV"],
    cta: "Start Pro — $4.99/mo",
  },
  {
    name: "Team",
    price: "9.99",
    period: "/mo",
    featured: false,
    features: ["Unlimited AI requests", "Team workspace", "White-label wheels", "API access", "Analytics dashboard", "Dedicated support"],
    cta: "Go Team",
  },
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.head}>
        <h2 className={styles.title}>Simple, Fair Pricing</h2>
        <p className={styles.sub}>Start free. Upgrade when you need more power.</p>
      </div>
      <div className={styles.grid}>
        {plans.map((p) => (
          <div key={p.name} className={`${styles.card} ${p.featured ? styles.featured : ""}`}>
            {p.badge && <div className={styles.badge}>{p.badge}</div>}
            <div className={styles.planName}>{p.name}</div>
            <div className={styles.price}>
              <sup>$</sup>{p.price}<span>{p.period}</span>
            </div>
            <ul className={styles.features}>
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className={`${styles.btn} ${p.featured ? styles.btnFeatured : ""}`}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
