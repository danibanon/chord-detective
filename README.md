# Chordetect

Chordetect is a lean static chord detector built around a single primary file: [`index.html`](./index.html). It uses the Web MIDI API when a device is available, supports manual note toggling directly on the keyboard, and keeps the codebase intentionally small with no framework, build step, or package manager.

![Chordetect screenshot](./screenshot.png)

## What it does

- Detects single notes, common chords, extensions, slash chords, and selected `no5` voicings.
- Accepts live MIDI note input and sustain pedal messages.
- Lets you click or tap the 88-key piano to test voicings without external hardware.
- Shows the detected chord name, descriptive chord type, and note list in real time.
- Updates MIDI status as `off`, `waiting`, `connected`, or `denied`.

## Design goals

- Keep the rebuild lean and easy to audit, with as few lines of code and files as practical.
- Preserve a clean Material 3-inspired visual language using a dark surface, soft violet accents, rounded containers, and elevated keys.
- Stay responsive without breakpoints-heavy layout code by scaling from viewport width and height, hiding secondary UI when vertical space gets too tight, and keeping the piano horizontally scrollable when necessary.
- Work as a no-build static site that can be opened locally or hosted from any simple web server.

## Installable offline app

Chordetect now includes the minimum PWA pieces required for installation and offline reuse:

- `manifest.webmanifest`
- `sw.js`
- extracted logo and install icons in [`icons/`](./icons/)

After the app loads once in a supported browser, the service worker caches the app shell so it can reopen offline. Web MIDI itself still depends on browser and device support, so offline mode preserves the UI and manual interaction first; hardware MIDI access remains subject to platform availability and permissions.

## Project structure

- [`index.html`](./index.html): app UI, styling, chord detection, responsive piano rendering, and MIDI integration
- [`manifest.webmanifest`](./manifest.webmanifest): install metadata
- [`sw.js`](./sw.js): offline cache
- [`icons/logo.svg`](./icons/logo.svg): extracted logo source
- [`icons/icon-192.png`](./icons/icon-192.png) and [`icons/icon-512.png`](./icons/icon-512.png): install icons
- [`screenshot.png`](./screenshot.png): README preview image

## Running it

Because this is a static app, any lightweight local server is enough. For example:

```powershell
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in a Chromium-based browser for Web MIDI and install support.
