"use client";
import { useState } from "react";
import styles from "./AISection.module.css";

export default function AISection() {
  const [prompt, setPrompt] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const generate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    setError("");
    setOptions([]);
    setSelected(new Set());

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setOptions(data.options);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Failed to generate. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggle = (i: number) => {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <h2 className={styles.title}>
          AI That <span className={styles.gradient}>Thinks</span> For You
        </h2>
        <p className={styles.sub}>
          Type your situation. Our AI instantly creates perfect wheel options — no typing each one manually.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.dot} style={{ background: "#fc5c5c" }} />
          <span className={styles.dot} style={{ background: "#fcbc5c" }} />
          <span className={styles.dot} style={{ background: "#5cfc7a" }} />
          <span className={styles.cardTitle}>aiwheelspin.com — AI Option Generator</span>
        </div>

        <div className={styles.body}>
          <textarea
            className={styles.input}
            rows={3}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="E.g. 'I have ₹50,000 and want to start a business' or 'What should I eat tonight?'"
            onKeyDown={e => e.key === "Enter" && e.ctrlKey && generate()}
          />
          <button
            className={styles.genBtn}
            onClick={generate}
            disabled={loading || !prompt.trim()}
          >
            {loading ? "🤖 AI is thinking..." : "✨ Generate AI Options"}
          </button>
        </div>

        {error && (
          <div className={styles.error}>{error}</div>
        )}

        {options.length > 0 && (
          <div className={styles.results}>
            <p className={styles.hint}>Click options to highlight them on your wheel:</p>
            <div className={styles.chips}>
              {options.map((opt, i) => (
                <div
                  key={i}
                  className={`${styles.chip} ${selected.has(i) ? styles.chipSelected : ""}`}
                  onClick={() => toggle(i)}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
