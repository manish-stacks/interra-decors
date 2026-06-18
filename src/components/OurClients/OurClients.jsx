// OurClients.jsx
import React, { useEffect, useRef, useState } from "react";
import "./OurClients.css";

import Client01 from "../../assets/products-cat/interior-designers.jpg";
import Client02 from "../../assets/products-cat/architects.jpg";
import Client03 from "../../assets/products-cat/hotels.jpg";
import Client04 from "../../assets/products-cat/corporates.jpg";
import Client05 from "../../assets/products-cat/builders.jpg";
import Client06 from "../../assets/products-cat/builders.jpg";

const slides = [
  { src: Client01, alt: "Interior Designers", label: "Interior Designers" },
  { src: Client02, alt: "Architects", label: "Architects" },
  { src: Client03, alt: "Hotels", label: "Hotels" },
  { src: Client04, alt: "Corporates", label: "Corporates" },
  { src: Client05, alt: "Builders", label: "Builders" },
  { src: Client06, alt: "Builders", label: "Homeowners" },
];

const categories = ["Carpets", "Flooring", "Textiles"];

/* ── Inline SVG icons (strokeWidth=1.5, 20×20 viewBox) ── */
const IconPalette = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const IconArchitect = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    <rect x="9" y="9" width="2" height="2" />
    <rect x="13" y="9" width="2" height="2" />
  </svg>
);

const IconHotel = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
    <path d="m9 22 .01-4" />
    <path d="m15 22 .01-4" />
    <path d="M9 7h.01" />
    <path d="M15 7h.01" />
    <path d="M9 11h6" />
    <path d="M9 15h6" />
  </svg>
);

const IconBriefcase = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <line x1="2" y1="13" x2="22" y2="13" />
  </svg>
);

const IconHammer = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9" />
    <path d="M17.64 15 22 10.64" />
    <path d="m20.91 11.7-1.25-1.25c.16-.26.25-.56.25-.87v-.82a.7.7 0 0 0-.41-.63l-3.1-1.56a.7.7 0 0 0-.78.1L12.6 8.73a.7.7 0 0 0-.1.78l1.56 3.1a.7.7 0 0 0 .63.41h.82c.31 0 .61-.09.87-.25l1.25 1.25" />
  </svg>
);

const IconHome = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const clients = [
  {
    icon: <IconPalette />,
    title: "Interior Designers",
    desc: "High-quality furnishings that bring creative visions to life.",
  },
  {
    icon: <IconArchitect />,
    title: "Architects",
    desc: "Tailored solutions that complement architectural designs.",
  },
  {
    icon: <IconHotel />,
    title: "Hotels",
    desc: "Customised décor to elevate every guest experience.",
  },
  {
    icon: <IconBriefcase />,
    title: "Corporates",
    desc: "Stylish, functional office solutions for productivity and comfort.",
  },
  {
    icon: <IconHammer />,
    title: "Builders",
    desc: "Reliable materials for residential and commercial projects.",
  },
  {
    icon: <IconHome />,
    title: "Homeowners",
    desc: "Personalised products and expert guidance for beautiful spaces.",
    highlight: true,
  },
];

const OurClients = () => {
  const [active, setActive] = useState(0);
  const [revealed, setRevealed] = useState([]);
  const intervalRef = useRef(null);
  const gridRef = useRef(null);

  /* ── Auto-cycle images ── */
  const startCycle = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3200);
  };

  useEffect(() => {
    startCycle();
    return () => clearInterval(intervalRef.current);
  }, []);

  /* ── Stagger reveal on client cards ── */
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".oc-item");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = +entry.target.dataset.idx;
            setRevealed((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
          }
        });
      },
      { threshold: 0.15 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNav = (idx) => {
    setActive(idx);
    startCycle();
  };

  return (
    <section className="oc-section">
      {/* Floating accent orbs */}
      <span className="oc-orb oc-orb1" aria-hidden="true" />
      <span className="oc-orb oc-orb2" aria-hidden="true" />
      <span className="oc-vline" aria-hidden="true" />

      {/* ── LEFT: Image Stack Panel ── */}
      <div className="oc-left">
        <div className="oc-left-bg" aria-hidden="true" />
        <div className="oc-left-grid" aria-hidden="true" />
        <div className="oc-corner oc-corner--tl" aria-hidden="true" />
        <div className="oc-corner oc-corner--br" aria-hidden="true" />

        {/* Category pills */}
        <div
          className="oc-pills"
          role="tablist"
          aria-label="Product categories"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              role="tab"
              aria-selected={i === active}
              className={`oc-pill${i === active ? " oc-pill--on" : ""}`}
              onClick={() => handleNav(i)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stacked cards */}
        <div className="oc-stack">
          {slides.map((slide, i) => {
            /* z-index & offset logic: active card is always on top */
            const diff = (i - active + slides.length) % slides.length;
            /* diff 0 = active, 1 = second, 2 = bottom */
            const zMap = [3, 2, 1];
            const xMap = [0, 24, 46];
            const yMap = [0, 18, 34];
            const scaleMap = [1, 0.94, 0.88];
            return (
              <div
                key={i}
                className={`oc-card${diff === 0 ? " oc-card--active" : ""}`}
                style={{
                  zIndex: zMap[diff],
                  transform: `translate(${xMap[diff]}px, ${yMap[diff]}px) scale(${scaleMap[diff]})`,
                }}
                onClick={() => handleNav(i)}
                aria-label={slide.alt}
              >
                <img src={slide.src} alt={slide.alt} />
                <div className="oc-card-label">{slide.label}</div>
              </div>
            );
          })}
        </div>

        {/* Dot navigation */}
        <div className="oc-dots" role="tablist" aria-label="Image navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Image ${i + 1}`}
              className={`oc-dot${i === active ? " oc-dot--on" : ""}`}
              onClick={() => handleNav(i)}
            />
          ))}
        </div>
      </div>

      {/* ── RIGHT: Content ── */}
      <div className="oc-right">
        <p className="oc-eyebrow">
          <span className="oc-eyebrow__line" aria-hidden="true" />
          Trusted by Homeowners
        </p>

        <h2 className="oc-title">
          Our <span className="oc-title__gold">Clients</span>
        </h2>

        <p className="oc-subtitle">
          From intimate residences to landmark projects — we serve those who
          demand excellence in every detail.
        </p>

        {/* Client cards grid */}
        <div className="oc-grid" ref={gridRef}>
          {clients.map((client, i) => (
            <div
              key={client.title}
              data-idx={i}
              className={[
                "oc-item",
                client.highlight ? "oc-item--hl" : "",
                revealed.includes(i) ? "oc-item--in" : "",
              ]
                .join(" ")
                .trim()}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className="oc-item__icon">{client.icon}</span>
              <h3 className="oc-item__title">{client.title}</h3>
              <p className="oc-item__desc">{client.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="oc-divider" aria-hidden="true" />

        {/* Footer row */}
        <div className="oc-footer">
          <p className="oc-footer__text">
            We don't just enhance spaces — we create timeless, sophisticated
            environments tailored to every client's unique vision.
          </p>
          <button className="oc-cta">
            <span className="oc-cta__label">Start Your Project</span>
            <span className="oc-cta__arrow" aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
