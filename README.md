# Chord Detective

Chord Detective is a browser-based chord finder that works with both an on-screen piano and external MIDI keyboards. Open it on the web, play notes, and it identifies the chord in real time with a layout that is tuned for desktop, phone portrait, and phone landscape use.

The app is also installable as a Progressive Web App (PWA), so supported browsers can add it to the home screen and launch it like a lightweight local app.

## Live App

Use the hosted version here:

[https://danibanon.github.io/chord-detective/](https://danibanon.github.io/chord-detective/)

No build step or local setup is required to use the live version.

## Screenshots

### Phone Portrait

![Chord Detective phone portrait](<./phone portrait.png>)

### Phone Landscape

![Chord Detective phone landscape](<./phone landscape.png>)

### Desktop Landscape

![Chord Detective desktop landscape](<./Desktop landscape.png>)

## What It Does

Chord Detective listens to the notes currently active in the app and tries to match them against a built-in set of chord patterns.

You can provide notes in two ways:

- Tap the on-screen piano
- Connect a MIDI keyboard through the browser's Web MIDI support

As notes change, the app updates:

- the detected root note
- the chord symbol
- the chord type / quality
- inversion state when detected
- the active note pills shown at the top

If the played notes do not match one of the supported patterns, the app shows `chord not recognised`.

## Key Features

- Browser-based chord detection with no framework or build system
- On-screen piano for quick testing without external hardware
- Web MIDI input support for external keyboards and controllers
- Real-time chord naming with root, symbol, and inversion-aware output
- Active note pill strip for quick visual feedback
- Responsive layouts for desktop, phone portrait, and phone landscape
- Octave navigation controls plus gesture-friendly mobile behavior
- Installable PWA with standalone app-style launch on supported devices
- Offline-ready app shell after first successful load in supported browsers

## Phone, Touch, and Responsive Behavior

The interface is designed to stay usable on smaller screens rather than just shrinking the desktop layout.

- Phone portrait uses a compact stacked layout
- Phone landscape uses a different optimized arrangement for tight vertical space
- Desktop keeps the wider, full keyboard-first layout
- Touch interactions are tuned for mobile usage, including scrolling, note selection, and refresh behavior
- The piano window can shift octaves without rebuilding the whole app experience

## PWA / Installable App

Chord Detective includes a web app manifest, install icons, and a service worker so supported browsers can install it.

On compatible browsers and platforms, users can:

- add it to the home screen
- launch it in standalone mode
- get an app icon instead of a generic browser shortcut
- reopen the app shell locally after it has been loaded once

This is especially useful on phones and tablets where the app is meant to feel quick and direct.

## Browser and MIDI Compatibility

The app itself is a static web app, so opening the interface is much easier than using MIDI input.

General access:

- Any modern browser can load the interface itself
- The hosted GitHub Pages version is the easiest way to use the app normally

MIDI-specific notes:

- Web MIDI requires a secure context such as `https://`
- MIDI support depends on the browser, OS, permissions, and connected hardware
- Chromium-based browsers are the safest choice for Web MIDI usage
- Some browsers may open the app correctly but still not support MIDI input

Practical recommendation:

- Use the live hosted URL for real usage
- Treat `file://` as a limited local preview mode rather than the main way to test browser capabilities

## Supported Chord Coverage

The app currently includes built-in support for these chord families:

- Power chords
- Major
- Minor
- Diminished
- Augmented
- `sus2`
- `sus4`
- `maj7`
- `m7`
- `7`
- `°7`
- `ø7`
- `mM7`
- `+M7`
- `+7`
- `6`
- `m6`
- `add9`
- `madd9`
- `7sus4`
- `9`
- `maj9`
- `m9`
- `6/9`

## How Detection Works

The app combines notes held from manual on-screen interaction and MIDI input, reduces them to pitch classes, and compares them to exact built-in interval patterns.

Important behavior:

- The bass note is considered when deciding inversions
- Active notes are re-centered into the visible keyboard window
- The low end of the range includes proper `A0` / `B0` handling
- The app is intentionally fast and lightweight rather than theory-heavy

## Limits / Non-Goals

Chord Detective is intentionally simple and focused.

- It is not a full harmonic analysis engine
- Detection is pattern-based, not context-aware music theory
- More advanced extended or ambiguous voicings may not resolve to a named chord
- Enharmonic spelling is simplified to sharp note names
- Browser MIDI behavior can still vary depending on platform and hardware

## Troubleshooting

### MIDI button says unsupported

Your browser or current context likely does not support Web MIDI. Try the hosted HTTPS version in a Chromium-based browser.

### MIDI access is denied

The browser blocked MIDI permission or access was dismissed. Re-open the live site and allow MIDI access when prompted, or check browser site permissions.

### The app opens but no MIDI device appears

Make sure:

- the device is connected before or while the page is open
- the browser supports Web MIDI
- the device is available to the browser and not locked by another app

### Install / Add to Home Screen does not appear

Installability depends on browser and platform support. Use the hosted site, not `file://`, and try a supported mobile Chromium browser.

### The installed app opens but behaves differently from the browser tab

Reload once after install so the latest shell is active. If needed, close and reopen the installed app after the site has loaded successfully online.

### Mobile gesture behavior feels inconsistent

Phone behavior is intentionally scoped to balance scrolling, zoom, and refresh gestures. If something feels off, retest on the hosted version and compare with the footer version marker shown inside the app.

## Local Use

If you want to run it locally for testing:

- serve the folder through a local HTTP server
- avoid relying on `file://` for installability or real MIDI testing

Because the app is static, local serving is enough. There is no build pipeline to run.

## Project Structure

- `index.html` contains the main interface, styles, gesture logic, piano logic, and chord detection
- `manifest.webmanifest`, `sw.js`, and `icons/` provide the PWA layer
- the PNG screenshots in the repo show the current desktop and mobile layouts

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
