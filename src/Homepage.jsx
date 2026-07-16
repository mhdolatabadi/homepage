import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// ─── Palette: night lapis + gold ───
const C = {
  night: "#080a14",
  lapis: "#121629",
  gold: "#d9a441",
  goldSoft: "#f0d9a8",
  ink: "#e8e6df",
  faded: "#8b8fa3",
  line: "rgba(217,164,65,0.16)",
};

// ─── Images — served from /public ───
const IMG = {
  profile: "/profile-picture.jpg",
  sharif: "/sharif.svg",
  sampad: "/sampad.svg",
  weblite: "/weblite.svg",
  sahab: "/sahab.jpeg",
  hardwar: "/hardwar2.jpg",
  gamein: "/gamein.jpeg",
  datadays: "/datadays.jpeg",
  loc: "/loc.jpeg",
  wss: "/wss.jpg",
  aic: "/aic.jpg",
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
        desc: "\u201CA computer is like air conditioning, it becomes useless if you open Windows.\u201D — working with Linux since 2020: resource-friendly, safe, and programming in it is simply fun.",
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

export default function Homepage() {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState("en"); // English by default
  const t = DICT[lang];
  const rtl = t.dir === "rtl";

  // 3D scene — GPU-shaded spiral galaxy with differential rotation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 6;

    // ── Shaders ──────────────────────────────────────────────
    // Each star carries its own radius, angle and phase; the arms are *not*
    // rotated as a rigid body — angular speed falls off with radius, the way a
    // real disc rotates, so the spiral winds up and shears as it turns.
    const vertexShader = `
      uniform float uTime;
      uniform float uSize;
      uniform float uPixelRatio;
      attribute float aScale;
      attribute float aRandom;
      attribute vec3 aColor;
      varying vec3 vColor;
      varying float vTwinkle;

      void main() {
        vec3 pos = position;

        float r = length(pos.xz);
        float angle = atan(pos.z, pos.x);
        float speed = 1.0 / (r + 0.7);            // inner stars orbit faster
        angle += uTime * speed * 0.5;
        pos.x = cos(angle) * r;
        pos.z = sin(angle) * r;

        // slow vertical swell so the disc never looks like a flat decal
        pos.y += sin(uTime * 0.35 + r * 1.6) * 0.06 * (1.0 - r / 5.0);

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aScale * uPixelRatio * (1.0 / -mv.z);

        vColor = aColor;
        vTwinkle = 0.55 + 0.45 * sin(uTime * 1.6 + aRandom * 6.283);
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vTwinkle;

      void main() {
        // soft round glow instead of a hard square point
        float d = distance(gl_PointCoord, vec2(0.5));
        float glow = 1.0 - smoothstep(0.0, 0.5, d);
        glow = pow(glow, 2.6);
        gl_FragColor = vec4(vColor, glow * vTwinkle);
      }
    `;

    // ── Star disc ────────────────────────────────────────────
    const COUNT = 16000;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const scales = new Float32Array(COUNT);
    const randoms = new Float32Array(COUNT);

    const coreColor = new THREE.Color(0xfff1cf);
    const armColor = new THREE.Color(0xd9a441);
    const edgeColor = new THREE.Color(0x3d4d99);
    const RADIUS = 4.6;
    const BRANCHES = 5;

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 1.8) * RADIUS;      // dense core, sparse rim
      const branch = ((i % BRANCHES) / BRANCHES) * Math.PI * 2;
      const spin = r * 0.85;                                 // arm curvature
      // scatter tightens toward the core, and falls off cubically for wispy arms
      const s = () => Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (0.32 + r * 0.11);
      positions[i3] = Math.cos(branch + spin) * r + s();
      positions[i3 + 1] = s() * 0.5 * (1.0 - r / RADIUS) + s() * 0.12;
      positions[i3 + 2] = Math.sin(branch + spin) * r + s();

      // core → arms → rim
      const c = coreColor.clone().lerp(armColor, Math.min(r / (RADIUS * 0.45), 1));
      c.lerp(edgeColor, Math.max(0, (r - RADIUS * 0.45) / (RADIUS * 0.55)) * 0.85);
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      // a handful of bright foreground stars among the dust
      scales[i] = Math.random() < 0.02 ? 2.4 + Math.random() * 2 : 0.5 + Math.random() * 0.9;
      randoms[i] = Math.random();
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    geo.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 1));

    const uniforms = {
      uTime: { value: 0 },
      uSize: { value: 26 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    };

    const galaxyMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const galaxy = new THREE.Points(geo, galaxyMat);
    galaxy.rotation.x = 0.62;
    scene.add(galaxy);

    // ── Nebula haze — a second, slower, much softer layer for depth ──
    const HAZE = 2200;
    const hPos = new Float32Array(HAZE * 3);
    const hCol = new Float32Array(HAZE * 3);
    const hScale = new Float32Array(HAZE);
    const hRand = new Float32Array(HAZE);
    const hazeColor = new THREE.Color(0x2e3f8f);
    for (let i = 0; i < HAZE; i++) {
      const i3 = i * 3;
      const r = Math.pow(Math.random(), 1.3) * RADIUS * 1.15;
      const a = Math.random() * Math.PI * 2;
      hPos[i3] = Math.cos(a) * r;
      hPos[i3 + 1] = (Math.random() - 0.5) * 0.5;
      hPos[i3 + 2] = Math.sin(a) * r;
      const c = hazeColor.clone().lerp(armColor, Math.max(0, 1 - r / RADIUS) * 0.4);
      hCol[i3] = c.r;
      hCol[i3 + 1] = c.g;
      hCol[i3 + 2] = c.b;
      hScale[i] = 6 + Math.random() * 10;
      hRand[i] = Math.random();
    }
    const hazeGeo = new THREE.BufferGeometry();
    hazeGeo.setAttribute("position", new THREE.BufferAttribute(hPos, 3));
    hazeGeo.setAttribute("aColor", new THREE.BufferAttribute(hCol, 3));
    hazeGeo.setAttribute("aScale", new THREE.BufferAttribute(hScale, 1));
    hazeGeo.setAttribute("aRandom", new THREE.BufferAttribute(hRand, 1));
    const hazeUniforms = {
      uTime: { value: 0 },
      uSize: { value: 26 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    };
    const haze = new THREE.Points(
      hazeGeo,
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: hazeUniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    haze.rotation.x = 0.62;
    scene.add(haze);

    // ── Galactic core — a bright pulsing heart ──
    const coreGeo = new THREE.BufferGeometry();
    coreGeo.setAttribute("position", new THREE.BufferAttribute(new Float32Array([0, 0, 0]), 3));
    const coreMat = new THREE.PointsMaterial({
      color: 0xfff3d6,
      size: 0.9,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const core = new THREE.Points(coreGeo, coreMat);
    scene.add(core);

    // ── Distant field stars, fixed behind the disc ──
    const FIELD = 700;
    const fPos = new Float32Array(FIELD * 3);
    for (let i = 0; i < FIELD * 3; i++) fPos[i] = (Math.random() - 0.5) * 30;
    const fieldGeo = new THREE.BufferGeometry();
    fieldGeo.setAttribute("position", new THREE.BufferAttribute(fPos, 3));
    const field = new THREE.Points(
      fieldGeo,
      new THREE.PointsMaterial({ color: 0x9aa0b8, size: 0.02, transparent: true, opacity: 0.5, depthWrite: false })
    );
    scene.add(field);

    // ── Interaction ──
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onPointer = (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.7;
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.7;
    };
    window.addEventListener("pointermove", onPointer);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      const pr = Math.min(window.devicePixelRatio, 2);
      renderer.setPixelRatio(pr);
      uniforms.uPixelRatio.value = pr;
      hazeUniforms.uPixelRatio.value = pr;
    };
    window.addEventListener("resize", onResize);

    let raf;
    const clock = new THREE.Clock();
    const tick = () => {
      const time = clock.getElapsedTime();
      if (!reduceMotion) {
        uniforms.uTime.value = time;
        hazeUniforms.uTime.value = time * 0.45; // haze drifts slower than the stars

        current.x += (target.x - current.x) * 0.04;
        current.y += (target.y - current.y) * 0.04;

        galaxy.rotation.y = time * 0.02 + current.x * 0.5;
        galaxy.rotation.x = 0.62 + current.y * 0.22;
        haze.rotation.copy(galaxy.rotation);

        coreMat.opacity = 0.42 + Math.sin(time * 0.9) * 0.1;
        field.rotation.y = -time * 0.005;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();
    setLoaded(true);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      hazeGeo.dispose();
      galaxyMat.dispose();
      renderer.dispose();
    };
  }, []);

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
  const shadowStrong = "0 2px 4px rgba(8,10,20,.9), 0 8px 30px rgba(8,10,20,.95)";
  const shadowSoft = "0 1px 3px rgba(8,10,20,.95), 0 4px 18px rgba(8,10,20,.8)";
  const bodyFont = rtl ? "'Vazirmatn', system-ui, sans-serif" : "'Inter', system-ui, sans-serif";
  const displayFont = rtl ? "'Vazirmatn', sans-serif" : "'Unbounded', sans-serif";

  return (
    <div dir={t.dir} style={{ background: C.night, color: C.ink, minHeight: "100vh", fontFamily: bodyFont, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;500;700&family=Inter:wght@400;500&family=Vazirmatn:wght@400;500;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: ${C.night}; }
        ::selection { background: ${C.gold}; color: ${C.night}; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: ${C.night}; }
        ::-webkit-scrollbar-thumb { background: #1e2338; border-radius: 99px; }
        ::-webkit-scrollbar-thumb:hover { background: ${C.gold}; }
        .fadeup { opacity: 0; transform: translateY(28px); animation: fadeup 1.1s cubic-bezier(.16,1,.3,1) forwards; }
        @keyframes fadeup { to { opacity: 1; transform: none; } }
        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 1s cubic-bezier(.16,1,.3,1), transform 1s cubic-bezier(.16,1,.3,1); }
        .reveal.in { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) {
          .fadeup { animation: none; opacity: 1; transform: none; }
          .reveal { transition: none; opacity: 1; transform: none; }
        }
        .card {
          transition: border-color .4s cubic-bezier(.16,1,.3,1), transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s;
          will-change: transform;
        }
        .card:hover {
          border-color: rgba(217,164,65,.55) !important;
          transform: translateY(-6px);
          box-shadow: 0 18px 50px -18px rgba(217,164,65,.28);
        }
        .navlink { color: ${C.faded}; text-decoration: none; font-size: 13px; letter-spacing: .1em; transition: color .3s; }
        nav .navlink, nav span { text-shadow: 0 1px 6px rgba(8,10,20,.9); }
        .navlink:hover, .navlink:focus-visible { color: ${C.goldSoft}; }
        a:focus-visible, button:focus-visible { outline: 2px solid ${C.gold}; outline-offset: 3px; border-radius: 4px; }
        .langbtn {
          background: transparent; color: ${C.goldSoft}; cursor: pointer;
          border: 1px solid ${C.line}; border-radius: 999px; padding: 6px 16px;
          font-size: 12.5px; letter-spacing: .06em; transition: border-color .3s, color .3s, background .3s;
        }
        .langbtn:hover { border-color: ${C.gold}; background: rgba(217,164,65,.08); }
        .scrollcue { animation: cue 2.4s ease-in-out infinite; display: inline-block; }
        @keyframes cue { 0%,100% { transform: translateY(0); opacity:.9 } 50% { transform: translateY(6px); opacity:.5 } }
        @media (prefers-reduced-motion: reduce) { .scrollcue { animation: none; } }
      `}</style>

      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, background: "radial-gradient(ellipse 60% 45% at 50% 42%, rgba(217,164,65,0.07), transparent 70%)" }} />
      <canvas ref={canvasRef} aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, opacity: loaded ? 1 : 0, transition: "opacity 1.6s ease" }} />
      {/* vignette scrim — sits above the canvas: galaxy stays bright mid-screen, edges darken where text sits */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(ellipse 70% 55% at 50% 48%, transparent 0%, rgba(8,10,20,.45) 60%, rgba(8,10,20,.88) 100%)" }} />

      {/* Nav */}
      <nav style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: `28px ${pad}`, flexWrap: "wrap" }}>
        <span style={{ fontFamily: displayFont, color: C.gold, fontSize: 17, fontWeight: 700, letterSpacing: ".04em" }}>MH</span>
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

      {/* Hero */}
      <header style={{ position: "relative", zIndex: 1, minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: `0 ${pad}` }}>
        {/* text bed — follows reading direction, so the copy is never fighting the galaxy */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
            background: `linear-gradient(to ${rtl ? "left" : "right"}, rgba(8,10,20,.92) 0%, rgba(8,10,20,.72) 40%, rgba(8,10,20,.25) 72%, transparent 100%)`,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>
        <img
          className="fadeup"
          src={IMG.profile}
          alt={`${t.name} ${t.lastName}`}
          style={{ width: 108, height: 108, borderRadius: "50%", objectFit: "cover", border: `2px solid ${C.gold}`, boxShadow: "0 0 40px rgba(217,164,65,.25)", marginBottom: 26, animationDelay: ".05s" }}
        />
        <p className="fadeup" style={{ color: C.gold, fontSize: 17, marginBottom: 18, animationDelay: ".15s", textShadow: shadowSoft }}>{t.greeting}</p>
        <h1 className="fadeup" style={{ fontFamily: displayFont, fontSize: "clamp(2rem, 6.5vw, 4.6rem)", fontWeight: 700, lineHeight: 1.12, maxWidth: 960, animationDelay: ".3s", textShadow: shadowStrong }}>
          {t.name}
          <br />
          <span style={{ color: C.goldSoft }}>{t.lastName}</span>
        </h1>
        <p className="fadeup" style={{ color: "#b9bccd", fontSize: "clamp(1rem, 2vw, 1.2rem)", maxWidth: 580, marginTop: 26, lineHeight: 1.8, animationDelay: ".5s", textShadow: shadowSoft }}>
          {t.tagline}
        </p>
        <a href="#education" className="fadeup" style={{ marginTop: 44, color: C.gold, textDecoration: "none", fontSize: 14, letterSpacing: ".12em", animationDelay: ".7s", textShadow: shadowSoft }}>
          {t.explore} <span className="scrollcue">↓</span>
        </a>
        </div>
      </header>

      {/* Resume sections */}
      <main style={{ position: "relative", zIndex: 1, background: `linear-gradient(180deg, transparent, ${C.night} 16%)` }}>
        {t.sections.map((section) => (
          <section key={section.id} id={section.id} style={{ padding: `96px ${pad} 10px` }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 44 }}>
              <h2 style={{ fontFamily: displayFont, fontSize: 14, letterSpacing: rtl ? "0" : ".2em", textTransform: rtl ? "none" : "uppercase", color: C.gold, whiteSpace: "nowrap" }}>{section.title}</h2>
              <span style={{ flex: 1, height: 1, background: C.line }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 22 }}>
              {section.cards.map((card, i) => {
                const Tag = card.link ? "a" : "div";
                return (
                  <Tag
                    key={card.title}
                    className="card reveal"
                    {...(card.link ? { href: card.link, target: "_blank", rel: "noreferrer" } : {})}
                    style={{ display: "block", background: C.lapis, border: `1px solid ${C.line}`, borderRadius: 16, padding: 28, textDecoration: "none", color: C.ink, transitionDelay: `${i * 80}ms` }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                        {card.picture && (
                          <img
                            src={card.picture}
                            alt=""
                            style={{ width: 40, height: 40, borderRadius: 10, objectFit: "cover", background: "#fff", padding: 3, flexShrink: 0 }}
                          />
                        )}
                        <h3 style={{ fontFamily: displayFont, fontSize: 17, fontWeight: 500 }}>{card.title}</h3>
                      </div>
                      <span style={{ color: C.gold, fontSize: 12.5, letterSpacing: ".04em", whiteSpace: "nowrap" }}>{card.duration}</span>
                    </div>
                    <p style={{ color: C.faded, fontSize: 14.5, lineHeight: rtl ? 1.9 : 1.7, marginTop: 12 }}>{card.desc}</p>
                  </Tag>
                );
              })}
            </div>
          </section>
        ))}

        {/* Skills */}
        <section id="skills" style={{ padding: `96px ${pad} 40px` }}>
          <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 44 }}>
            <h2 style={{ fontFamily: displayFont, fontSize: 14, letterSpacing: rtl ? "0" : ".2em", textTransform: rtl ? "none" : "uppercase", color: C.gold, whiteSpace: "nowrap" }}>{t.skillsTitle}</h2>
            <span style={{ flex: 1, height: 1, background: C.line }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
            {t.skills.map((s, i) => (
              <div key={s.title} className="reveal" style={{ borderTop: `2px solid ${C.gold}`, paddingTop: 22, transitionDelay: `${i * 80}ms` }}>
                <h3 style={{ fontFamily: displayFont, fontSize: 16.5, fontWeight: 500, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: C.faded, fontSize: 14.5, lineHeight: rtl ? 1.95 : 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact */}
      <footer id="contact" style={{ position: "relative", zIndex: 1, padding: `84px ${pad} 56px`, borderTop: `1px solid ${C.line}` }}>
        <h2 className="reveal" style={{ fontFamily: displayFont, fontSize: "clamp(1.6rem, 4vw, 2.6rem)", fontWeight: 500, maxWidth: 680, lineHeight: 1.35 }}>
          {t.contactTitle} <span style={{ color: C.gold }}>{t.contactAccent}</span>
        </h2>
        <a className="reveal" href={`mailto:${EMAIL}`} dir="ltr" style={{ display: "inline-block", marginTop: 26, color: C.goldSoft, textDecoration: "none", fontSize: 16, borderBottom: `1px solid ${C.line}`, paddingBottom: 3, transitionDelay: "100ms" }}>
          {EMAIL}
        </a>
        <div className="reveal" style={{ display: "flex", gap: 24, marginTop: 34, flexWrap: "wrap", transitionDelay: "180ms" }}>
          {SOCIALS.map((s) => (
            <a key={s.label} className="navlink" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
        <p style={{ color: C.faded, fontSize: 13, marginTop: 56 }}>{t.copyright}</p>
      </footer>
    </div>
  );
}
