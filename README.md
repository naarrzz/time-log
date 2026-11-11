# Time Log

**Live demo:** https://naarrzz.github.io/time-log/

- **No account:** your logs are saved only in that browser on that device. They stay when you refresh or close the browser, but you can lose them if you clear your browsing data, use a private tab, remove the browser or home screen app, or don't open the app for a while in Safari.
- **With an account:** your logs are saved to your account, so they sync across your devices and stay even if you lose the browser.

A one-tap personal time audit app, built to see where my hours actually go between work, school, coaching, content and training.

- **Ngayon**: tap what you're doing; the timer runs until you tap something else. Forgot to switch? Backdate with 15 / 30 / 60 min chips.
- **Gaps**: walks you through unlogged stretches (15+ minutes) one at a time, on any day.
- **Week**: one plain insight, weekly goals, the last 7 days, totals per category, and a Kasabay summary. Tap a day to open it.
- **Kasabay**: anything running alongside the main activity, with its own start and end. It never adds time, so daily totals stay honest, and Week shows how much of your time was divided and which pairs happen most.

- **Sync and offline**: signed-in logs sync through Cloud Firestore in real time and keep working with no internet.
- **Sub-labels**: say what exactly you did in a tile, like Jeep under Biyahe. Optional, and Week shows the breakdown.
- **Backup and restore**: download every log as a JSON file, and add it back any time.
- **Themes**: Auto, Light, Dim and Dark, saved per device.

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

## Android app (test build)

**[Download the APK](https://github.com/naarrzz/time-log-android/releases/latest/download/TimeLog-debug.apk)** · Source: [naarrzz/time-log-android](https://github.com/naarrzz/time-log-android)

A small Android app around this same web app, with the same account and logs. It adds a live notification with the running timer and Stop (a Live Update chip on Android 16), a home screen widget with tile shortcuts, and reminders for a tile left running over 4 hours and gaps left at 9 PM. Android 8.0 and up.

It isn't on the Play Store, so you install it yourself:

1. Download the APK on your phone and open it.
2. Android asks to allow installs from that app (Chrome or Files): allow it once.
3. Install, open Time Log, allow notifications, and sign in.
4. Long-press your home screen, tap Widgets, then Time Log, to add the widget.

It's an early test build: the notification and widget start working once this web app's Android support is live.

## Older versions

Updates reach the main link automatically, including on your home screen. To stay on an older version, open its link and add that to your home screen. It uses the same account and logs.

- [v0.5.0](https://naarrzz.github.io/time-log/versions/v0.5/)
- [v0.4.0](https://naarrzz.github.io/time-log/versions/v0.4/)
- [v0.3.0](https://naarrzz.github.io/time-log/versions/v0.3/)
- [v0.2.2](https://naarrzz.github.io/time-log/versions/v0.2/)
- [v0.1.0](https://naarrzz.github.io/time-log/versions/v0.1/)
