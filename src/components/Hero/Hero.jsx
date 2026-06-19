import { useState, useEffect, useCallback } from "react";
import "./hero.css";
import { Link } from "react-router-dom";
import banner05 from "../../assets/banner/premium-bed.jpg"
import banner01 from "../../assets/banner/banner.jpg"
import banner02 from "../../assets/banner/banner2.jpg"
// import banner02 from "../../assets/banner/banner-bed-bath-linens.webp"
import banner03 from "../../assets/banner/banner-03.webp"
import banner04 from "../../assets/banner/banner-04.webp"

const ChevronLeft = () => (
  <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const slides = [
  {
    id: 1,
    tag: "PREMIUM UPHOLSTERY SOLUTIONS",
    title: "Premium Upholstery Solutions for Modern Living Spaces",
    sub: "Every Fabric Tells a Story. We Craft It Perfectly.",
    btn1: "Book a Consultation",
    btn2: "Request Fabric Catalogue",
    bg: banner01,
  },
  {
    id: 2,
    tag: "PREMIUM BED & BATH LINENS",
    title: "Luxurious Egyptian Cotton Bedsheets for Ultimate Comfort",
    sub: "Experience Softness, Elegance & Hotel-Like Comfort at Home.",
    btn1: "Book a Consultation",
    btn2: "View Collection",
    bg: banner05,
  },
  {
    id: 3,
    tag: "COMPLETE PROJECT HANDLING",
    title: "End-to-End Furnishing for Residential & Commercial",
    sub: "Wide Range Under One Roof.",
    btn1: "Book a Consultation",
    btn2: "Our Projects",
    bg: banner03,
  },
  {
    id: 4,
    tag: "EXPERT CONSULTATION",
    title: "Premium Furnishing Services at Your Doorstep",
    sub: "We bring the entire experience to your home or project site.",
    btn1: "Book a Meeting",
    btn2: "Request Catalogue",
    bg: banner04,
  },
];

const supportOptions = [
  {
    id: "fabric",
    label: "Choose fabric, blinds or flooring",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v4H3z"/><path d="M3 10h18v4H3z"/><path d="M3 17h18v4H3z"/>
      </svg>
    ),
  },
  {
    id: "consultation",
    label: "Book a consultation or site visit",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
  },
  {
    id: "catalogue",
    label: "Request fabric catalogue / brochure",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    id: "bulk",
    label: "Bulk / hotel / office project quote",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
  },
  {
    id: "aftersales",
    label: "After-sales / installation support",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
  },
];

function SupportPopup({ open, onClose }) {
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", number: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /* reset on close */
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setSelected(null);
        setShowForm(false);
        setSubmitted(false);
        setForm({ name: "", number: "", email: "" });
        setErrors({});
      }, 300);
    }
  }, [open]);

  /* outside click close */
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (!e.target.closest(".dhr-support-pop") && !e.target.closest(".dhr-help")) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  const handleOptionClick = (id) => {
    setSelected(id);
  };

  const handleGetQuote = () => {
    if (!selected) return;
    setShowForm(true);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.number.trim() || !/^\d{10}$/.test(form.number.trim())) e.number = "Valid 10-digit number required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const selectedOption = supportOptions.find((o) => o.id === selected);

  return (
    <div className={`dhr-support-pop${open ? " dhr-support-pop--open" : ""}`}>
      {/* Header */}
      <div className="dhr-sp-header">
        <div className="dhr-sp-avatar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div className="dhr-sp-meta">
          <p className="dhr-sp-title">Interra Decors Support</p>
          <p className="dhr-sp-sub">
            <span className="dhr-sp-dot" /> Online · Typically replies in a few hours
          </p>
        </div>
        <button className="dhr-sp-close" onClick={onClose}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>

      {/* Chat body */}
      <div className="dhr-sp-body">
        {!showForm && !submitted && (
          <>
            {/* Bot message bubble */}
            <div className="dhr-sp-bubble-wrap">
              <div className="dhr-sp-bot-avatar">ID</div>
              <div className="dhr-sp-bubble">
                👋 Hi! How can we help you today?<br />
                <span className="dhr-sp-bubble-sub">Select an option below</span>
              </div>
            </div>

            {/* Options */}
            <div className="dhr-sp-options">
              {supportOptions.map((opt) => (
                <button
                  key={opt.id}
                  className={`dhr-sp-option${selected === opt.id ? " dhr-sp-option--active" : ""}`}
                  onClick={() => handleOptionClick(opt.id)}
                >
                  <span className="dhr-sp-opt-icon">{opt.icon}</span>
                  <span className="dhr-sp-opt-label">{opt.label}</span>
                  {selected === opt.id && (
                    <svg className="dhr-sp-opt-check" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>

            {/* Get a Quote button */}
            <button
              className={`dhr-sp-quote-btn${selected ? " dhr-sp-quote-btn--active" : ""}`}
              onClick={handleGetQuote}
              disabled={!selected}
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </>
        )}

        {/* Quote Form */}
        {showForm && !submitted && (
          <div className="dhr-sp-form-wrap">
            {/* Selected option recap bubble */}
            <div className="dhr-sp-bubble-wrap">
              <div className="dhr-sp-bot-avatar">ID</div>
              <div className="dhr-sp-bubble">
                Great choice! Fill in your details and we'll get back to you shortly.
                <div className="dhr-sp-selected-tag">
                  <span className="dhr-sp-opt-icon">{selectedOption?.icon}</span>
                  {selectedOption?.label}
                </div>
              </div>
            </div>

            <div className="dhr-sp-form">
              <div className="dhr-sp-field">
                <label className="dhr-sp-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  Your Name
                </label>
                <input
                  className={`dhr-sp-input${errors.name ? " dhr-sp-input--err" : ""}`}
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => { setForm((f) => ({ ...f, name: e.target.value })); setErrors((er) => ({ ...er, name: "" })); }}
                />
                {errors.name && <span className="dhr-sp-err">{errors.name}</span>}
              </div>

              <div className="dhr-sp-field">
                <label className="dhr-sp-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Phone Number
                </label>
                <input
                  className={`dhr-sp-input${errors.number ? " dhr-sp-input--err" : ""}`}
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.number}
                  maxLength={10}
                  onChange={(e) => { setForm((f) => ({ ...f, number: e.target.value })); setErrors((er) => ({ ...er, number: "" })); }}
                />
                {errors.number && <span className="dhr-sp-err">{errors.number}</span>}
              </div>

              <div className="dhr-sp-field">
                <label className="dhr-sp-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email Address
                </label>
                <input
                  className={`dhr-sp-input${errors.email ? " dhr-sp-input--err" : ""}`}
                  type="email"
                  placeholder="yourname@email.com"
                  value={form.email}
                  onChange={(e) => { setForm((f) => ({ ...f, email: e.target.value })); setErrors((er) => ({ ...er, email: "" })); }}
                />
                {errors.email && <span className="dhr-sp-err">{errors.email}</span>}
              </div>

              <div className="dhr-sp-form-actions">
                <button className="dhr-sp-back-btn" onClick={() => setShowForm(false)}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back
                </button>
                <button className="dhr-sp-submit-btn" onClick={handleSubmit}>
                  Submit Request
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success state */}
        {submitted && (
          <div className="dhr-sp-success">
            <div className="dhr-sp-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="dhr-sp-success-title">Request Submitted!</p>
            <p className="dhr-sp-success-sub">
              Thank you, <strong>{form.name}</strong>! Our team will reach out to you at <strong>{form.number}</strong> shortly.
            </p>
            <button className="dhr-sp-done-btn" onClick={onClose}>Done</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DecorHero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [helpOpen, setHelpOpen] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 650);
    },
    [animating],
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { next(); return 0; }
        return p + 2;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="dhr-root">
      <section className="dhr-hero">
        {/* Slide background — full bleed */}
        <div key={current} className="dhr-bg">
          <img src={slide.bg} alt={slide.tag} />
          <div className="dhr-overlay" />
        </div>

        {/* Text content — container aligned */}
        <div className="dhr-body">
          <div className="dhr-container">
            <div className="dhr-text" key={`txt-${current}`}>
              <p className="dhr-tag">{slide.tag}</p>
              <h1 className="dhr-title">{slide.title}</h1>
              <p className="dhr-sub">{slide.sub}</p>
              <div className="dhr-btns">
                <Link to="/book-a-meeting" className="dhr-cta dhr-cta-primary">{slide.btn1}</Link>
                <Link to="/book-a-meeting" className="dhr-cta dhr-cta-outline">{slide.btn2}</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button className="dhr-arrow l" onClick={prev} aria-label="Previous"><ChevronLeft /></button>
        <button className="dhr-arrow r" onClick={next} aria-label="Next"><ChevronRight /></button>

        {/* Dots — container aligned */}
        <div className="dhr-dots-wrap">
          <div className="dhr-dots-container">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dhr-dot ${i === current ? "on" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="dhr-prog">
          <div className="dhr-prog-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Support Popup */}
        <SupportPopup open={helpOpen} onClose={() => setHelpOpen(false)} />

        {/* Help */}
        <button className="dhr-help" onClick={() => setHelpOpen((v) => !v)}>
          <span className="dhr-help-ic">?</span> Help
        </button>
      </section>
    </div>
  );
}