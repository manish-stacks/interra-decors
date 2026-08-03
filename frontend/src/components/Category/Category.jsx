import { useRef, useState, useEffect, useCallback } from "react";
import "./category.css";
import { Link } from "react-router-dom";
import Cat01 from "../../assets/products-cat/curtains.webp";
import Cat02 from "../../assets/products-cat/upholstery.jpg";
import Cat03 from "../../assets/products-cat/wallpaper.jpg";
import Cat04 from "../../assets/products-cat/motorized-curtain-track.webp";
import Cat05 from "../../assets/products-cat/motorized-automation-solutions.webp";
import Cat06 from "../../assets/products-cat/bed-bath-linens.webp";
import Cat07 from "../../assets/products-cat/mattresses.webp";
import Cat08 from "../../assets/products-cat/rugs.webp";
import Cat09 from "../../assets/products-cat/carpets.webp";
import Cat10 from "../../assets/products-cat/wooden-flooring.webp";
import Cat11 from "../../assets/products-cat/wall-to-wall-carpet.webp";

const categories = [
  {
    id: 1,
    title: "Curtains",
    desc: "Custom-stitched curtains for perfect finish and fall.",
    image: Cat01,
  },
  {
    id: 2,
    title: "Upholstery",
    desc: "Durable and elegant fabrics for comfort and long-term use.",
    image: Cat02,
  },
  {
    id: 3,
    title: "Wallpaper",
    desc: "Modern designer wallpapers to transform your walls.",
    image: Cat03,
  },
  {
    id: 4,
    title: "Blinds & Curtain Tracks",
    desc: "Stylish blinds for light control and privacy.",
    image: Cat04,
  },
  {
    id: 5,
    title: "Motorized & Automation Solutions",
    desc: "Comfort-driven bedding solutions for better living.",
    image: Cat05,
  },
  {
    id: 6,
    title: "Bed & Bath Linens",
    desc: "Premium carpets that add warmth and luxury to any space.",
    image: Cat06,
  },
  {
    id: 7,
    title: "Mattresses",
    desc: "Smart automation for modern, convenient interiors.",
    image: Cat07,
  },
  {
    id: 8,
    title: "Rugs",
    desc: "Smart automation for modern, convenient interiors.",
    image: Cat08,
  },
  {
    id: 9,
    title: "Carpets",
    desc: "Smart automation for modern, convenient interiors.",
    image: Cat09,
  },
  {
    id: 10,
    title: "Wooden Flooring",
    desc: "Smart automation for modern, convenient interiors.",
    image: Cat10,
  },
  ,
  {
    id: 11,
    title: "Wall-to-Wall Carpets",
    desc: "Smart automation for modern, convenient interiors.",
    image: Cat11,
  },
];

const ArrowLeft = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);
const ArrowRight = () => (
  <svg
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);
const ArrowLong = () => (
  <svg
    width="13"
    height="13"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function CategoriesSlider() {
  const trackRef = useRef(null);
  const autoRef = useRef(null);
  const isHovering = useRef(false);
  const drag = useRef({ active: false, startX: 0, scrollStart: 0 });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIdx, setActiveIdx] = useState(0); // tracks auto-slide index for dots

  const CARD_W = 175; // approx card+gap width for scroll
  const AUTO_MS = 5000;

  /* ── update arrow states ── */
  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  /* ── smooth scroll helper using requestAnimationFrame ── */
  const smoothScrollTo = (el, targetLeft, duration = 900) => {
    const startLeft = el.scrollLeft;
    const distance = targetLeft - startLeft;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.scrollLeft = startLeft + distance * easeInOutCubic(progress);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ── manual scroll ── */
  const scrollByDir = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    smoothScrollTo(el, el.scrollLeft + dir * CARD_W, 700);
  };

  /* ── auto slide ── */
  const autoSlide = useCallback(() => {
    const el = trackRef.current;
    if (!el || isHovering.current || drag.current.active) return;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
    if (atEnd) {
      smoothScrollTo(el, 0, 1000);
      setActiveIdx(0);
    } else {
      smoothScrollTo(el, el.scrollLeft + CARD_W, 900);
      setActiveIdx((prev) => (prev + 1) % categories.length);
    }
  }, []);

  useEffect(() => {
    autoRef.current = setInterval(autoSlide, AUTO_MS);
    return () => clearInterval(autoRef.current);
  }, [autoSlide]);

  /* ── drag ── */
  const onMouseDown = (e) => {
    drag.current = {
      active: true,
      startX: e.pageX,
      scrollStart: trackRef.current.scrollLeft,
    };
    trackRef.current.style.cursor = "grabbing";
    clearInterval(autoRef.current); // pause auto on drag
  };
  const onMouseMove = (e) => {
    if (!drag.current.active) return;
    trackRef.current.scrollLeft =
      drag.current.scrollStart - (e.pageX - drag.current.startX);
  };
  const onMouseUp = () => {
    drag.current.active = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    autoRef.current = setInterval(autoSlide, AUTO_MS); // resume
  };

  /* ── touch swipe ── */
  const touch = useRef({ startX: 0 });
  const onTouchStart = (e) => {
    touch.current.startX = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const diff = touch.current.startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) scrollByDir(diff > 0 ? 1 : -1);
  };

  return (
    <section
      className="cs-root"
      onMouseEnter={() => {
        isHovering.current = true;
      }}
      onMouseLeave={() => {
        isHovering.current = false;
      }}
    >
      <div className="cs-container">
        {/* ══ HEADER ══ */}
        <div className="cs-header cs-fade cs-fade-1">
          <div className="cs-header-left">
            <div className="cs-eyebrow">
              <span className="cs-eyebrow-line" />
              <span className="cs-eyebrow-text">Our Premium Product Range</span>
            </div>
            <h2 className="cs-heading">
              Shop by <span>Category</span>
            </h2>
            <p className="cs-subtext">Wide Range Under One Roof.</p>
          </div>

          <div className="cs-header-right">
            <div className="cs-arrows">
              <button
                className="cs-arrow-btn"
                onClick={() => scrollByDir(-1)}
                disabled={!canPrev}
                aria-label="Previous"
              >
                <ArrowLeft />
              </button>
              <button
                className="cs-arrow-btn"
                onClick={() => scrollByDir(1)}
                disabled={!canNext}
                aria-label="Next"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>

        {/* ══ TRACK ══ */}
        <div
          ref={trackRef}
          className="cs-track cs-fade cs-fade-2"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {categories.map((cat, idx) => (
            <div key={cat.id} className="cs-card">
              <div className="cs-card-inner">
                {/* Image */}
                <Link to="/all-products">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="cs-card-img"
                    draggable={false}
                  />

                  {/* Gradient overlay */}
                  <div className="cs-card-overlay" />

                  {/* Number */}
                  <span className="cs-card-num">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Text — always visible at bottom */}
                  <div className="cs-card-content">
                    <h3 className="cs-card-title">{cat.title}</h3>
                    <p className="cs-card-desc">{cat.desc}</p>
                    <div className="cs-card-cta">
                      <span>Explore</span>
                      <span className="cs-card-cta-icon">
                        <ArrowLong />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}

          {/* View All */}
          <div className="cs-card cs-card-viewall">
            <div className="cs-card-inner cs-viewall-inner">
              <div className="cs-viewall-icon">
                <ArrowLong />
              </div>
              <p className="cs-viewall-label">
                View All
                <br />
                Categories
              </p>
            </div>
          </div>
        </div>

        {/* ══ BOTTOM ══ */}
        <div className="cs-bottom cs-fade cs-fade-3">
          <div className="cs-dots">
            {categories.map((_, i) => (
              <button
                key={i}
                className={`cs-dot ${i === activeIdx ? "on" : ""}`}
                onClick={() => {
                  const el = trackRef.current;
                  if (el) smoothScrollTo(el, i * CARD_W, 900);
                  setActiveIdx(i);
                }}
                aria-label={`Category ${i + 1}`}
              />
            ))}
          </div>

          <button className="cs-view-all-btn">
            View All Categories
            <span className="cs-btn-arrow">
              <ArrowLong />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
