import styles from "./Footer.module.css";

const footerLinks = {
  Tools: [
    "AI Decision Wheel",
    "Giveaway Winner Picker",
    "Team Generator",
    "Number Generator",
    "What Should I Eat?",
    "Travel Picker",
  ],
  Categories: [
    "Gaming",
    "Education",
    "Sports",
    "Business",
    "Fun & Party",
    "Fitness",
  ],
  Company: [
    "About Us",
    "Blog",
    "Advertise",
    "Affiliate Program",
    "Contact Us",
    "Careers",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Refund Policy",
  ],
};

const socials = [
  { name: "TikTok", icon: "🎵", url: "#" },
  { name: "Instagram", icon: "📸", url: "#" },
  { name: "YouTube", icon: "▶️", url: "#" },
  { name: "Twitter/X", icon: "🐦", url: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="about">
      {/* Top Section */}
      <div className={styles.top}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <div className={styles.logo}>⚡ AIWheelSpin</div>
          <p className={styles.tagline}>
            The world&apos;s #1 AI-powered decision platform. 1,000+ tools to
            help you spin, decide, and win — instantly.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a key={s.name} href={s.url} className={styles.socialBtn} title={s.name}>
                {s.icon} {s.name}
              </a>
            ))}
          </div>
          <div className={styles.badge}>
            🔒 Secure &nbsp;|&nbsp; 🆓 Free to Use &nbsp;|&nbsp; 🤖 AI Powered
          </div>
        </div>

        {/* Links Columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title} className={styles.column}>
            <h4 className={styles.colTitle}>{title}</h4>
            <ul className={styles.colLinks}>
              {links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        {[
          { num: "2.4M+", label: "Monthly Spins" },
          { num: "98K+", label: "Happy Users" },
          { num: "1,000+", label: "AI Tools" },
          { num: "4.9★", label: "User Rating" },
          { num: "150+", label: "Countries" },
        ].map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <div className={styles.copy}>
          © 2026 AIWheelSpin. All rights reserved. Built with ❤️ in India 🇮🇳
        </div>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
        </div>
        <div className={styles.madeWith}>
          Powered by <span>Claude AI</span> & Next.js
        </div>
      </div>
    </footer>
  );
}
