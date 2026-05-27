# Chordet

Chordet is a browser-based chord detector for piano and keyboard players. Connect a MIDI keyboard for real-time recognition, or tap notes on the built-in piano.

![Chordet screenshot](./screenshot.png)

Landscape mode is recommended, especially on phones.

## Features

- Real-time Web MIDI chord recognition.
- 88-key on-screen piano with highlighted active notes.
- Chord name, chord type, played notes, and alternate interpretations.
- Slash chords, omitted tones, polychord and upper-structure suggestions.
- Major, minor, suspended, diminished, augmented, sixth, add9, 7th, 9th, 11th, 13th, and altered dominant chords.
- Sharp/flat spelling toggle.
- MIDI sustain pedal support.
- Responsive fullscreen layout with screen wake lock when supported.
- Installable PWA with offline caching.

## How to Use

1. Open [Chordet](https://danibanon.github.io/chord-detective/).
2. Connect a MIDI keyboard, or tap notes on the on-screen piano.
3. Use the sharp/flat toggle to change note spelling.
4. Tap the Chordet title to clear held/manual notes.

## Installable App

Install Chordet from the browser, no app store needed:

1. Open [Chordet](https://danibanon.github.io/chord-detective/) in Android Chrome.
2. Open the browser menu.
3. Choose **Add to Home screen** or **Install app**.
4. Launch Chordet from your apps.

## Tests

Run the dependency-free chord detection tests with:

```sh
npm test
```
