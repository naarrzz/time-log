# Time Log

**Live demo:** https://naarrzz.github.io/time-log/ (tap "Try muna, no account" to try it; logs stay in your browser)

A one-tap personal time audit app, built to see where my hours actually go between work, school, coaching, content and training.

- **Ngayon**: tap what you're doing; the timer runs until you tap something else. Forgot to switch? Backdate with 15 / 30 / 60 min chips.
- **Gaps**: walks you through unlogged stretches (15+ minutes) one at a time.
- **Linggo**: last 7 days, totals per category, and a Kasabay summary.
- **Kasabay**: anything running alongside the main activity, with its own start and end. It never adds time, so daily totals stay honest, and Linggo shows how much of your time was divided and which pairs happen most.

- **Sync and offline**: signed-in logs sync through Cloud Firestore in real time and keep working with no internet.
- **Backup**: download every log as a JSON file.

Single-file HTML/CSS/JS with no build step, plus a small service worker so the home screen app opens offline. `firestore.rules` limits each account to its own logs, which is why the Firebase web config can sit in public code.

## Add it to your iPhone home screen

It opens fullscreen like a normal app, and works offline after the first load. In Safari, open https://naarrzz.github.io/time-log/, then:

**1. Tap the menu button in the address bar.**

<img src="docs/home-screen/step-1-menu.webp" alt="Safari address bar with the menu button on the left highlighted" width="360">

**2. Tap Share.**

<img src="docs/home-screen/step-2-share.webp" alt="Safari menu with Share highlighted at the top" width="280">

**3. Tap View More.**

<img src="docs/home-screen/step-3-view-more.webp" alt="Share sheet with the View More button highlighted" width="280">

**4. Tap Add to Home Screen, then tap Add.**

<img src="docs/home-screen/step-4-add-to-home-screen.webp" alt="Expanded share sheet with Add to Home Screen highlighted" width="280">

Time Log now sits on your home screen. Open it from there from now on.
