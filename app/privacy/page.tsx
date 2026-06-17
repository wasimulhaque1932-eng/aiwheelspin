import styles from "../legal.module.css";

export const metadata = {
  title: "Privacy Policy – AIWheelSpin",
  description: "How AIWheelSpin collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.badge}>Legal</div>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: June 15, 2026</p>

        <div className={styles.intro}>
          At AIWheelSpin, your privacy is our top priority. This policy explains what
          data we collect, why we collect it, and how we protect it. We are
          committed to being fully transparent.
        </div>

        <section className={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Usage Data:</strong> Pages you visit, tools you use, spins you make, and time spent on site.</li>
            <li><strong>Device Data:</strong> Browser type, operating system, screen size, and IP address.</li>
            <li><strong>Account Data (if you sign up):</strong> Name, email address, and profile photo via Google login.</li>
            <li><strong>AI Prompts:</strong> Text you type into the AI Option Generator to generate wheel options.</li>
            <li><strong>Payment Data:</strong> If you subscribe to Pro/Team plans, payment is processed securely by Stripe. We never store your card details.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To provide and improve AIWheelSpin tools and features</li>
            <li>To personalise your experience and remember your wheels</li>
            <li>To process payments for premium plans</li>
            <li>To send product updates and newsletters (only if you opt in)</li>
            <li>To analyse usage patterns and fix bugs</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Keep you logged in between sessions</li>
            <li>Remember your wheel preferences and dark mode setting</li>
            <li>Analyse traffic via Google Analytics</li>
            <li>Show relevant ads via Google AdSense</li>
          </ul>
          <p>You can disable cookies in your browser settings at any time. Some features may not work without cookies.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Third-Party Services</h2>
          <p>AIWheelSpin uses the following third-party services:</p>
          <ul>
            <li><strong>Anthropic Claude AI</strong> — Powers the AI Option Generator</li>
            <li><strong>Google Analytics</strong> — Tracks website traffic anonymously</li>
            <li><strong>Google AdSense</strong> — Displays relevant advertisements</li>
            <li><strong>Stripe</strong> — Processes payments securely</li>
            <li><strong>Vercel</strong> — Hosts our website</li>
          </ul>
          <p>Each service has its own privacy policy. We recommend reviewing them.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Data Sharing</h2>
          <p>We do <strong>never</strong> sell your personal data to anyone. We only share data with:</p>
          <ul>
            <li>Service providers listed above who help us operate the platform</li>
            <li>Law enforcement if legally required</li>
            <li>Business partners only with your explicit consent</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Data Retention</h2>
          <p>We keep your data for as long as your account is active. If you delete your account, we permanently delete all your data within 30 days.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the data we hold about you</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing emails anytime</li>
            <li>Download your data in a portable format</li>
          </ul>
          <p>To exercise any of these rights, email us at <strong>privacy@aiwheelspin.com</strong></p>
        </section>

        <section className={styles.section}>
          <h2>8. Children&apos;s Privacy</h2>
          <p>AIWheelSpin is not directed at children under 13 years of age. We do not knowingly collect personal data from children. If you believe a child has provided us data, contact us immediately.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Changes to This Policy</h2>
          <p>We may update this policy from time to time. We will notify you of significant changes via email or a notice on our website. Continued use of AIWheelSpin after changes means you accept the updated policy.</p>
        </section>

        <section className={styles.section}>
          <h2>10. Contact Us</h2>
          <p>For any privacy-related questions or concerns:</p>
          <ul>
            <li>📧 Email: <strong>privacy@aiwheelspin.com</strong></li>
            <li>🌐 Website: <strong>aiwheelspin.com</strong></li>
            <li>📍 Location: India 🇮🇳</li>
          </ul>
        </section>

        <div className={styles.backBtn}>
          <a href="/">← Back to AIWheelSpin</a>
        </div>
      </div>
    </main>
  );
}
