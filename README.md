# ⚡ AIWheelSpin — AI-Powered Decision & Giveaway Platform

The world's #1 AI decision-making platform. 1,000+ tools, real AI integration, built to go viral.

---

## 🚀 Deploy to Vercel in 5 Minutes

### Step 1 — Get your Anthropic API Key
1. Go to https://console.anthropic.com
2. Create an account → API Keys → Create Key
3. Copy the key (starts with `sk-ant-...`)

### Step 2 — Push to GitHub
```bash
cd aiwheelspin
git init
git add .
git commit -m "Initial AIWheelSpin launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aiwheelspin.git
git push -u origin main
```

### Step 3 — Deploy to Vercel
1. Go to https://vercel.com → Sign up with GitHub
2. Click "Add New Project"
3. Import your `aiwheelspin` GitHub repo
4. Under **Environment Variables**, add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your key from Step 1
5. Click **Deploy** → done in ~60 seconds!

---

## 💻 Run Locally

```bash
npm install
echo "ANTHROPIC_API_KEY=your_key_here" > .env.local
npm run dev
```

Open http://localhost:3000

---

## 📁 Project Structure

```
aiwheelspin/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── api/generate/route.ts
├── components/
│   ├── Navbar.tsx/.module.css
│   ├── Ticker.tsx/.module.css
│   ├── Hero.tsx/.module.css
│   ├── WheelSection.tsx/.module.css
│   ├── SpinWheel.tsx
│   ├── AISection.tsx/.module.css
│   ├── ToolsGrid.tsx/.module.css
│   ├── Categories.tsx/.module.css
│   ├── Pricing.tsx/.module.css
│   ├── ViralSection.tsx/.module.css
│   ├── CtaSection.tsx/.module.css
│   └── Footer.tsx/.module.css
├── .env.local
├── .gitignore
├── package.json
├── next.config.js
├── tsconfig.json
└── vercel.json
```

---

## 💰 Monetisation Roadmap

| Month | Action | Revenue Potential |
|-------|--------|-------------------|
| 1 | Launch + AdSense apply | $0-50 |
| 2 | 100 SEO pages | $50-200 |
| 3 | Pro plan live | $200-800 |
| 6 | 500 SEO pages | $1,000-5,000 |
| 12 | 100k visitors | $3,000-15,000/mo |

---

## 🌐 SEO Pages to Create Next

- `/what-should-i-eat`
- `/pubg-challenge-wheel`
- `/ipl-team-picker`
- `/giveaway-winner-picker`
- `/truth-or-dare-wheel`
- `/random-country-generator`

Create 500+ of these for 50,000+ monthly visitors.

---

Built with Next.js 14, TypeScript, Claude AI (claude-sonnet-4).
