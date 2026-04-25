# Chord Detective

Chord Detective is a single-file Web MIDI chord finder built for quick testing on desktop and touch devices.

<p align="center">
  <img src="./screenshot.png" alt="Chord Detective app screenshot" />
</p>

Live site:
[https://danibanon.github.io/chord-detective/](https://danibanon.github.io/chord-detective/)

## What it does

- Detects notes and common chord shapes from the on-screen keyboard
- Connects to MIDI devices through the Web MIDI API when the browser supports it
- Works as a lightweight HTTPS test target for browser MIDI troubleshooting
- Stays self-contained in one file for easy hosting and sharing

## Why GitHub Pages

Opening the app with `file://` is not enough for reliable browser API testing. GitHub Pages serves the app over HTTPS, which is the right setup for testing Web MIDI behavior on Chrome and Android.

## Project structure

- [`index.html`](./index.html): complete app, including markup, styles, and logic

## Notes

- HTTPS is required for Web MIDI, but device and browser support can still vary.
- Android Chrome may still behave differently depending on the connected hardware path and OS support.
