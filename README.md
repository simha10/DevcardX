# DevCardX

A lightweight, zero-dependency **developer profile popup widget** that can be embedded into **any website or MERN project** with a single script tag.

DevCardX displays a premium neon-accent developer card inspired by modern SaaS design, featuring:

* Your avatar
* Name & title
* Social icons
* “What I can help you with”
* “Why work with me”
* A clean call-to-action button

Perfect for portfolios, personal projects, client apps, or showcasing your identity inside any web application.

---

## 🚀 Features

* 🎨 **Neon Cyan Accent Theme** (RGB 77, 240, 255)
* ⚡ **Medium glow aesthetics** for premium feel
* 🟦 Inline SVG icons for perfect recoloring + hover effects
* 🖼 Supports custom avatar
* 🧩 Drop-in widget — no React, no npm, no imports
* 🧱 Works with **any framework** (React, MERN, Next.js, Vanilla HTML)
* 💼 Client-friendly sections (services + credibility)
* 🛠 Fully customizable inside a single JS file
* 📱 Fully responsive on all screen sizes
* 🧊 Modern typography with **Inter** font
* ♿ Accessible (ESC to close, overlay click, tab trap)

---

## 📂 Installation

DevCardX requires **only two files**:

```
public/
   devcardx.js
   avatar.png   ← your profile photo
```

### Step 1 — Add the Script

Place `devcardx.js` into the **public** folder of your project.

### Step 2 — Add Your Avatar

Add `avatar.png` (recommended 400–600px square).

### Step 3 — Load the Widget

Add this script tag **before `</body>`** in your HTML:

```html
<script src="/devcardx.js"></script>
```

That’s it.
Reload your site → you will see the **“About Dev”** floating button.

---

## 🎯 Usage

DevCardX automatically:

* Injects a floating button
* Opens the modal on click
* Closes when:

  * Clicking the close icon
  * Clicking outside the card
  * Pressing **ESC**

### Keyboard Shortcut

You can also open it manually with:
**Ctrl + M** (Windows)
**Cmd + M** (Mac)

---

## 🧩 Customization

All customization is in the **configuration block** at the top of `devcardx.js`.

### Developer Identity

You can change:

* Avatar path
* Name
* Title
* Email
* CTA text
* Accent color

Example:

```
const AVATAR_PATH = "/avatar.png";
const NAME = "Simha";
const TITLE = "Full Stack Web Developer (MERN)";
const EMAIL = "mandapudisimhachalam@gmail.com";
const CTA_TEXT = "Get in touch";
const NEON = "rgb(77, 240, 255)"; // accent color
```

---

## 🔗 Updating Social Links

Inside the script, find the socialLinks array:

```
const socialLinks = [
  { type: "github", href: "https://github.com/simha10" },
  { type: "mail", href: "mailto:mandapudisimhachalam@gmail.com" },
  { type: "whatsapp", href: "https://wa.me/918639445966?text=Hello,%20let's%20collaborate" },
  { type: "linkedin", href: "https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284/" }
];
```

Update the `href` fields with your desired URLs.

---

## 📌 Editing the Content Sections

DevCardX uses **two business-friendly sections** instead of tech stacks:

### “What I can help you with”

(Perfect for client-facing work)

```
Web Application Development  
Dashboard & Admin Panels  
API & Backend Development  
Automation & Custom Tools  
UI/UX Improvements  
Bug Fixing & Optimization
```

### “Why work with me”

(Credibility & trust)

```
Fast & Clean Delivery  
Transparent Communication  
Scalable & Secure Code  
Affordable Pricing  
Long-term Support
```

Both sections can be edited directly in the script.

---

## 🎨 Design System

DevCardX uses:

* **Inter** font (auto-loaded via Google Fonts)
* Neon cyan accent color
* Medium glow radius for icons + CTA button
* Soft radial glow behind the card
* Matte dark background
* Subtle borders & shadows
* Responsive layout with grid fallback
* Modern whitespace spacing (SaaS style)

Everything is fully contained within `devcardx.js`.

---

## 🧪 Testing

DevCardX works in:

* Static HTML
* React
* MERN
* Next.js (public folder)
* Vite
* Any hosting platform (Vercel, Netlify, Firebase, Render, etc.)

### Quick test

Open your app → click **About Dev**.

If you don’t see the widget:

1. Ensure the script is correctly referenced.
2. Ensure `avatar.png` is found.
3. Confirm the script is at the bottom of the `<body>`.

---

## 🐛 Troubleshooting

### The widget does not appear

Check the script tag path:

```
/devcardx.js
```

### Avatar not loading

Ensure avatar file name/path matches:

```
public/avatar.png
```

### Social icons not visible

Likely script loaded before DOM → ensure script tag is placed before `</body>`.

---

## 🧩 Extending DevCardX (Optional Add-Ons)

DevCardX can be extended with:

* A global config object (`window.devcardx`)
* Theme switcher
* Honeycomb pattern background (ChaiCode style)
* Circular floating button variant
* Slide-up animation
* Contact form inside modal
* Auto-open after X seconds
* Draggable DevCard
* Minified build (devcardx.min.js)

Ask anytime — I can generate any of these.

---

## 📜 License

DevCardX is intended for **personal portfolio usage**.
Modify it freely for your own projects.

---

## ❤️ Author

**Simha**
Full Stack MERN Developer
GitHub: [https://github.com/simha10](https://github.com/simha10)
LinkedIn: [https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284/](https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284/)

---
