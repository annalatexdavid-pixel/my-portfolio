'use client'

import { useState, useRef, useEffect } from "react";

// ── Drag hook ──────────────────────────────────────────────────────
function useDraggable(ix: number, iy: number) {
  const [pos, setPos] = useState({ x: ix, y: iy });
  const [active, setActive] = useState(false);
  const state = useRef({ on: false, ox: 0, oy: 0 });

  useEffect(() => {
    const mm = (e: MouseEvent) => {
      if (!state.current.on) return;
      setPos({ x: e.clientX - state.current.ox, y: e.clientY - state.current.oy });
    };
    const mu = () => { state.current.on = false; setActive(false); };
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    return () => { window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    state.current = { on: true, ox: e.clientX - pos.x, oy: e.clientY - pos.y };
    setActive(true);
    e.stopPropagation();
    e.preventDefault();
  };

  return { pos, active, onMouseDown };
}

// ── App Icon ───────────────────────────────────────────────────────
function AppIcon({ bg, logo, size = 50 }: { bg: string; logo: React.ReactNode; size?: number }) {
  return (
    <div style={{
      width: size, height: size, background: bg,
      borderRadius: Math.round(size * 0.22),
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      flexShrink: 0,
    }}>
      {logo}
    </div>
  );
}

// ── Brand Logos (inline SVG) ───────────────────────────────────────
const FigmaLogo = () => (
  <svg width="22" height="28" viewBox="0 0 38 57" fill="none">
    <rect x="0" y="0" width="19" height="19" rx="9.5" fill="#F24E1E"/>
    <rect x="19" y="0" width="19" height="19" rx="9.5" fill="#FF7262"/>
    <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
    <rect x="0" y="19" width="19" height="19" rx="9.5" fill="#A259FF"/>
    <rect x="0" y="38" width="19" height="19" rx="9.5" fill="#0ACF83"/>
  </svg>
);

const SketchLogo = () => (
  <svg width="28" height="26" viewBox="0 0 100 92" fill="none">
    <polygon points="50,4 96,32 80,88 20,88 4,32" fill="#FDAD00"/>
    <polygon points="50,4 20,32 80,32" fill="#FDD231"/>
    <polygon points="50,88 20,88 35,32" fill="#FEB200"/>
    <polygon points="50,88 80,88 65,32" fill="#FEB200"/>
    <polygon points="50,88 35,32 65,32" fill="#FDAD00"/>
    <polygon points="20,32 4,32 35,32" fill="#FDD231"/>
    <polygon points="80,32 96,32 65,32" fill="#FDD231"/>
    <polygon points="4,32 20,88 35,32" fill="#FEB200"/>
    <polygon points="96,32 65,32 80,88" fill="#FEB200"/>
  </svg>
);

const FramerLogo = () => (
  <svg width="22" height="30" viewBox="0 0 100 150" fill="white">
    <path d="M0 0h100v50H50L0 0zM0 50h50l50 50H0V50zM0 100h50v50L0 100z"/>
  </svg>
);

const IllustratorLogo = () => (
  <svg width="30" height="22" viewBox="0 0 60 44" fill="none">
    <text x="2" y="36" fontFamily="'Georgia', serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="white" letterSpacing="-2">Ai</text>
  </svg>
);

const NotionLogo = () => (
  <svg width="26" height="26" viewBox="0 0 120 120" fill="none">
    <rect width="120" height="120" rx="18" fill="white"/>
    <path d="M25 20 C25 20 40 18 52 26 L88 76 C88 76 90 78 88 80 L88 98 C88 100 86 102 84 100 L82 98 C82 98 68 80 68 80 L68 40 L38 40 L38 100 C38 102 36 104 34 102 L26 96 C24 94 23 92 23 90 L23 24 C23 22 24 20 25 20Z" fill="#1a1a1a"/>
    <path d="M68 40 L88 26 C90 24 92 24 92 26 L92 78 L68 40Z" fill="#1a1a1a"/>
  </svg>
);

// Adobe logos — styled text like the real icons
const PhotoshopLogo = () => (
  <svg width="30" height="22" viewBox="0 0 60 44" fill="none">
    <text x="1" y="36" fontFamily="'Georgia', serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="white" letterSpacing="-2">Ps</text>
  </svg>
);
const AfterEffectsLogo = () => (
  <svg width="30" height="22" viewBox="0 0 60 44" fill="none">
    <text x="1" y="36" fontFamily="'Georgia', serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="white" letterSpacing="-2">Ae</text>
  </svg>
);
const PremiereLogo = () => (
  <svg width="30" height="22" viewBox="0 0 60 44" fill="none">
    <text x="1" y="36" fontFamily="'Georgia', serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="white" letterSpacing="-2">Pr</text>
  </svg>
);

const GeminiLogo = () => (
  <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
    <path d="M50 5 C50 5 55 35 75 50 C55 65 50 95 50 95 C50 95 45 65 25 50 C45 35 50 5 50 5Z" fill="white"/>
  </svg>
);

const OpenAILogo = () => (
  <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
    <path d="M50 15 C60 15 68 20 73 28 C78 22 86 20 93 24 C100 28 103 36 100 44 C106 48 109 55 107 62 C105 69 99 74 92 74 C89 82 83 87 76 87 C69 87 63 83 60 77 C54 80 47 80 41 77 C38 83 32 87 25 87 C18 87 12 82 9 74 C2 74 -4 69 -6 62 C-8 55 -5 48 1 44 C-2 36 1 28 8 24 C15 20 23 22 28 28 C33 20 41 15 50 15Z" fill="white" transform="translate(3,3) scale(0.94)"/>
  </svg>
);

const ClaudeLogo = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
    {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
      <line key={i}
        x1="50" y1="50"
        x2={50 + 36 * Math.cos((deg * Math.PI) / 180)}
        y2={50 + 36 * Math.sin((deg * Math.PI) / 180)}
        stroke="white" strokeWidth={i % 2 === 0 ? "7" : "4"} strokeLinecap="round"
      />
    ))}
    <circle cx="50" cy="50" r="10" fill="white"/>
  </svg>
);

const GitHubLogo = () => (
  <svg width="26" height="26" viewBox="0 0 100 100" fill="white">
    <path d="M50 5C25.1 5 5 25.1 5 50c0 19.9 12.9 36.8 30.8 42.8 2.3.4 3.1-1 3.1-2.2v-7.7c-12.6 2.7-15.3-6.1-15.3-6.1-2.1-5.3-5.1-6.7-5.1-6.7-4.1-2.8.3-2.7.3-2.7 4.6.3 7 4.7 7 4.7 4.1 7 10.7 5 13.3 3.8.4-2.9 1.6-5 2.9-6.1-10.1-1.1-20.7-5-20.7-22.4 0-5 1.8-9 4.7-12.2-.5-1.2-2-5.7.4-11.9 0 0 3.8-1.2 12.5 4.7 3.6-1 7.5-1.5 11.3-1.5 3.8 0 7.7.5 11.3 1.5 8.7-5.9 12.5-4.7 12.5-4.7 2.5 6.2 1 10.7.4 11.9 2.9 3.1 4.7 7.2 4.7 12.2 0 17.4-10.6 21.2-20.7 22.3 1.6 1.4 3.1 4.2 3.1 8.5v12.6c0 1.2.8 2.7 3.1 2.2C82.1 86.8 95 69.9 95 50 95 25.1 74.9 5 50 5z"/>
  </svg>
);

const CursorLogo = () => (
  <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
    <path d="M20 10 L20 80 L40 60 L55 90 L65 85 L50 55 L75 55Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

const PerplexityLogo = () => (
  <svg width="24" height="26" viewBox="0 0 90 100" fill="none">
    <path d="M45 5 L80 25 L80 55 L55 70 L80 85 L80 95 L45 95 L45 70 L20 85 L10 80 L35 65 L10 50 L10 25Z" fill="white"/>
    <path d="M45 5 L10 25 L35 40 L45 35Z" fill="rgba(255,255,255,0.6)"/>
  </svg>
);

// ── macOS Folder SVG ───────────────────────────────────────────────
function FolderShape({ w = 180, open = false }: { w?: number; open?: boolean }) {
  const h = Math.round(w * 0.78);
  const tabW = w * 0.33, tabH = h * 0.115;
  const bY = tabH, bH = h - bY, r = w * 0.07;
  const c = "#1d1d1f";
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} fill="none" style={{ display: "block" }}>
      <path
        d={`M${w * 0.045},${bY} C${w * 0.045},${bY - tabH * 0.9} ${w * 0.1},${bY - tabH} ${tabW * 0.5},${bY - tabH} C${tabW * 0.85},${bY - tabH} ${tabW},${bY - tabH * 0.25} ${tabW},${bY}`}
        fill={c}
      />
      <rect x={0} y={bY} width={w} height={bH} rx={r} fill={c} />
      <rect x={0} y={bY + tabH * 1.7} width={w} height={1.5} fill="rgba(255,255,255,0.06)" />
      {open && (
        <rect x={w * 0.13} y={bY - 10} width={w * 0.74} height={20} rx={4}
          fill="rgba(255,255,255,0.88)" />
      )}
    </svg>
  );
}

// ── Skill Card (for CardFolder) ────────────────────────────────────
interface SkillCardData { title: string; items: string[]; }

function SkillCard({ title, items }: SkillCardData) {
  return (
    <div style={{
      background: "white",
      borderRadius: 14,
      padding: "12px 16px 14px",
      width: 158,
      boxShadow: "0 6px 20px rgba(0,0,0,0.13)",
      pointerEvents: "none",
    }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: "#111", marginBottom: 8, fontFamily: "-apple-system, sans-serif" }}>
        {title}
      </div>
      <ul style={{ margin: 0, padding: "0 0 0 16px", listStyle: "disc" }}>
        {items.map(item => (
          <li key={item} style={{ fontSize: 12, color: "#888", marginBottom: 3, fontFamily: "-apple-system, sans-serif" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Card Burst positions (for wider cards) ─────────────────────────
const CARD_BURSTS = [
  { dx: -175, dy: -180, rot: -10, delay: 0.00 },
  { dx:  -5,  dy: -200, rot:   2, delay: 0.06 },
  { dx:  165, dy: -175, rot:  10, delay: 0.12 },
];

// ── CardFolder (bursts skill cards instead of icons) ───────────────
function CardFolder({ label, cards, ix, iy }: { label: string; cards: SkillCardData[]; ix: number; iy: number }) {
  const { pos, active, onMouseDown } = useDraggable(ix, iy);
  const [hov, setHov] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const FW = 176;
  const CARD_H = 210;

  const handleEnter = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); setHov(true); };
  const handleLeave = () => { leaveTimer.current = setTimeout(() => setHov(false), 180); };

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y - (hov ? CARD_H : 0),
        paddingTop: hov ? CARD_H : 0,
        cursor: active ? "grabbing" : "grab",
        userSelect: "none",
        zIndex: active ? 999 : hov ? 80 : 3,
        transform: active ? "scale(1.04) rotate(0.8deg)" : "scale(1)",
        transition: active ? "none" : "transform 0.15s ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div style={{ position: "relative", width: FW }}>
        {hov && cards.map((card, i) => {
          const b = CARD_BURSTS[i] ?? { dx: 0, dy: -180, rot: 0, delay: i * 0.06 };
          return (
            <div
              key={i}
              className="pop-icon"
              style={{
                position: "absolute",
                left: FW / 2 - 79 + b.dx,
                top: 10 + b.dy,
                transform: `rotate(${b.rot}deg)`,
                animationDelay: `${b.delay}s`,
                pointerEvents: "none",
              }}
            >
              <SkillCard title={card.title} items={card.items} />
            </div>
          );
        })}
        <FolderShape w={FW} open={hov} />
        <div style={{
          position: "absolute", bottom: 8, left: 0, right: 0,
          textAlign: "center", color: "#777", fontSize: 11.5,
          fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
          pointerEvents: "none", letterSpacing: 0.1,
        }}>
          {label}
        </div>
      </div>
    </div>
  );
}

// ── Burst config ───────────────────────────────────────────────────
const BURSTS = [
  { dx: -100, dy: -85, rot: -20, delay: 0.00 },
  { dx: -52,  dy: -115, rot: -9,  delay: 0.05 },
  { dx:   2,  dy: -125, rot:  0,  delay: 0.10 },
  { dx:  58,  dy: -112, rot:  9,  delay: 0.15 },
  { dx: 104,  dy: -78,  rot: 17,  delay: 0.20 },
  { dx:  82,  dy: -24,  rot: 10,  delay: 0.25 },
];


// ── Folder Component ───────────────────────────────────────────────
function Folder({ label, icons, ix, iy }: { label: string; icons: IconData[]; ix: number; iy: number }) {
  const { pos, active, onMouseDown } = useDraggable(ix, iy);
  const [hov, setHov] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const FW = 176;
  const ICON_H = 140;

  const handleEnter = () => { if (leaveTimer.current) clearTimeout(leaveTimer.current); setHov(true); };
  const handleLeave = () => { leaveTimer.current = setTimeout(() => setHov(false), 180); };

  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y - (hov ? ICON_H : 0),
        paddingTop: hov ? ICON_H : 0,
        cursor: active ? "grabbing" : "grab",
        userSelect: "none",
        zIndex: active ? 999 : hov ? 80 : 3,
        transform: active ? "scale(1.04) rotate(0.8deg)" : "scale(1)",
        transition: active ? "none" : "transform 0.15s ease",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div style={{ position: "relative", width: FW }}>
        {hov && icons.map((icon, i) => {
          const b = BURSTS[i] ?? { dx: 0, dy: -80, rot: 0, delay: i * 0.05 };
          return (
            <div
              key={i}
              className="pop-icon"
              style={{
                position: "absolute",
                left: FW / 2 - 25 + b.dx,
                top: 10 + b.dy,
                transform: `rotate(${b.rot}deg)`,
                animationDelay: `${b.delay}s`,
                pointerEvents: "none",
              }}
            >
              <AppIcon bg={icon.bg} logo={icon.logo} />
            </div>
          );
        })}
        <FolderShape w={FW} open={hov} />
        <div style={{
          position: "absolute", bottom: 8, left: 0, right: 0,
          textAlign: "center", color: "#777", fontSize: 11.5,
          fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
          pointerEvents: "none", letterSpacing: 0.1,
        }}>
          {label}
        </div>
      </div>
    </div>
  );
}

// ── Draggable Sticker ──────────────────────────────────────────────
function Sticker({ ix, iy, rotate = 0, children }: { ix: number; iy: number; rotate?: number; children: React.ReactNode }) {
  const { pos, active, onMouseDown } = useDraggable(ix, iy);
  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        position: "absolute", left: pos.x, top: pos.y,
        cursor: active ? "grabbing" : "grab",
        zIndex: active ? 999 : 4,
        transform: active ? `scale(1.06) rotate(${rotate + 2}deg)` : `scale(1) rotate(${rotate}deg)`,
        transition: active ? "none" : "transform 0.15s ease",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
}

// ── SVG Stickers ───────────────────────────────────────────────────
function ImpactBanner() {
  return (
    <svg width={155} height={68} viewBox="0 0 155 68" fill="none">
      <path d="M2,28 L16,22 L14,34Z" fill="#4A95EE" />
      <path d="M153,28 L139,22 L141,34Z" fill="#4A95EE" />
      <path d="M14,16 Q77,2 141,18 Q144,34 141,50 Q77,64 14,50 Q10,34 14,16Z"
        fill="#5BA8FF" stroke="#4A95EE" strokeWidth={1.2} />
      <text x="77" y="30" textAnchor="middle"
        fontFamily="'Permanent Marker', 'Caveat', cursive"
        fontSize="11" fill="white" fontWeight="bold" letterSpacing="1.5">
        IMPACT DRIVEN
      </text>
      <text x="77" y="47" textAnchor="middle"
        fontFamily="'Permanent Marker', cursive"
        fontSize="13" fill="rgba(255,255,255,0.9)">
        ──────→
      </text>
    </svg>
  );
}

function StoryDrivenBlob() {
  return (
    <svg width={145} height={62} viewBox="0 0 145 62" fill="none">
      <path d="M16,31 Q12,6 38,4 Q66,-3 98,5 Q126,8 122,30 Q126,54 98,57 Q66,63 38,56 Q12,52 16,31Z"
        fill="#FFBDD8" stroke="#F0AACC" strokeWidth={1} />
      <text x="70" y="36" textAnchor="middle"
        fontFamily="'Permanent Marker','Caveat',cursive"
        fontSize="14.5" fill="#5a2840">
        Story-Driven
      </text>
    </svg>
  );
}

function LightBulb() {
  return (
    <svg width={54} height={68} viewBox="0 0 54 68" fill="none">
      <path d="M27,6 C14,6 6,15 6,25 C6,34 12,41 16,46 L16,54 L38,54 L38,46 C42,41 48,34 48,25 C48,15 40,6 27,6Z"
        fill="#FFD93D" stroke="#E6B800" strokeWidth={1.5} />
      <rect x="16" y="54" width="22" height="4" rx="2" fill="#D0CEC8" stroke="#BBB" strokeWidth={0.8} />
      <rect x="17" y="59" width="20" height="4" rx="2" fill="#D0CEC8" stroke="#BBB" strokeWidth={0.8} />
      <path d="M23,30 Q27,22 31,30" stroke="#C9A600" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M19,22 Q21,17 25,14" stroke="rgba(255,255,255,0.65)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PersonLaptop() {
  return (
    <svg width="112" height="92" viewBox="0 0 112 92" fill="none">
      <rect x="0" y="76" width="112" height="3" rx="1.5" fill="#2a2a2a" />
      <rect x="15" y="60" width="52" height="17" rx="3" fill="#1a1a1a" />
      <rect x="15" y="60" width="52" height="2" rx="1" fill="#333" />
      <rect x="13" y="34" width="56" height="28" rx="3" fill="#1a1a1a" />
      <rect x="15" y="36" width="52" height="24" rx="2" fill="#242430" />
      <path d="M38,46 Q41,40 44,46 Q41,52 38,46Z" fill="#444" opacity="0.8" />
      <ellipse cx="83" cy="65" rx="9" ry="11" fill="#2a2a2a" />
      <rect x="80" y="51" width="6" height="6" rx="3" fill="#333" />
      <circle cx="83" cy="43" r="10" fill="#2a2a2a" />
      <path d="M73,44 Q73,30 83,30 Q93,30 93,44" fill="#111" />
      <rect x="84" y="62" width="12" height="15" rx="2" fill="#444" />
      <path d="M96,66 Q103,66 103,72 Q103,78 96,78"
        stroke="#444" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M88,58 Q90,53 88,48" stroke="#bbb" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M92,57 Q94,52 92,47" stroke="#bbb" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      <rect x="2" y="62" width="10" height="15" rx="1.5" fill="#888" />
      <rect x="5" y="59" width="10" height="15" rx="1.5" fill="#666" />
    </svg>
  );
}

function PenNib() {
  return (
    <svg width="46" height="58" viewBox="0 0 46 58" fill="none">
      <path d="M23,55 L3,8 Q23,0 43,8Z" fill="#7C3AED" stroke="#6D28D9" strokeWidth="1.5" />
      <line x1="23" y1="55" x2="23" y2="22" stroke="#5B21B6" strokeWidth="1.5" />
      <path d="M13,10 Q17,6 23,4" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ── Icon Data ──────────────────────────────────────────────────────
interface IconData { bg: string; logo: React.ReactNode; }

const SKILL_CARDS: SkillCardData[] = [
  { title: "Design", items: ["Product design", "UX & UI", "Prototyping"] },
  { title: "Strategy", items: ["Product thinking", "User research", "Business goals"] },
  { title: "Visual", items: ["Brand identity", "Motion", "Illustration"] },
];

const SKILLS_ICONS: IconData[] = [
  { bg: "#1E1E1E", logo: <FigmaLogo /> },        // Figma
  { bg: "#FF9A00", logo: <IllustratorLogo /> },  // Illustrator
  { bg: "#31A8FF", logo: <PhotoshopLogo /> },    // Photoshop
  { bg: "#9999FF", logo: <AfterEffectsLogo /> }, // After Effects
  { bg: "#EA77FF", logo: <PremiereLogo /> },     // Premiere Pro
  { bg: "#000000", logo: <NotionLogo /> },       // Notion
];

const AI_ICONS: IconData[] = [
  { bg: "#1A73E8", logo: <GeminiLogo /> },       // Gemini
  { bg: "#10A37F", logo: <OpenAILogo /> },       // ChatGPT
  { bg: "#D97757", logo: <ClaudeLogo /> },       // Claude
  { bg: "#24292E", logo: <GitHubLogo /> },       // GitHub Copilot
  { bg: "#1A1A1A", logo: <CursorLogo /> },       // Cursor
  { bg: "#20808D", logo: <PerplexityLogo /> },   // Perplexity
];

// ── Section ────────────────────────────────────────────────────────
export default function SkillsSection() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: 413,
        background: "#edecea",
        backgroundImage: "radial-gradient(circle, #c5c2bb 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        overflow: "hidden",
        borderRadius: 20,
        userSelect: "none",
        fontFamily: "-apple-system, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

        @keyframes popOut {
          0%   { transform: translateY(20px) scale(0.1) rotate(-8deg); opacity: 0; }
          65%  { transform: translateY(-6px) scale(1.1) rotate(0deg);  opacity: 1; }
          100% { transform: translateY(0px)  scale(1)   rotate(0deg);  opacity: 1; }
        }
        .pop-icon {
          animation: popOut 0.38s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
      `}</style>

      {/* Title */}
      <div style={{
        position: "absolute", top: 22, left: 26, zIndex: 10,
        fontSize: 17, fontWeight: 600, color: "#1a1a1a",
        letterSpacing: -0.2, pointerEvents: "none",
      }}>
        My design skillsets
      </div>

      {/* Folders */}
      <CardFolder label="Skills" cards={SKILL_CARDS} ix={58} iy={185} />
      <Folder label="AI Tools" icons={AI_ICONS} ix={320} iy={165} />

      {/* Stickers */}
      <Sticker ix={12} iy={82} rotate={-4}>
        <ImpactBanner />
      </Sticker>

      <Sticker ix={530} iy={200} rotate={5}>
        <StoryDrivenBlob />
      </Sticker>

      <Sticker ix={576} iy={78} rotate={3}>
        <LightBulb />
      </Sticker>

      <Sticker ix={562} iy={230} rotate={0}>
        <PersonLaptop />
      </Sticker>

      <Sticker ix={24} iy={310} rotate={-8}>
        <PenNib />
      </Sticker>

      {/* Pink dot */}
      <Sticker ix={220} iy={48} rotate={0}>
        <div style={{
          width: 14, height: 14, borderRadius: "50%",
          background: "#FF6B9D",
          boxShadow: "0 2px 6px rgba(255,107,157,0.4)",
        }} />
      </Sticker>

      {/* G translate sticker */}
      <Sticker ix={370} iy={38} rotate={2}>
        <div style={{
          width: 38, height: 38, background: "white", borderRadius: 10,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.18)", fontSize: 20,
        }}>
          G
        </div>
      </Sticker>

      {/* Laptop sticker */}
      <Sticker ix={300} iy={300} rotate={-5}>
        <div style={{
          width: 46, height: 36, background: "#222", borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)", fontSize: 18, color: "#888",
        }}>
          💻
        </div>
      </Sticker>
    </div>
  );
}
