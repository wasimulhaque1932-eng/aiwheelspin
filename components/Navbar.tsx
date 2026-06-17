"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>⚡ AIWheelSpin</div>

      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <a href="#tools">Tools</a>
        <a href="#categories">Categories</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </div>

      <div className={styles.right}>
        <button className={styles.cta}>Try for Free</button>
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
