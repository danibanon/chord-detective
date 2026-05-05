# What it does

Chordet allows you to know the chord you are playing on your piano in 3 simple steps:
  1. Open with your phone the [website](https://danibanon.github.io/chord-detective/)
  2. Connect your piano to your phone via MIDI
  3. Enjoy!

![Chordet screenshot](./screenshot.png)
Landscape mode is highly recommended!

## Installable App

Install Chordet on your phone directly from the web! No play store needed
  1. Open the [URL](https://danibanon.github.io/chord-detective/) in Android Chrome
  2. Click top right 3 dots
  3. Add to home screen
  4. Install
  5. Now you have it! Go find "Chordet" among your apps


## Design goals

- Keep the rebuild lean and easy to audit, with as few lines of code and files as practical.
- Preserve a clean Material 3-inspired visual language using a dark surface, soft violet accents, rounded containers, and elevated keys.
- Stay responsive without breakpoints-heavy layout code by scaling from viewport width and height, hiding secondary UI when vertical space gets too tight, and keeping the piano horizontally scrollable when necessary.
- Work as a no-build static site that can be opened locally or hosted from any simple web server.

## Project structure

- [`index.html`](./index.html): app UI, styling, chord detection, responsive piano rendering, and MIDI integration
- [`manifest.webmanifest`](./manifest.webmanifest): install metadata
- [`sw.js`](./sw.js): offline cache
- [`icons/logo.svg`](./icons/logo.svg): extracted logo source and app icon
- [`screenshot.png`](./screenshot.png): README preview image

## Generating maskable PNG fallbacks (optional)

To ensure Android/Chrome uses a full dark circular icon, create maskable PNGs (192x192 and 512x512) with a full dark square background and centered foreground. Example commands:

PowerShell (Inkscape 1.0+):
```powershell
& "C:\Program Files\Inkscape\bin\inkscape.exe" icons\logo.svg --export-filename=icons\icon-512-maskable.png --export-width=512
& "C:\Program Files\Inkscape\bin\inkscape.exe" icons\logo.svg --export-filename=icons\icon-192-maskable.png --export-width=192
```

ImageMagick (Windows):
```powershell
magick icons\logo.svg -background "#1C1B1F" -flatten -resize 512x512 icons\icon-512-maskable.png
magick icons\logo.svg -background "#1C1B1F" -flatten -resize 192x192 icons\icon-192-maskable.png
```

Node + sharp (npx):
```bash
npx sharp icons/logo.svg --resize 512 512 --flatten --background '#1C1B1F' -o icons/icon-512-maskable.png
npx sharp icons/logo.svg --resize 192 192 --flatten --background '#1C1B1F' -o icons/icon-192-maskable.png
```

After generating the PNGs, add them to git and push:
```bash
git add icons/icon-192-maskable.png icons/icon-512-maskable.png
git commit -m "Add maskable PNG app icons"
git push origin main
```

Then uninstall the PWA from your device, clear site data or unregister the service worker (DevTools → Application → Service Workers → Unregister), reload the site and reinstall the PWA.
