/* public/devcardx.js */
(function () {
  // ----------------------
  // Configuration
  // ----------------------
  const AVATAR_PATH = "/avatar.png"; // put your avatar at public/avatar.png or change this path
  const NAME = "Simha";
  const TITLE = "Full Stack Web Developer (MERN)";
  const EMAIL = "mandapudisimhachalam@gmail.com";
  const CTA_TEXT = "Get in touch";
  const NEON = "rgb(77, 240, 255)"; // primary accent

  // ----------------------
  // Inject Inter font
  // ----------------------
  (function addFont() {
    if (!document.getElementById("devcardx-inter")) {
      const link = document.createElement("link");
      link.id = "devcardx-inter";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap";
      document.head.appendChild(link);
    }
  })();

  // ----------------------
  // Styles
  // ----------------------
  const css = `
  :root { --devcx-cyan: ${NEON}; --devcx-bg: #0b0d10; --devcx-card: rgba(11,13,16,0.96); }
  .devcardx-btn {
    position: fixed;
    bottom: 26px;
    right: 26px;
    background: transparent;
    color: #fff;
    padding: 10px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    font-weight: 700;
    letter-spacing: 0.2px;
    z-index: 2147483646;
    border: 1px solid rgba(255,255,255,0.06);
    box-shadow: 0 6px 20px rgba(2,6,23,0.55);
    transition: transform .12s ease, box-shadow .12s ease;
    backdrop-filter: blur(6px);
  }
  .devcardx-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(2,6,23,0.7); }

  .devcardx-overlay {
    position: fixed; inset: 0;
    display: none;
    background: rgba(6,8,10,0.64);
    backdrop-filter: blur(6px);
    justify-content: center;
    align-items: center;
    z-index: 2147483645;
    padding: 20px;
  }

  .devcardx-card {
    width: 460px;
    max-width: calc(100% - 40px);
    background: var(--devcx-card);
    border-radius: 16px;
    padding: 26px;
    color: #eaf0f8;
    box-shadow: 0 18px 50px rgba(2,6,23,0.7), 0 0 60px rgba(77,240,255,0.03);
    position: relative;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    overflow: visible;
    transform-origin: center;
  }

  /* soft neon radial accent (medium glow) */
  .devcardx-card::before {
    content: "";
    position: absolute;
    right: -10%;
    top: -18%;
    width: 320px;
    height: 320px;
    background: radial-gradient(circle at 30% 30%, rgba(77,240,255,0.10), rgba(77,240,255,0.03) 35%, transparent 55%);
    filter: blur(28px) saturate(1.05);
    pointer-events: none;
    z-index: 0;
    transform: rotate(6deg);
  }

  .devcardx-close {
    position: absolute;
    right: 14px;
    top: 12px;
    color: rgba(255,255,255,0.6);
    border: none;
    background: transparent;
    font-size: 18px;
    cursor: pointer;
    z-index: 3;
  }
  .devcardx-close:hover { color: #fff; }

  .devcardx-avatar {
    width: 96px; height: 96px; border-radius: 50%;
    object-fit: cover; display: block; margin: 0 auto;
    border: 1px solid rgba(255,255,255,0.04);
    box-shadow: 0 8px 30px rgba(3,6,10,0.55);
    z-index: 2;
  }

  .devcardx-head {
    text-align: center;
    margin-top: 12px;
    z-index: 2;
  }
  .devcardx-name { font-size: 20px; font-weight: 700; color: #fff; margin: 6px 0 0 0; }
  .devcardx-title { color: #cfe6f6; font-size: 13px; margin-top: 6px; opacity: 0.9; }

  /* socials row */
  .devcardx-socials {
    display:flex; gap:14px; justify-content:center; margin-top:12px; z-index: 2;
  }
  .devcardx-social {
    width:36px; height:36px; display:inline-flex; align-items:center; justify-content:center;
    border-radius:10px; background: rgba(255,255,255,0.02);
    transition: transform .12s ease, box-shadow .12s ease;
    border: 1px solid rgba(255,255,255,0.02);
  }
  .devcardx-social svg { width:18px; height:18px; display:block; filter: drop-shadow(0 6px 18px rgba(77,240,255,0.08)); }
  .devcardx-social:hover { transform: translateY(-4px); box-shadow: 0 10px 30px rgba(77,240,255,0.12); }

  /* sections layout */
  .devcardx-section {
    margin-top: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    z-index: 2;
  }
  .devcardx-col {
    padding: 12px;
    border-radius: 10px;
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.02);
  }
  .devcardx-col h4 { margin: 0 0 8px 0; font-size: 13px; color: var(--devcx-cyan); font-weight: 600; letter-spacing: 0.2px; }
  .devcardx-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
  .devcardx-list li { display:flex; gap:12px; align-items:flex-start; color:#e6f3fb; font-size:13px; line-height:1.3; }
  .devcardx-dot { width:8px; height:8px; border-radius:50%; background: var(--devcx-cyan); box-shadow: 0 6px 20px rgba(77,240,255,0.12); margin-top:6px; flex:0 0 auto; }

  .devcardx-about { color:#d7eefe; font-size:13px; margin-top:14px; line-height:1.45; z-index:2; }

  /* CTA: border-only neon with hover glow */
  .devcardx-cta {
    display:inline-block; margin-top:16px; padding:10px 14px; border-radius:10px;
    text-decoration:none; color:#fff; font-weight:700; font-size:14px;
    border: 1.6px solid rgba(77,240,255,0.55);
    background: transparent;
    transition: box-shadow .18s ease, transform .12s ease, border-color .12s ease;
    box-shadow: 0 6px 18px rgba(77,240,255,0.03);
  }
  .devcardx-cta:hover {
    transform: translateY(-4px);
    border-color: var(--devcx-cyan);
    box-shadow: 0 18px 50px rgba(77,240,255,0.18), 0 6px 20px rgba(77,240,255,0.08);
  }

  /* small responsive */
  @media (max-width:520px) {
    .devcardx-card { width: 96%; padding:18px; border-radius: 12px; }
    .devcardx-section { grid-template-columns: 1fr; gap: 10px; }
    .devcardx-btn { right: 14px; bottom: 14px; padding: 8px 10px; }
  }
  `;
  const style = document.createElement("style");
  style.id = "devcardx-style";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  // ----------------------
  // Build DOM
  // ----------------------
  // button
  const btn = document.createElement("button");
  btn.className = "devcardx-btn";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "devcardx-dialog");
  btn.innerText = "About Dev";
  document.body.appendChild(btn);

  // overlay
  const overlay = document.createElement("div");
  overlay.className = "devcardx-overlay";
  overlay.id = "devcardx-overlay";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-hidden", "true");

  // card
  const card = document.createElement("div");
  card.className = "devcardx-card";
  card.id = "devcardx-dialog";
  card.setAttribute("role", "document");

  // close
  const closeBtn = document.createElement("button");
  closeBtn.className = "devcardx-close";
  closeBtn.setAttribute("aria-label", "Close");
  closeBtn.innerHTML = "✕";

  // avatar + head
  const avatar = document.createElement("img");
  avatar.className = "devcardx-avatar";
  avatar.src = AVATAR_PATH;
  avatar.alt = NAME + " avatar";

  const head = document.createElement("div");
  head.className = "devcardx-head";
  const nameEl = document.createElement("div");
  nameEl.className = "devcardx-name";
  nameEl.textContent = NAME;
  const titleEl = document.createElement("div");
  titleEl.className = "devcardx-title";
  titleEl.textContent = TITLE;

  // socials (inline SVG icons, cyan color)
  function svgIcon(type) {
    const C = "var(--devcx-cyan)";
    switch (type) {
      case "github":
        return `<svg viewBox="0 0 24 24" fill="${C}" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 3 8.5 7.2 9.9.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.3-3.5-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.3.9 2 1.2.5.1 1-.1 1-.1.6-1 1.6-1.3 2.3-1.3.1-.9.4-1.6.7-2-2.3-.3-4.8-1.2-4.8-5.3 0-1.2.4-2.2 1-3-.1-.3-.4-1.4.1-2.9 0 0 .9-.3 3 .8.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-1.1 3-.8 3-.8.5 1.5.2 2.6.1 2.9.6.8 1 1.8 1 3 0 4.1-2.5 5-4.8 5.3.4.3.8 1 .8 2v3c0 .3.2.6.8.5 4.2-1.4 7.2-5.3 7.2-9.9C23.1 5.3 18.3.5 12 .5z"/></svg>`;
      case "mail":
        return `<svg viewBox="0 0 24 24" fill="${C}" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>`;
      case "whatsapp":
        return `<svg viewBox="0 0 24 24" fill="${C}" xmlns="http://www.w3.org/2000/svg"><path d="M20.5 3.5A11.92 11.92 0 0012 0C5.372 0 0 5.372 0 12c0 2.115.553 4.168 1.6 6L0 24l5.9-1.55A11.916 11.916 0 0012 24c6.628 0 12-5.372 12-12 0-3.2-1.24-6.08-3.5-8.5zM12 21.75c-1.28 0-2.52-.28-3.66-.82l-.26-.12-3.5.92.93-3.41-.14-.28A9.726 9.726 0 012.25 12 9.75 9.75 0 1112 21.75zM17.2 14.9c-.3-.15-1.76-.85-2.03-.95-.27-.1-.46-.15-.65.15-.18.3-.7.95-.86 1.14-.16.18-.32.2-.6.06-.28-.15-1.17-.43-2.23-1.38-.82-.73-1.37-1.63-1.53-1.9-.16-.27-.02-.42.12-.57.12-.12.27-.32.4-.48.13-.16.17-.27.28-.46.12-.18.06-.34-.03-.48-.1-.14-.65-1.55-.9-2.13-.24-.56-.49-.48-.66-.49-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.35-.27.28-1.03 1-1.03 2.45s1.05 2.85 1.19 3.05c.14.2 2.02 3.1 4.9 4.34 2.15 1 2.88 1.05 3.9.88.52-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.18-1.4-.06-.11-.25-.18-.55-.33z"/></svg>`;
      case "linkedin":
        return `<svg viewBox="0 0 24 24" fill="${C}" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452H16.89V14.8c0-1.35-.026-3.09-1.885-3.09-1.885 0-2.174 1.47-2.174 2.99v5.75H8.02V9.25h3.396v1.53h.048c.47-.9 1.62-1.85 3.33-1.85 3.56 0 4.22 2.34 4.22 5.38v6.14zM5.337 7.433c-1.09 0-1.976-.89-1.976-1.98 0-1.09.887-1.98 1.976-1.98 1.09 0 1.98.89 1.98 1.98 0 1.09-.89 1.98-1.98 1.98zM7.12 20.452H3.55V9.25h3.57v11.202z"/></svg>`;
      default:
        return "";
    }
  }

  const socialsWrap = document.createElement("div");
  socialsWrap.className = "devcardx-socials";
  const socialLinks = [
    { type: "github", href: "https://github.com/simha10" },
    { type: "mail", href: `mailto:${EMAIL}` },
    { type: "whatsapp", href: "https://wa.me/918639445966?text=Hello,%20let's%20collaborate" },
    { type: "linkedin", href: "https://www.linkedin.com/in/simhachalam-mandapudi-93b75b284/" }
  ];
  socialLinks.forEach(s => {
    const a = document.createElement("a");
    a.className = "devcardx-social";
    a.href = s.href;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = svgIcon(s.type);
    socialsWrap.appendChild(a);
  });

  // what i can help + why work with me
  const section = document.createElement("div");
  section.className = "devcardx-section";

  const left = document.createElement("div");
  left.className = "devcardx-col";
  left.innerHTML = `<h4>What I can help you with</h4>`;
  const leftList = document.createElement("ul");
  leftList.className = "devcardx-list";
  [
    "Web Application Development",
    "Dashboard & Admin Panels",
    "API & Backend Development",
    "Automation & Custom Tools",
    "UI/UX Improvements",
    "Bug Fixing & Optimization"
  ].forEach(text => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="devcardx-dot" aria-hidden="true"></span><span>${text}</span>`;
    leftList.appendChild(li);
  });
  left.appendChild(leftList);

  const right = document.createElement("div");
  right.className = "devcardx-col";
  right.innerHTML = `<h4>Why work with me</h4>`;
  const rightList = document.createElement("ul");
  rightList.className = "devcardx-list";
  [
    "Fast & Clean Delivery",
    "Transparent Communication",
    "Scalable & Secure Code",
    "Affordable Pricing",
    "Long-term Support"
  ].forEach(text => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="devcardx-dot" aria-hidden="true"></span><span>${text}</span>`;
    rightList.appendChild(li);
  });
  right.appendChild(rightList);

  section.appendChild(left);
  section.appendChild(right);

  // about + cta
  const about = document.createElement("p");
  about.className = "devcardx-about";
  about.textContent = "I build high-quality applications that solve real business problems — focused on clarity, reliability, and measurable impact.";

  const cta = document.createElement("a");
  cta.className = "devcardx-cta";
  cta.href = `mailto:${EMAIL}`;
  cta.textContent = CTA_TEXT;
  cta.setAttribute("role", "button");

  // assemble card
  head.appendChild(nameEl);
  head.appendChild(titleEl);

  card.appendChild(closeBtn);
  card.appendChild(avatar);
  card.appendChild(head);
  card.appendChild(socialsWrap);
  card.appendChild(section);
  card.appendChild(about);
  card.appendChild(cta);

  overlay.appendChild(card);
  document.body.appendChild(overlay);

  // ----------------------
  // Behavior: open / close / accessibility
  // ----------------------
  function openCard() {
    overlay.style.display = "flex";
    overlay.setAttribute("aria-hidden", "false");
    btn.setAttribute("aria-expanded", "true");
    // focus management
    setTimeout(() => {
      closeBtn.focus();
    }, 90);
  }
  function closeCard() {
    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
    btn.setAttribute("aria-expanded", "false");
    btn.focus();
  }

  btn.addEventListener("click", openCard);
  closeBtn.addEventListener("click", closeCard);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeCard();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.style.display === "flex") closeCard();
    // open with Ctrl+M (handy)
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "m") openCard();
  });

  // small focus-trap (basic)
  overlay.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      const focusable = overlay.querySelectorAll('a, button, [href], [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // make sure avatar image exists - graceful fallback
  avatar.onerror = function () {
    avatar.src = "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'>
        <rect width='100%' height='100%' fill='#0f1720'/>
        <g transform='translate(48,38)'>
          <circle cx='0' cy='-8' r='18' fill='#1f2937'/>
          <rect x='-20' y='18' width='40' height='20' rx='10' fill='#1f2937'/>
        </g>
      </svg>
    `);
  };

  // ensure high z-index for button if other elements exist
  setTimeout(() => {
    btn.style.zIndex = "2147483646";
    overlay.style.zIndex = "2147483645";
  }, 20);

})();
