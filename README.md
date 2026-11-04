# Time Log

**Live demo:** https://naarrzz.github.io/time-log/ (tap "Subukan nang walang account" to try it; logs stay in your browser)

A one-tap personal time audit app, built to see where my hours actually go between work, school, coaching, content and training.

- **Ngayon**: tap what you're doing; the timer runs until you tap something else. Forgot to switch? Backdate with 15 / 30 / 60 min chips.
- **Gaps**: walks you through unlogged stretches (15+ minutes) one at a time.
- **Linggo**: last 7 days, totals per category, and a Kasabay summary.
- **Kasabay tags**: things happening alongside the main activity (eating, Work standby). They never add time, so daily totals stay honest.

- **Sync and offline**: signed-in logs sync through Cloud Firestore in real time and keep working with no internet.
- **Backup**: download every log as a JSON file.

Single-file HTML/CSS/JS with no build step, plus a small service worker so the home screen app opens offline. `firestore.rules` limits each account to its own logs, which is why the Firebase web config can sit in public code.
