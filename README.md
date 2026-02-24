# Nesfit Conversational Ad (300x250)

> [!NOTE]  
> ⚠️ **Disclaimer**: This project is a personal case study created for portfolio purposes. It is not an official advertisement and is not affiliated with, authorized, or endorsed by Nestle.

**Live Demo:** [https://aysealtun.github.io/nesfit-conversational-ad-300x250/](https://aysealtun.github.io/nesfit-conversational-ad-300x250/)

## Preview
![Banner Preview](images/preview.gif)

## Installation and Usage

### 1. Local Development
To run this project on your local machine:

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/aysealtun/nesfit-conversational-ad-300x250
    cd nesfit-conversational-ad-300x250
    ```
2.  **Open index.html**:
    *   Simple way: Double-click `index.html`.
    *   **Recommended**: Use a local server (e.g., VS Code **Live Server** or `npx serve .`) to avoid CORS issues.

## Project Description
An interactive conversational ad for Nesfit Bar, guiding users to discover how Nesfit helps control weight and satisfies sweet cravings through a fun questionnaire.

## Project Structure

- `index.html`: Main HTML structure with CSP-compliant click tags.
- `css/style.css`: Styling, layouts, and SVG path fill colors.
- `js/main.js`: Core logic, interaction flows, and path-based SVG animations.
- `images/`: Asset folder for backgrounds and product images.
- `fonts/`: Branding fonts (Legacy, now using Google Fonts).

## Tech Stack

- **Google Fonts**: Uses the **Ubuntu** typeface for all UI elements.
- **GSAP (GreenSock Animation Platform)**: Used for initial state management and visibility control.
- **Anime.js**: Used for the "funny" SVG arrow path morphing and width animations, as well as frame transitions.
- **Adform DHTML**: Integration for tracking and landing page redirection.

## Key Features

### 1. SVG Path Animation
The CTA button features a custom-coded SVG arrow that dynamically morphs its path and changes width using `anime.js`, providing a much more premium feel than standard static images.

### 2. CSP Compliance
The project is built with modern security standards in mind:
- **No `eval()`**: Avoids unsafe code evaluation.
- **No `javascript:` URLs**: Replaced with standard event listeners for click redirects.
- **No `document.write`**: Uses standard script loading to prevent browser warnings.

### 3. Centralized Tracking
All click trackers are managed through a `trackingConfig` object in `main.js`, mapping element IDs to their respective Adform `nestle` IDs.

```javascript
const trackingConfig = [
    { id: 'bg', nestle: 1 },
    { id: 'logo', nestle: 2 },
    // ...
];
```
