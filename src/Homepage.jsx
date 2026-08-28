import { useEffect, useState } from "react";

// ─── Palette: parchment + girih turquoise ───
// Committed color strategy — one saturated field (teal, drawn from historic
// Persian tilework glaze) carries the hero and footer; the resume body reads
// on plain warm paper. Brass is decorative-only (line-work/fills) — it fails
// text contrast against both paper and teal, so it never carries copy.
const C = {
  paper: "#F4EDDC",
  paperDeep: "#E8DEC4",
  paperMuted: "#CFE6E1", // muted-but-AA text on teal (footer fine print)
  ink: "#241C14",
  inkRGB: "36,28,20",
  inkSoft: "#55665D", // teal-tinted secondary text, never gray
  teal: "#0E6B68",
  tealRGB: "14,107,104",
  tealSoft: "#DCEEEC",
  brass: "#B08A3E", // decorative only — never text
  gilt: "#F0DDAF", // accent text on teal
};

// ─── Images — served from /public ───
// PUBLIC_URL keeps these correct wherever the site is mounted: "" in dev,
// "." on GitHub Pages under /homepage/. Absolute "/x.jpg" paths 404 on a subpath.
const BASE = process.env.PUBLIC_URL || "";
const IMG = {
  profile: `${BASE}/profile-picture.jpg`,
  sharif: `${BASE}/sharif.svg`,
  sampad: `${BASE}/sampad.svg`,
  weblite: `${BASE}/weblite.svg`,
  sahab: `${BASE}/sahab.jpeg`,
  hardwar: `${BASE}/hardwar2.jpg`,
  gamein: `${BASE}/gamein.jpeg`,
  datadays: `${BASE}/datadays.jpeg`,
  loc: `${BASE}/loc.jpeg`,
  wss: `${BASE}/wss.jpg`,
  aic: `${BASE}/aic.jpg`,
};


// ─── Content — English and Persian side by side ───
const DICT = {
  en: {
    dir: "ltr",
    nav: { education: "Education", work: "Work", contact: "Contact" },
    greeting: "Hello —",
    name: "Mohammad Hossein",
    lastName: "Dolatabadi",
    tagline:
      "Backend developer at Sahab · Computer engineering at Sharif University of Technology. I build for the web — back to front.",
    explore: "Explore",
    skillsTitle: "Interests & skills",
    contactTitle: "Want to build something?",
    contactAccent: "Say hello.",
    copyright: "© Mohammad Hossein Dolatabadi — mhdolatabadi.ir",
    toggle: "فارسی",
    sections: [
      {
        id: "education",
        title: "Education",
        cards: [
          {
            title: "Sharif University of Technology",
            duration: "2019 — now",
            desc: "Bachelor's in computer engineering at Sharif University of Technology.",
            link: "https://en.sharif.edu/",
            picture: IMG.sharif,
          },
          {
            title: "Shahid Babaee Highschool",
            duration: "2016 — 2019",
            desc: "Studied Math and Physics at Shahid Babaee highschool (Sampad), Qazvin province.",
            link: "https://en.wikipedia.org/wiki/Shahid_Babaee_High_School_(Qazvin_Sampad)",
            picture: IMG.sampad,
          },
        ],
      },
      {
        id: "work",
        title: "Work experience",
        cards: [
          {
            title: "Sahab",
            duration: "2023 — now",
            desc: "Part-time backend developer. Sahab provides data-oriented solutions for organizations — creating transformation wherever there is data and the desire to use it.",
            link: "https://sahab.ir",
            picture: IMG.sahab,
          },
          {
            title: "Weblite",
            duration: "2020 — 2023",
            desc: "Part-time full-stack developer. Weblite is a platform providing educational tools for students, where you can easily publish your web app using its kind API.",
            link: "https://weblite.me",
            picture: IMG.weblite,
          },
        ],
      },
      {
        id: "student-works",
        title: "Student works",
        cards: [
          {
            title: "Hardwar",
            duration: "2023",
            desc: "Front-end developer of the event website — a hardware-knowledge event for bachelor students.",
            picture: IMG.hardwar,
          },
          {
            title: "Gamein",
            duration: "2022",
            desc: "Front-end developer of the game client — Iran's first industrial-engineering challenge, held annually by Sharif students.",
            picture: IMG.gamein,
          },
          {
            title: "Data Days",
            duration: "2022",
            desc: "Front-end developer of the website — the CE department's first data science competition.",
            picture: IMG.datadays,
          },
          {
            title: "League of Coders",
            duration: "2022",
            desc: "The only front-end developer of the website — an event on Java, hardware, blockchain, and ML for CS/CE students.",
            link: "https://locsharif.com",
            picture: IMG.loc,
          },
          {
            title: "Winter Seminar Series",
            duration: "2022",
            desc: "Front-end developer of the 7th WSS website — scientific seminars gathering successful Iranians in computer science worldwide.",
            link: "https://wss.ce.sharif.edu/",
            picture: IMG.wss,
          },
          {
            title: "AI Challenge",
            duration: "2021",
            desc: "Member of the graphic team at AIChallenge 2021 — Sharif's programming competition for AI enthusiasts.",
            picture: IMG.aic,
          },
        ],
      },
    ],
    skills: [
      {
        title: "Technical skills",
        desc: "Experienced in web development, both back-end and front-end — with JavaScript frameworks like Vue.js, React.js, Node.js and Nest.js. Familiar with clean code, OOP, functional programming and design patterns.",
      },
      {
        title: "Programming",
        desc: "Time flies when I'm programming — few other activities feel the same, and sometimes I code just for fun. I've written C, Java and Python along the way.",
      },
      {
        title: "Linux",
        desc: "“A computer is like air conditioning, it becomes useless if you open Windows.” — working with Linux since 2020: resource-friendly, safe, and programming in it is simply fun.",
      },
    ],
  },

  fa: {
    dir: "rtl",
    nav: { education: "تحصیلات", work: "سوابق کاری", contact: "تماس" },
    greeting: "سلام —",
    name: "محمدحسین",
    lastName: "دولت‌آبادی",
    tagline:
      "توسعه‌دهنده‌ی بک‌اند در سحاب · مهندسی کامپیوتر دانشگاه صنعتی شریف. برای وب می‌سازم — از بک‌اند تا فرانت.",
    explore: "بیشتر ببینید",
    skillsTitle: "علاقه‌مندی‌ها و مهارت‌ها",
    contactTitle: "دنبال ساختن چیزی هستید؟",
    contactAccent: "سلام کنید.",
    copyright: "© محمدحسین دولت‌آبادی — mhdolatabadi.ir",
    toggle: "English",
    sections: [
      {
        id: "education",
        title: "تحصیلات",
        cards: [
          {
            title: "دانشگاه صنعتی شریف",
            duration: "۱۳۹۸ — اکنون",
            desc: "کارشناسی مهندسی کامپیوتر در دانشگاه صنعتی شریف.",
            link: "https://en.sharif.edu/",
            picture: IMG.sharif,
          },
          {
            title: "دبیرستان شهید بابایی",
            duration: "۱۳۹۵ — ۱۳۹۸",
            desc: "رشته‌ی ریاضی و فیزیک در دبیرستان شهید بابایی (سمپاد)، استان قزوین.",
            link: "https://en.wikipedia.org/wiki/Shahid_Babaee_High_School_(Qazvin_Sampad)",
            picture: IMG.sampad,
          },
        ],
      },
      {
        id: "work",
        title: "سوابق کاری",
        cards: [
          {
            title: "سحاب",
            duration: "۱۴۰۲ — اکنون",
            desc: "توسعه‌دهنده‌ی پاره‌وقت بک‌اند. سحاب با تکیه بر تخصص داده‌محور، راهکارهایی برای نیازهای داده‌ای سازمان‌ها فراهم می‌کند — هرجا داده هست و اشتیاق به استفاده از آن.",
            link: "https://sahab.ir",
            picture: IMG.sahab,
          },
          {
            title: "وب‌لایت",
            duration: "۱۳۹۹ — ۱۴۰۲",
            desc: "توسعه‌دهنده‌ی پاره‌وقت فول‌استک. وب‌لایت پلتفرمی است که ابزارهای آموزشی برای دانش‌آموزان فراهم می‌کند و می‌توانید وب‌اپ خود را با API ساده‌اش منتشر کنید.",
            link: "https://weblite.me",
            picture: IMG.weblite,
          },
        ],
      },
      {
        id: "student-works",
        title: "کارهای دانشجویی",
        cards: [
          {
            title: "هاروار",
            duration: "۱۴۰۲",
            desc: "توسعه‌دهنده‌ی فرانت‌اند وب‌سایت رویداد — رویدادی کوچک بر پایه‌ی دانش سخت‌افزار برای دانشجویان کارشناسی.",
            picture: IMG.hardwar,
          },
          {
            title: "گیمین",
            duration: "۱۴۰۱",
            desc: "توسعه‌دهنده‌ی فرانت‌اند کلاینت بازی — نخستین چالش مهندسی صنایع ایران که سالانه توسط دانشجویان شریف برگزار می‌شود.",
            picture: IMG.gamein,
          },
          {
            title: "دیتا دیز",
            duration: "۱۴۰۱",
            desc: "توسعه‌دهنده‌ی فرانت‌اند وب‌سایت — نخستین مسابقه‌ی علم داده‌ی دانشکده‌ی مهندسی کامپیوتر.",
            picture: IMG.datadays,
          },
          {
            title: "لیگ برنامه‌نویسان",
            duration: "۱۴۰۱",
            desc: "تنها توسعه‌دهنده‌ی فرانت‌اند وب‌سایت — رویدادی برای آشنایی با جاوا، سخت‌افزار، بلاک‌چین و یادگیری ماشین.",
            link: "https://locsharif.com",
            picture: IMG.loc,
          },
          {
            title: "سمینارهای زمستانی",
            duration: "۱۴۰۱",
            desc: "توسعه‌دهنده‌ی فرانت‌اند وب‌سایت هفتمین WSS — سمینارهای علمی با حضور ایرانیان موفق حوزه‌ی علوم کامپیوتر از سراسر دنیا.",
            link: "https://wss.ce.sharif.edu/",
            picture: IMG.wss,
          },
          {
            title: "مسابقه‌ی هوش مصنوعی",
            duration: "۱۴۰۰",
            desc: "عضو تیم گرافیک در AIChallenge 2021 — مسابقه‌ی برنامه‌نویسی شریف برای علاقه‌مندان هوش مصنوعی.",
            picture: IMG.aic,
          },
        ],
      },
    ],
    skills: [
      {
        title: "مهارت‌های فنی",
        desc: "باتجربه در توسعه‌ی وب، هم بک‌اند و هم فرانت‌اند — با فریم‌ورک‌های جاوااسکریپت مثل Vue.js، React.js، Node.js و Nest.js. آشنا با کد تمیز، برنامه‌نویسی شیءگرا و تابعی، و الگوهای طراحی.",
      },
      {
        title: "برنامه‌نویسی",
        desc: "وقت که برنامه‌نویسی می‌کنم زود می‌گذرد — کمتر کاری چنین حسی دارد، و گاهی فقط برای تفریح کد می‌زنم. در این مسیر با C، جاوا و پایتون هم کد نوشته‌ام.",
      },
      {
        title: "لینوکس",
        desc: "«کامپیوتر مثل کولر است؛ اگر پنجره را باز کنی بی‌فایده می‌شود.» — از ۱۳۹۹ با لینوکس کار می‌کنم: کم‌مصرف، امن، و برنامه‌نویسی در آن واقعاً لذت‌بخش است.",
      },
    ],
  },
};

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/mhdolatabadi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mhdolatabadi" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/12337783/mohammadhossein-dolatabadi" },
  { label: "Twitter", href: "https://twitter.com/mhdolatabadi" },
  { label: "Telegram", href: "https://telegram.me/mhdolatabadi" },
  { label: "Instagram", href: "https://instagram.com/mhdolatabadi" },
];

const EMAIL = "m.h.dolatabadi.a@gmail.com";

// Twelve-point rosette ring — the girih tile (a simple lozenge, one of the
// five canonical tile shapes in Persian strapwork tessellation) repeated
// with rotational symmetry around the portrait.
function ringTiles(n, radius, offsetDeg = 0) {
  return Array.from({ length: n }, (_, i) => {
    const deg = -90 + offsetDeg + (360 / n) * i;
    const rad = (deg * Math.PI) / 180;
    return { x: 250 + Math.cos(rad) * radius, y: 250 + Math.sin(rad) * radius, deg };
  });
}

const OUTER_TILES = ringTiles(12, 196);
const INNER_TILES = ringTiles(12, 158, 15);

// An n-point star polygon — the second canonical girih building block,
// alternating outer points and concave inner vertices. Used for the frieze
// border and the section-heading bullets.
function starPoints(spikes, outerR, innerR, cx = 0, cy = 0) {
  const pts = [];
  const step = Math.PI / spikes;
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR;
    const a = i * step - Math.PI / 2;
    pts.push(`${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`);
  }
  return pts.join(" ");
}
const STAR8 = starPoints(8, 7, 3); // small section-heading bullet

export default function Homepage() {
  const [lang, setLang] = useState("en"); // English by default
  const t = DICT[lang];
  const rtl = t.dir === "rtl";

  // Keep the document's language/direction in sync so screen readers use
  // the right pronunciation rules for whichever language is showing.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang, t.dir]);

  // Scroll-triggered reveals — re-run when language changes
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [lang]);

  const pad = "clamp(20px, 6vw, 72px)";
  const bodyFont = rtl ? "'Vazirmatn', system-ui, sans-serif" : "'Inter', system-ui, sans-serif";
  const displayFont = rtl ? "'Vazirmatn', sans-serif" : "'Unbounded', sans-serif";

  return (
    <div dir={t.dir} style={{ background: C.paper, color: C.ink, minHeight: "100vh", fontFamily: bodyFont, overflowX: "hidden" }}>
      {/*
        DIRECTION CONTRACT
        THESIS: A bilingual engineer's credentials, read through Persian architectural
        geometry — girih tessellation as load-bearing structure, not surface decoration.
        OWN-WORLD: Warm parchment ground; one committed deep-turquoise field (historic
        tilework glaze) framing hero and footer; brass strapwork hairlines (decorative
        only — reserved from text, which never clears contrast on brass); Unbounded
        display, Vazirmatn Persian, Inter body.
        STORY: A peer developer opens the link and reads real, dated, verifiable
        credentials, framed by a genuinely Persian craft tradition, equally fluent in
        English and Persian — not a translated afterthought.
        FIRST VIEWPORT: Nav on the teal field. Centered hero below it — portrait set
        inside a two-ring, twelve-point girih rosette (~280px), name in large Unbounded
        display beneath, tagline, one explore cue. Centered composition needs no
        mirroring under RTL.
        FORM: Girih / Geometric Portrait — chosen by the user from three candidate
        directions plus the standing conventional exit; substituted in-thread for the
        roll API / decision-page / named subagents this environment does not register.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the
        finish review, the verdict, DESIGN.md, and every shipping raster carrying its
        provenance.
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;500;700&family=Inter:wght@400;500&family=Vazirmatn:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${C.paper}; }
        ::selection { background: ${C.teal}; color: ${C.paper}; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: ${C.paper}; }
        ::-webkit-scrollbar-thumb { background: ${C.brass}; border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.teal}; }

        .reveal { opacity: 0; transform: translateY(20px); transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1); }
        .reveal.in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) { .reveal { transition: none; opacity: 1; transform: none; } }

        .on-teal a:focus-visible, .on-teal button:focus-visible { outline: 2px solid ${C.gilt}; outline-offset: 3px; border-radius: 4px; }
        a:focus-visible, button:focus-visible { outline: 2px solid ${C.teal}; outline-offset: 3px; border-radius: 4px; }

        .navlink { display: inline-block; color: ${C.paper}; text-decoration: none; font-size: 13px; letter-spacing: .1em; padding: 15px 4px; margin: -15px -4px; transition: color .3s; }
        .navlink:hover, .navlink:focus-visible { color: ${C.gilt}; }
        .langbtn {
          background: transparent; color: ${C.gilt}; cursor: pointer;
          border: 1px solid rgba(244,237,220,.4); border-radius: 999px; padding: 6px 16px;
          font-size: 12.5px; letter-spacing: .06em; transition: border-color .3s, background .3s;
        }
        .langbtn:hover { border-color: ${C.gilt}; background: rgba(244,237,220,.1); }
        .scrollcue { animation: cue 2.4s ease-in-out infinite; display: inline-block; }
        @keyframes cue { 0%,100% { transform: translateY(0); opacity:.9 } 50% { transform: translateY(6px); opacity:.5 } }
        @media (prefers-reduced-motion: reduce) { .scrollcue { animation: none; } }

        /* the one signature moment: the rosette's tiles assemble around an
           already-visible portrait, like tesserae being set */
        .tile { transform-box: fill-box; transform-origin: center; animation: assemble .8s cubic-bezier(.16,1,.3,1) both; }
        @keyframes assemble { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .medallion-fade { animation: medFade 1s cubic-bezier(.16,1,.3,1) both; }
        @keyframes medFade { from { opacity: 0; transform: scale(.92); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) { .tile, .medallion-fade { animation: none; } }

        .seam { display: inline-block; width: 9px; height: 9px; background: ${C.brass}; transform: rotate(45deg); flex-shrink: 0; transition: background .3s, transform .3s; }
        .ledger-link { display: block; text-decoration: none; color: inherit; padding: 22px 6px; border-top: 1px solid rgba(176,138,62,.35); transition: background .3s; }
        ol.ledger > li:last-child .ledger-link { border-bottom: 1px solid rgba(176,138,62,.35); }
        .ledger-link:hover, .ledger-link:focus-visible { background: ${C.paperDeep}; }
        .ledger-link:hover .seam, .ledger-link:focus-visible .seam { background: ${C.teal}; transform: rotate(90deg) scale(1.3); }
        .ledger-link:hover .ledger-title, .ledger-link:focus-visible .ledger-title { color: ${C.teal}; }
        .ledger-head { display: flex; align-items: center; gap: 12px; }
        .ledger-title { font-family: ${displayFont}; font-size: 17px; font-weight: 500; transition: color .3s; flex: 1; min-width: 0; }
        .ledger-duration { color: ${C.teal}; font-size: 12.5px; letter-spacing: .04em; white-space: nowrap; }
        .ledger-logo { width: 34px; height: 34px; border-radius: 8px; object-fit: cover; background: #fff; padding: 3px; flex-shrink: 0; }
        .ledger-desc { color: ${C.inkSoft}; font-size: 14.5px; line-height: ${rtl ? 1.9 : 1.7}; margin-top: 10px; max-width: 68ch; }
      `}</style>

      {/* ── Hero + nav: the one committed teal field ── */}
      <div className="on-teal" style={{ background: C.teal, position: "relative" }}>
        {/* full-field girih texture — very low opacity, structural not decorative */}
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}>
          <defs>
            <pattern id="fieldHero" width="130" height="130" patternUnits="userSpaceOnUse">
              <polygon points={starPoints(8, 30, 13, 65, 65)} fill="none" stroke={C.paper} strokeOpacity="0.07" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fieldHero)" />
        </svg>
        <nav style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: `28px ${pad}`, flexWrap: "wrap" }}>
          <span style={{ fontFamily: displayFont, color: C.gilt, fontSize: 17, fontWeight: 700, letterSpacing: ".04em" }}>MH</span>
          <div style={{ display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap" }}>
            <a className="navlink" href="#education">{t.nav.education}</a>
            <a className="navlink" href="#work">{t.nav.work}</a>
            <a className="navlink" href="#contact">{t.nav.contact}</a>
            <button
              className="langbtn"
              onClick={() => setLang(lang === "en" ? "fa" : "en")}
              aria-label={lang === "en" ? "Switch to Persian" : "Switch to English"}
              style={{ fontFamily: lang === "en" ? "'Vazirmatn', sans-serif" : "'Inter', sans-serif" }}
            >
              {t.toggle}
            </button>
          </div>
        </nav>

        <header style={{ padding: `48px ${pad} 96px`, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          {/* the medallion — a photo set inside a two-ring girih rosette */}
          <div
            className="medallion-fade"
            style={{ width: "clamp(230px, 40vw, 340px)", aspectRatio: "1 / 1", filter: `drop-shadow(0 10px 28px rgba(${C.inkRGB},.28))` }}
          >
            <svg viewBox="0 0 500 500" style={{ width: "100%", height: "100%" }} role="img" aria-label={`${t.name} ${t.lastName}`}>
              <defs>
                <clipPath id="photoClip">
                  <circle cx="250" cy="250" r="133" />
                </clipPath>
              </defs>

              <circle r="215" cx="250" cy="250" fill="none" stroke={C.paper} strokeOpacity="0.16" strokeWidth="1" />
              <circle r="196" cx="250" cy="250" fill="none" stroke={C.paper} strokeOpacity="0.32" strokeWidth="1" />
              {OUTER_TILES.map((p, i) => (
                <g key={`o${i}`} transform={`translate(${p.x} ${p.y}) rotate(${p.deg})`}>
                  <polygon className="tile" points="0,-13 7,0 0,13 -7,0" fill={C.paper} stroke={C.brass} strokeWidth="1.5" style={{ animationDelay: `${i * 40}ms` }} />
                </g>
              ))}
              {INNER_TILES.map((p, i) => (
                <g key={`i${i}`} transform={`translate(${p.x} ${p.y}) rotate(${p.deg})`}>
                  <polygon className="tile" points="0,-9 5,0 0,9 -5,0" fill={C.brass} stroke={C.paper} strokeWidth="1" style={{ animationDelay: `${380 + i * 40}ms` }} />
                </g>
              ))}

              <circle r="147.5" cx="250" cy="250" fill="none" stroke={C.paper} strokeOpacity="0.7" strokeWidth="1" className="tile" style={{ animationDelay: "0ms" }} />
              <circle r="140" cx="250" cy="250" fill="none" stroke={C.brass} strokeWidth="15" className="tile" style={{ animationDelay: "0ms" }} />
              <circle r="132.5" cx="250" cy="250" fill="none" stroke={C.paper} strokeOpacity="0.7" strokeWidth="1" className="tile" style={{ animationDelay: "0ms" }} />

              <image href={IMG.profile} x="117" y="117" width="266" height="266" preserveAspectRatio="xMidYMid slice" clipPath="url(#photoClip)" />
            </svg>
          </div>

          <p style={{ color: C.gilt, fontSize: 17, marginTop: 30 }}>{t.greeting}</p>
          <h1 style={{ fontFamily: displayFont, color: C.paper, fontSize: "clamp(2.1rem, 6.5vw, 4.8rem)", fontWeight: 700, lineHeight: 1.1, marginTop: 14 }}>
            {t.name}
            <br />
            <span style={{ color: C.gilt }}>{t.lastName}</span>
          </h1>
          <p style={{ color: C.paperMuted, fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: 580, marginTop: 22, lineHeight: 1.8 }}>
            {t.tagline}
          </p>
          <a href="#education" style={{ marginTop: 40, color: C.gilt, textDecoration: "none", fontSize: 14, letterSpacing: ".12em" }}>
            {t.explore} <span className="scrollcue">↓</span>
          </a>
        </header>

        {/* frieze border — a strapwork band of 8-point stars, the classic
            Islamic architectural device for framing a panel's inner edge */}
        <svg aria-hidden="true" style={{ width: "100%", height: 34, display: "block" }}>
          <defs>
            <pattern id="friezeHero" width="70" height="34" patternUnits="userSpaceOnUse">
              <line x1="0" y1="17" x2="22" y2="17" stroke={C.brass} strokeOpacity="0.5" strokeWidth="1" />
              <polygon points={starPoints(8, 12, 5, 35, 17)} fill="none" stroke={C.paper} strokeOpacity="0.55" strokeWidth="1.2" />
              <line x1="48" y1="17" x2="70" y2="17" stroke={C.brass} strokeOpacity="0.5" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="34" fill="url(#friezeHero)" />
        </svg>
      </div>

      {/* ── Resume: plain paper, teal + brass carry the structure ── */}
      <main style={{ padding: `0 ${pad}` }}>
        {t.sections.map((section) => (
          <section key={section.id} id={section.id} style={{ padding: "72px 0 8px" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="-8 -8 16 16" style={{ flexShrink: 0 }}>
                <polygon points={STAR8} fill={C.teal} />
              </svg>
              <h2 style={{ fontFamily: displayFont, fontSize: 15, letterSpacing: rtl ? "0" : ".2em", textTransform: rtl ? "none" : "uppercase", color: C.teal, whiteSpace: "nowrap" }}>{section.title}</h2>
              <span style={{ flex: 1, height: 1, background: "rgba(176,138,62,.35)" }} />
            </div>
            <ol className="ledger" style={{ listStyle: "none" }}>
              {section.cards.map((card, i) => {
                const Tag = card.link ? "a" : "div";
                return (
                  <li key={card.title} className="reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                    <Tag
                      className="ledger-link"
                      {...(card.link ? { href: card.link, target: "_blank", rel: "noreferrer" } : {})}
                    >
                      <div className="ledger-head">
                        <span className="seam" aria-hidden="true" />
                        {card.picture && <img src={card.picture} alt="" loading="lazy" className="ledger-logo" />}
                        <h3 className="ledger-title">{card.title}</h3>
                        <span className="ledger-duration">{card.duration}</span>
                      </div>
                      <p className="ledger-desc">{card.desc}</p>
                    </Tag>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}

        {/* Skills */}
        <section id="skills" style={{ padding: "72px 0 40px" }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 44 }}>
            <svg aria-hidden="true" width="16" height="16" viewBox="-8 -8 16 16" style={{ flexShrink: 0 }}>
              <polygon points={STAR8} fill={C.teal} />
            </svg>
            <h2 style={{ fontFamily: displayFont, fontSize: 15, letterSpacing: rtl ? "0" : ".2em", textTransform: rtl ? "none" : "uppercase", color: C.teal, whiteSpace: "nowrap" }}>{t.skillsTitle}</h2>
            <span style={{ flex: 1, height: 1, background: "rgba(176,138,62,.35)" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            {t.skills.map((s, i) => (
              <div key={s.title} className="reveal" style={{ borderTop: `2px solid ${C.brass}`, paddingTop: 20, transitionDelay: `${i * 80}ms` }}>
                <h3 style={{ fontFamily: displayFont, fontSize: 16.5, fontWeight: 500, marginBottom: 12, color: C.ink }}>{s.title}</h3>
                <p style={{ color: C.inkSoft, fontSize: 14.5, lineHeight: rtl ? 1.95 : 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Contact: the teal field returns, closing the frame ── */}
      <footer id="contact" className="on-teal" style={{ background: C.teal, padding: `0 ${pad} 56px`, marginTop: 40, position: "relative" }}>
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none" }}>
          <defs>
            <pattern id="fieldFooter" width="130" height="130" patternUnits="userSpaceOnUse">
              <polygon points={starPoints(8, 30, 13, 65, 65)} fill="none" stroke={C.paper} strokeOpacity="0.07" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fieldFooter)" />
        </svg>

        <svg aria-hidden="true" style={{ width: "100%", height: 34, display: "block", marginBottom: 50 }}>
          <defs>
            <pattern id="friezeFooter" width="70" height="34" patternUnits="userSpaceOnUse">
              <line x1="0" y1="17" x2="22" y2="17" stroke={C.brass} strokeOpacity="0.5" strokeWidth="1" />
              <polygon points={starPoints(8, 12, 5, 35, 17)} fill="none" stroke={C.paper} strokeOpacity="0.55" strokeWidth="1.2" />
              <line x1="48" y1="17" x2="70" y2="17" stroke={C.brass} strokeOpacity="0.5" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="34" fill="url(#friezeFooter)" />
        </svg>

        <h2 className="reveal" style={{ fontFamily: displayFont, color: C.paper, fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 500, maxWidth: 680, lineHeight: 1.35 }}>
          {t.contactTitle} <span style={{ color: C.gilt }}>{t.contactAccent}</span>
        </h2>
        <a className="reveal" href={`mailto:${EMAIL}`} dir="ltr" style={{ display: "inline-block", marginTop: 12, marginLeft: -4, marginRight: -4, color: C.gilt, textDecoration: "none", fontSize: 16, borderBottom: "1px solid rgba(244,237,220,.35)", padding: "14px 4px", transitionDelay: "100ms" }}>
          {EMAIL}
        </a>
        <div className="reveal" style={{ display: "flex", gap: 24, marginTop: 34, flexWrap: "wrap", transitionDelay: "180ms" }}>
          {SOCIALS.map((s) => (
            <a key={s.label} className="navlink" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
        <p style={{ color: C.paperMuted, fontSize: 13, marginTop: 56 }}>{t.copyright}</p>
      </footer>
    </div>
  );
}
