import "./WhyTrust.css";

const clients = [
  {
    label: "Premium Residential",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 18L20 7L33 18V34H25V26H15V34H7V18Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Interior Designers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 30L16 24L28 12L34 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="34"
          cy="8"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M10 30L13 28.5L11.5 27L10 30Z" fill="currentColor" />
        <path
          d="M20 22L24 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="7"
          y="27"
          width="9"
          height="4"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    label: "Architects",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="7"
          y="7"
          width="26"
          height="26"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="7"
          y1="15"
          x2="33"
          y2="15"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <line
          x1="15"
          y1="7"
          x2="15"
          y2="33"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M20 20 L27 27"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="20"
          r="2"
          fill="currentColor"
          opacity="0.3"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    ),
  },
  {
    label: "Hotels & Resorts",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="8"
          y="10"
          width="24"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 18h24" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M20 10V7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="6" r="1.5" fill="currentColor" opacity="0.5" />
        <rect
          x="13"
          y="22"
          width="5"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="22"
          y="22"
          width="5"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="8"
          y1="34"
          x2="32"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Corporate Offices",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="10"
          y="6"
          width="20"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="10"
          y1="13"
          x2="30"
          y2="13"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="10"
          y1="20"
          x2="30"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="10"
          y1="27"
          x2="30"
          y2="27"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <rect
          x="16"
          y="29"
          width="8"
          height="5"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <line
          x1="6"
          y1="34"
          x2="34"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Builders & Developers",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 34V18l10-10 10 10v16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M24 34V26h-8v8" stroke="currentColor" strokeWidth="1.3" />
        <path d="M28 18h6v16h-6" stroke="currentColor" strokeWidth="1.3" />
        <line
          x1="6"
          y1="34"
          x2="34"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "300+", label: "Projects Delivered" },
  { value: "12+", label: "Years of Experience" },
  { value: "95%", label: "Happy Customers" },
  { value: "50+", label: "Vendor Partners" },
];

export default function TrustSection() {
  return (
    <section className="wt-root">
      <div className="wt-bg-lines" aria-hidden="true">
        <div className="wt-line wt-line-1" />
        <div className="wt-line wt-line-2" />
        <div className="wt-line wt-line-3" />
      </div>
      {/* ── DIVIDER ── */}
      <div className="wt-divider">
        <div className="wt-divider-line" />
        <span className="wt-divider-badge">Trusted Since Day One</span>
        <div className="wt-divider-line" />
      </div>

      <div className="wt-container">
        {/* ── TRUST & CLIENT BASE ── */}
        <div className="wt-bottom">
          <div className="wt-trust-header">
            <span className="wt-eyebrow wt-eyebrow-center">
              Our Client Base
            </span>
            <h2 className="wt-heading wt-heading-center">
              Trusted by <em>Professionals.</em>
              <br />
              Preferred by <em>Homeowners.</em>
            </h2>
            <p className="wt-trust-sub">
              We proudly serve a diverse range of clients — built on strong
              networks, repeat business, and referral-based trust.
            </p>
          </div>

          <div className="wt-stats">
            {stats.map((s) => (
              <div className="wt-stat" key={s.label}>
                <span className="wt-stat-value">{s.value}</span>
                <span className="wt-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="wt-clients">
            {clients.map((c) => (
              <div className="wt-client-card" key={c.label}>
                <div className="wt-client-icon">{c.icon}</div>
                <span className="wt-client-label">{c.label}</span>
              </div>
            ))}
          </div>

          <div className="wt-trust-note">
            <div className="wt-trust-note-dot" />
            <p>Strong network · Repeat clients · Referral-based business</p>
          </div>
        </div>
      </div>
    </section>
  );
}
