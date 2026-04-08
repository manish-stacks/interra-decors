import React from "react";
import "./introduction.css";
import { Link } from "react-router-dom";

import About01 from "../../assets/about-us-1.png"
import About02 from "../../assets/about-us-2.png"

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Happy Clients" },
];

const highlights = [
  "Customized Furnishing Solutions",
  "Premium Quality Products",
  "Expert Design Consultation",
  "End-to-End Project Execution",
];

export default function IntroductionSection() {
  return (
    <section className="intro-root">
      {/* decorative background elements */}
      <div className="intro-deco-circle intro-deco-1" />
      <div className="intro-deco-circle intro-deco-2" />
      <div className="intro-deco-line" />

      <div className="intro-container">
        {/* ══ LEFT — IMAGE ══ */}
        <div className="intro-img-col">
          {/* Main image */}
          <div className="intro-img-main-wrap">
            <img
              src={About01}
              alt="Premium Interior by Interra Decors"
              className="intro-img-main"
            />
            <div className="intro-img-overlay" />

            {/* Gold tag on image */}
            <div className="intro-img-tag">
              <span className="intro-img-tag-big">10+</span>
              <span className="intro-img-tag-small">Years of Excellence</span>
            </div>
          </div>

          {/* Accent image — offset bottom right */}
          <div className="intro-img-accent-wrap">
            <img
              src={About02}
              alt="Interior detail"
              className="intro-img-accent"
            />
            <div className="intro-img-overlay" />
          </div>

          {/* Stats bar */}
          <div className="intro-stats">
            {stats.map((s, i) => (
              <div key={i} className="intro-stat">
                <span className="intro-stat-val">{s.value}</span>
                <span className="intro-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══ RIGHT — CONTENT ══ */}
        <div className="intro-content-col">
          {/* Eyebrow */}
          <div className="intro-eyebrow">
            <span className="intro-eyebrow-line" />
            <span className="intro-eyebrow-txt">About Interra Decors</span>
          </div>

          {/* Heading */}
          <h2 className="intro-heading">
            Premium Furnishing
            <br />
            for <em>Modern</em> Spaces
          </h2>

          {/* Gold rule */}
          <div className="intro-rule" />

          {/* Description */}
          <p className="intro-para">
            Interra Decors is dedicated to crafting exceptional home
            furnishings, décor, and interior solutions, guided by the principle
            that thoughtful design enhances daily life. We specialize in
            creating <strong> sophisticated </strong> and{" "}
            <strong> functional spaces </strong>, thoughtfully blending
            <strong> aesthetic vision </strong> with{" "}
            <strong> practical needs </strong>.
          </p>
          <p className="intro-para">
            Our commitment to{" "}
            <strong>
              {" "}
              quality craftsmanship, innovative design, and sustainable
              material{" "}
            </strong>{" "}
            sourcing ensures that each curated piece contributes to a meaningful
            and enduring home environment.
          </p>

          {/* Highlight list */}
          <ul className="intro-list">
            {highlights.map((h, i) => (
              <li key={i} className="intro-list-item">
                <span className="intro-list-dot" />
                {h}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="intro-btns">
            <Link to="/book-a-meeting" className="intro-btn-gold">
              Book a Meeting
              <span className="intro-btn-icon">
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
              </span>
            </Link>
            <Link to="about" className="intro-btn-ghost">Explore More</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
