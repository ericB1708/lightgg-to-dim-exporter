# DIM Exporter for light.gg

A browser extension for Chromium-based browsers (Brave, Google Chrome) that reads selected weapon perks from [light.gg](https://www.light.gg) and automatically generates a search string for the [Destiny Item Manager (DIM)](https://destinyitemmanager.com/).

## ✨ Features

- **Seamless Integration:** Automatically adds a "Copy DIM search" button to the Perk Playground on light.gg weapon pages.
- **Live Reading:** Captures the correct weapon name and all currently selected perks (yellow border) chosen by the user.
- **DIM Compatible:** Assembles a ready-to-use search string (e.g., `exactname:"Loud Lullaby" perkname:"Rampage" perkname:"Slideshot"`).
- **1-Click Copy:** Saves the generated string directly to your clipboard with one click, ready to be pasted into DIM.

## 🚀 Installation (Developer Mode)

Since this plugin is not yet published in the Web Store, you can install it locally via your browser's Developer Mode:

1. Download this repository (as a ZIP) and extract it, or clone it via Git:
   `git clone ...`
2. Open your browser (e.g., Brave or Chrome) and navigate to the extensions page:
   - Brave: `brave://extensions/`
   - Chrome: `chrome://extensions/`
3. Enable the **Developer mode** toggle in the top right corner.
4. Click on **Load unpacked** in the top left.
5. Select the folder containing the `manifest.json` file.
6. The plugin is now active

## 💻 Usage

1. Open the page of any weapon on [light.gg](https://www.light.gg).
2. Scroll down to the **Perk Playground** and select the perks you want to search for in your vault.
3. Click the new **Copy DIM search** button (next to the Shuffle/Reset buttons).
4. Open DIM, click into the search bar, and paste the text using `Ctrl + V` (or `Cmd + V`).

> **Important Note on Language:**
> For the search to work in DIM, the language set on light.gg must match the language in your DIM. If your DIM is set to English, you must also use the English version of light.gg so the exact perk names match up.

## 🛠️ Technical Details

- **Manifest V3:** Complies with current security and architecture standards for browser extensions.
- **MutationObserver API:** Dynamically monitors the DOM to ensure the button is inserted correctly even with asynchronously loaded content (Vue.js).
- **Clipboard API:** Secure and modern copying of strings to the user's clipboard.

## ⚠️ Disclaimer

This project is an unofficial fan extension and is not officially affiliated with Bungie, light.gg, or the Destiny Item Manager (DIM). Destiny 2 and all related trademarks are the property of Bungie.
