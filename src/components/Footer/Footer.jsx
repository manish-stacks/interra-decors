import { useState } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const navLinks = {
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/our-projects" },
    { name: "Team", path: "/our-team" },
    { name: "Careers", path: "/career" },
    { name: "Press", path: "#" },
  ],
  Services: [
    { name: "Site Measurement", path: "/our-services" },
    { name: "Custom Furnishing", path: "/our-services" },
    { name: "Bulk Supply", path: "/our-services" },
    { name: "Installation", path: "/our-services" },
    { name: "After-Sales", path: "/our-services" },
  ],
  Products: [
    { name: "Curtains", path: "/all-products" },
    { name: "Upholstery", path: "/all-products" },
    { name: "Blinds & Curtain Tracks", path: "/all-products" },
    { name: "Wallpaper", path: "/all-products" },
    { name: "Bed & Bath Linens", path: "/all-products" },
    { name: "Mattresses", path: "/all-products" },
    { name: "Motorized & Automation Solutions", path: "/all-products" },
    { name: "Rugs & Carpets", path: "/all-products" },
    { name: "Wooden Flooring", path: "/all-products" },
    { name: "Wall-to-Wall Carpets", path: "/all-products" },
  ],
  Support: [
    { name: "Book a Meeting", path: "/book-a-meeting" },
    { name: "Request Catalogue", path: "/request-catalogue" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Blog", path: "/blogs" },
  ],
};

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/interradecors?igsh=MXhveWY2cm9sMWFvcQ==",

    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle
          cx="10"
          cy="10"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="2"
          width="16"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <line
          x1="6"
          y1="8.5"
          x2="6"
          y2="14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="6" cy="6.2" r="0.9" fill="currentColor" />
        <path
          d="M9.5 8.5v1.2c.5-1 1.4-1.4 2.5-1.4 1.8 0 2.5 1.2 2.5 2.8V14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "#",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <path
          d="M17 10a7 7 0 1 1-2.05-4.95L17 3l-1.85 3.05A7 7 0 0 1 17 10Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M7 8.5c.5 1.5 1.5 2.5 3 3l.8-.8c.2-.2.5-.2.7 0l1.3 1.3c.2.2.2.5 0 .7-.8.8-2 1-3-.2C8 11.3 7 9.5 7 8.5Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 20 20" fill="none">
        <rect
          x="2"
          y="4"
          width="16"
          height="12"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M8.5 7.5l4 2.5-4 2.5V7.5Z" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
];

const certBadges = [
  "ISO 9001:2015",
  "GST Registered",
  "MSME Registered",
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subState, setSubState] = useState("idle"); // idle | success | error

  const handleSubscribe = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setSubState("error");
      return;
    }
    setSubState("success");
    setEmail("");
    setTimeout(() => setSubState("idle"), 4000);
  };

  return (
    <footer className="ft-root">
      {/* ── BG DECORATIONS ── */}
      <div className="ft-bg" aria-hidden="true">
        <div className="ft-bg-circle ft-bg-c1" />
        <div className="ft-bg-circle ft-bg-c2" />
        <svg
          className="ft-bg-lines"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <line
            x1="0"
            y1="300"
            x2="1200"
            y2="300"
            stroke="#c29e64"
            strokeWidth="0.4"
            opacity="0.06"
          />
          <line
            x1="300"
            y1="0"
            x2="300"
            y2="600"
            stroke="#c29e64"
            strokeWidth="0.4"
            opacity="0.05"
          />
          <line
            x1="900"
            y1="0"
            x2="900"
            y2="600"
            stroke="#c29e64"
            strokeWidth="0.4"
            opacity="0.05"
          />
          <path
            d="M0 500 Q300 450 600 500 Q900 550 1200 500"
            stroke="#c29e64"
            strokeWidth="0.6"
            opacity="0.06"
            fill="none"
          />
        </svg>
      </div>

      <div className="ft-inner">
        {/* ══ TOP BAND — newsletter ══ */}
        <div className="ft-newsletter">
          <div className="ft-nl-left">
            <span className="ft-nl-eyebrow">Stay Inspired</span>
            <h3 className="ft-nl-heading">
              Get Design Tips & Exclusive Offers
            </h3>
          </div>
          <div className="ft-nl-right">
            <div
              className={`ft-nl-form${subState === "error" ? " ft-nl-form--err" : ""}`}
            >
              <span className="ft-nl-icon">
                <svg viewBox="0 0 18 18" fill="none">
                  <rect
                    x="1"
                    y="3"
                    width="16"
                    height="12"
                    rx="2.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M1 6.5l8 5 8-5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                className="ft-nl-input"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubState("idle");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              />
              <button className="ft-nl-btn" onClick={handleSubscribe}>
                {subState === "success" ? (
                  <svg
                    viewBox="0 0 18 18"
                    fill="none"
                    style={{ width: 16, height: 16 }}
                  >
                    <path
                      d="M3 9l5 5 7-8"
                      stroke="#0f0e0c"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            {subState === "error" && (
              <p className="ft-nl-err">Please enter a valid email address.</p>
            )}
            {subState === "success" && (
              <p className="ft-nl-ok">You're subscribed! Thank you.</p>
            )}
          </div>
        </div>

        {/* ══ MAIN GRID ══ */}
        <div className="ft-main">
          {/* Brand column */}
          <div className="ft-brand">
            {/* Logo wordmark */}
            <div className="ft-logo">
              <a href="/">
                <img src={logo} alt="Interra Decors Logo" className="" />
              </a>
            </div>

            <p className="ft-tagline">
              Transforming spaces with premium furnishing solutions — from
              selection to installation.
            </p>

            {/* Contact quick info */}
            <div className="ft-contact-list">
              <a href="tel:+919953493794" className="ft-contact-row">
                <span className="ft-contact-ic">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4.4 7.2c.9 1.9 2.5 3.4 4.4 4.4l1.5-1.5c.2-.2.5-.3.7-.1.7.3 1.5.4 2.4.4.4 0 .7.3.7.7v2.3c0 .4-.3.7-.7.7C6.4 14 2 9.6 2 4.3c0-.4.3-.7.7-.7h2.3c.4 0 .7.3.7.7 0 .9.1 1.7.4 2.4.1.2 0 .5-.1.7L4.4 7.2Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                +91 9953493794
              </a>
              <a
                href="mailto:info@interradecors.com"
                className="ft-contact-row"
              >
                <span className="ft-contact-ic">
                  <svg viewBox="0 0 16 16" fill="none">
                    <rect
                      x="1"
                      y="3"
                      width="14"
                      height="10"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M1 5.5l7 4.5 7-4.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                info@interradecors.com
              </a>
              <span className="ft-contact-row">
                <span className="ft-contact-ic">
                  <svg viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1C5.4 1 3 3.1 3 6c0 3.5 5 9 5 9s5-5.5 5-9c0-2.9-2.4-5-5-5Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="8"
                      cy="6"
                      r="1.8"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>
                Shop No. 129, 1st Floor, Jmd Suburbio 67, Badshahpur Sohna Rd, Sector 67, Gurugram, Haryana 122101
              </span>
            </div>

            {/* Socials */}
            <div className="ft-socials">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="ft-social-btn"
                  target="_blank"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([heading, links]) => (
            <div className="ft-nav-col" key={heading}>
              <h4 className="ft-nav-heading">{heading}</h4>
              <ul className="ft-nav-list">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.path} className="ft-nav-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ══ CERT BADGES ══ */}
        <div className="ft-certs">
          {certBadges.map((b) => (
            <div className="ft-cert" key={b}>
              <span className="ft-cert-dot" />
              {b}
            </div>
          ))}
        </div>

        {/* ══ BOTTOM BAR ══ */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} Interra Decors. All rights reserved.
          </p>
          {/* <div className="ft-bottom-links">
            <a href="#" className="ft-bottom-link">
              Privacy Policy
            </a>
            <span className="ft-bottom-sep">·</span>
            <a href="#" className="ft-bottom-link">
              Terms of Use
            </a>
            <span className="ft-bottom-sep">·</span>
            <a href="#" className="ft-bottom-link">
              Sitemap
            </a>
          </div> */}
          <p className="ft-made">Developed By Hover Business Services LLP</p>
        </div>
      </div>
    </footer>
  );
}
