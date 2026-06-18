import { useState } from "react";
import "./ServicesSection.css";

const services = [
  {
    id: 1,
    title: "Site Measurement",
    description: "Precise on-site measurements ensuring every piece fits perfectly in your space.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:50,height:50}}>
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="13" x2="34" y2="13" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="13" y1="6" x2="13" y2="34" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="16" width="12" height="12" rx="1" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="22" y1="16" x2="22" y2="28" stroke="currentColor" strokeWidth="1"/>
        <line x1="16" y1="22" x2="28" y2="22" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Customization as per Design",
    description: "Bespoke furnishings crafted precisely to your vision, style, and specifications.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:50,height:50}}>
        <path d="M8 32L14 26L26 14L32 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="32" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 32L12 30L10 28L8 32Z" fill="currentColor"/>
        <path d="M18 22L22 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="6" y="28" width="10" height="4" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Bulk Project Supply",
    description: "Seamless large-scale furnishing supply for hotels, offices, and commercial projects.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:50,height:50}}>
        <rect x="6" y="18" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="14" y="12" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="22" y="16" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="6" y1="32" x2="34" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 8L22 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
        <path d="M24 6L24 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Installation Support",
    description: "Expert installation teams ensuring everything is placed to perfection, on time.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:50,height:50}}>
        <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 16L28 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="29" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M16 20L19 23L25 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: "After-Sales Service",
    description: "Dedicated support and maintenance long after your furnishing project is complete.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:50,height:50}}>
        <path d="M20 8C13.4 8 8 13.4 8 20s5.4 12 12 12 12-5.4 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M28 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M20 17v3l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="services-root">
      <div className="grain-overlay" />
      <div className="services-inner">

        {/* Header */}
        <div className="header-layout">
          <div>
            <div className="tag-line">
              <div className="tag-dot" />
              <span>What We Offer</span>
              <div className="tag-dot" />
            </div>
            <div className="divider-line" />
            <h2 className="section-heading">
              Complete <em> Furnishing </em> Services
            </h2>
          </div>
          <p className="section-subheading">
            We provide end-to-end furnishing services with a professional and hassle-free approach — from the first site visit to the final installation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="cards-grid">
          {services.map((svc) => (
            <div
              key={svc.id}
              className={`service-card${hoveredId === svc.id ? " hovered" : ""}`}
              onMouseEnter={() => setHoveredId(svc.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <span className="card-number">0{svc.id}</span>
              <div className="icon-wrap">{svc.icon}</div>
              <h3 className="card-title">{svc.title}</h3>
              <p className="card-desc">{svc.description}</p>
              <div className="card-arrow">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 16L16 4M16 4H8M16 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Tagline Bar */}
        <div className="tagline-bar">
          <div className="tagline-icon">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:16,height:16}}>
              <path d="M3 10l7 7 7-7M10 3v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="tagline-text">
            <strong>From Selection to Installation</strong> — We Manage Everything.
          </p>
          <div className="tagline-divider" />
        </div>

      </div>
    </section>
  );
}