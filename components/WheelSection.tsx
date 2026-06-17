import SpinWheel from "./SpinWheel";
import styles from "./WheelSection.module.css";

const features = [
  { icon: "🤖", text: "AI auto-generates wheel options from your prompt" },
  { icon: "💾", text: "Save & share your wheel with a unique link" },
  { icon: "🏆", text: "Full winner history & export results" },
  { icon: "🌙", text: "Dark mode, mobile-friendly, lightning fast" },
];

export default function WheelSection() {
  return (
    <section className={styles.section} id="wheel">
      <div className={styles.wheelSide}>
        <SpinWheel />
      </div>
      <div className={styles.infoSide}>
        <h2 className={styles.title}>The Smartest<br />Wheel on the Net</h2>
        <p className={styles.desc}>
          Our AI doesn&apos;t just spin — it understands your situation and creates
          personalised options for you. Type your dilemma, get instant options, spin!
        </p>
        <div className={styles.features}>
          {features.map((f) => (
            <div key={f.text} className={styles.feat}>
              <div className={styles.featIcon}>{f.icon}</div>
              <span>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
