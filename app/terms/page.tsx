import styles from "../legal.module.css";

export const metadata = {
  title: "Terms of Service – AIWheelSpin",
  description: "Terms and conditions for using AIWheelSpin platform.",
};

export default function Terms() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.badge}>Legal</div>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: June 15, 2026</p>

        <div className={styles.intro}>
          By using AIWheelSpin, you agree to these Terms of Service. Please read
          them carefully. If you do not agree, please do not use our platform.
        </div>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using AIWheelSpin at any URL, you agree to be bound by these Terms of Service and our Privacy Policy. These terms apply to all users — free, Pro, and Team plan subscribers.</p>
        </section>

        <section className={styles.section}>
          <h2>2. What AIWheelSpin Provides</h2>
          <p>AIWheelSpin is an AI-powered decision and giveaway platform offering:</p>
          <ul>
            <li>Spin wheel tools for random selection and decision making</li>
            <li>AI-generated wheel options via Claude AI</li>
            <li>Giveaway and winner picker tools</li>
            <li>Team generators, number generators, and 1,000+ other tools</li>
            <li>Premium Pro and Team subscription plans</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. User Responsibilities</h2>
          <p>You agree that you will:</p>
          <ul>
            <li>Use AIWheelSpin only for lawful purposes</li>
            <li>Not attempt to hack, scrape, or reverse-engineer our platform</li>
            <li>Not use AIWheelSpin to generate harmful, illegal, or offensive content</li>
            <li>Not share your account credentials with others</li>
            <li>Provide accurate information when creating an account</li>
            <li>Be at least 13 years of age to use AIWheelSpin</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Free vs Premium Plans</h2>
          <ul>
            <li><strong>Free Plan:</strong> 5 AI requests per day, basic tools, ads displayed</li>
            <li><strong>Pro Plan ($4.99/mo):</strong> 100 AI requests/day, no ads, custom branding, unlimited history</li>
            <li><strong>Team Plan ($9.99/mo):</strong> Unlimited AI requests, team workspace, API access, white-label</li>
          </ul>
          <p>Plans are billed monthly. You can cancel anytime. No refunds for partial months.</p>
        </section>

        <section className={styles.section}>
          <h2>5. AI-Generated Content</h2>
          <p>AIWheelSpin uses Claude AI (by Anthropic) to generate wheel options based on your prompts. You understand that:</p>
          <ul>
            <li>AI outputs are suggestions only — not professional advice</li>
            <li>AIWheelSpin is not responsible for decisions made based on AI outputs</li>
            <li>You should not rely on AI outputs for medical, legal, or financial decisions</li>
            <li>AI responses may occasionally be inaccurate or inappropriate</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Intellectual Property</h2>
          <p>All content on AIWheelSpin — including the logo, design, code, and tools — is owned by AIWheelSpin. You may not copy, reproduce, or redistribute any part of AIWheelSpin without written permission.</p>
          <p>Wheel content you create belongs to you. By using AIWheelSpin, you grant us a limited license to display your content to provide the service.</p>
        </section>

        <section className={styles.section}>
          <h2>7. Limitation of Liability</h2>
          <p>AIWheelSpin is provided &quot;as is&quot; without warranties of any kind. We are not liable for:</p>
          <ul>
            <li>Any losses resulting from use or inability to use AIWheelSpin</li>
            <li>Decisions made based on wheel results or AI outputs</li>
            <li>Service interruptions or data loss</li>
            <li>Third-party content or links on the platform</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>8. Termination</h2>
          <p>We reserve the right to suspend or terminate your account if you violate these terms. You may delete your account at any time from your profile settings.</p>
        </section>

        <section className={styles.section}>
          <h2>9. Changes to Terms</h2>
          <p>We may update these terms occasionally. We will notify users of major changes. Continued use after changes means you accept the new terms.</p>
        </section>

        <section className={styles.section}>
          <h2>10. Contact</h2>
          <p>Questions about these terms? Contact us at <strong>legal@aiwheelspin.com</strong></p>
        </section>

        <div className={styles.backBtn}>
          <a href="/">← Back to AIWheelSpin</a>
        </div>
      </div>
    </main>
  );
}
