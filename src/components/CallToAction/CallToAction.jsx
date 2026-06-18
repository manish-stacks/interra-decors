import { useState } from "react";
import "./CallToAction.css";
import ctaGirl from "../../assets/cta-girl.png";
export default function CallToAction() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [modalType, setModalType] = useState("meeting");

  const purposeOptions =
    modalType === "meeting"
      ? [
          { value: "", label: "Select Purpose of Meeting" },
          { value: "residential", label: "Residential Furnishing" },
          { value: "commercial", label: "Commercial / Office Setup" },
          { value: "hotel", label: "Hotel & Resort Project" },
          { value: "interior", label: "Interior Design Consultation" },
          { value: "bulk", label: "Bulk / Builder Project" },
          { value: "other", label: "Other" },
        ]
      : [
          { value: "", label: "Select Catalogue Type" },
          { value: "furniture", label: "Furniture Catalogue" },
          { value: "decor", label: "Home Decor Catalogue" },
          { value: "fabric", label: "Fabric & Furnishing Catalogue" },
          { value: "luxury", label: "Luxury Interior Collection" },
          { value: "complete", label: "Complete Product Catalogue" },
          { value: "other", label: "Other" },
        ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
  });
  const [errors, setErrors] = useState({});

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
    setSubmitted(false);
    setErrors({});
  };
  const closeModal = () => {
    setModalOpen(false);
    setSubmitted(false);
    setForm({ name: "", phone: "", email: "", purpose: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^[0-9+\s-]{7,15}$/.test(form.phone))
      e.phone = "Enter a valid number";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.purpose) e.purpose = "Please select a purpose";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  return (
    <>
      <section className="cta-root">
        <div className="cta-geo" aria-hidden="true">
          <div className="cta-geo-circle cta-geo-c1" />
          <div className="cta-geo-circle cta-geo-c2" />
          <div className="cta-geo-line cta-geo-l1" />
          <div className="cta-geo-line cta-geo-l2" />
        </div>

        <div className="cta-container">
          {/* ── LEFT ── */}
          <div className="cta-left">
            <span className="cta-eyebrow">
              <span className="cta-eyebrow-dot" />
              Get In Touch
              <span className="cta-eyebrow-dot" />
            </span>
            <h2 className="cta-heading">
              Discover Tailor-Made <em>Furnishing Solutions</em>
            </h2>

            <p className="cta-sub">
              Transform your interiors with premium curtains, blinds,
              wallpapers, and custom décor crafted to bring elegance and comfort
              to every space.
            </p>

            <div className="cta-buttons">
              {/* BOOK A MEETING */}
              <button
                className="cta-btn cta-btn-primary"
                onClick={() => openModal("meeting")}
              >
                <span className="cta-btn-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect
                      x="3"
                      y="4"
                      width="14"
                      height="13"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="3"
                      y1="8"
                      x2="17"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="7"
                      y1="2"
                      x2="7"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="13"
                      y1="2"
                      x2="13"
                      y2="6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <rect
                      x="6"
                      y="11"
                      width="3"
                      height="3"
                      rx="0.5"
                      fill="currentColor"
                      opacity="0.7"
                    />
                  </svg>
                </span>
                Book a Meeting
              </button>

              {/* REQUEST CATALOGUE */}
              <button
                className="cta-btn cta-btn-secondary"
                onClick={() => openModal("catalogue")}
              >
                <span className="cta-btn-icon">
                  <svg viewBox="0 0 20 20" fill="none">
                    <rect
                      x="4"
                      y="2"
                      width="12"
                      height="16"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="7"
                      y1="7"
                      x2="13"
                      y2="7"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="7"
                      y1="10"
                      x2="13"
                      y2="10"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <line
                      x1="7"
                      y1="13"
                      x2="11"
                      y2="13"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Request Catalogue
                <span className="cta-btn-arrow">→</span>
              </button>
            </div>
          </div>

          {/* ── RIGHT: animated border contact card ── */}
          <div className="cta-right">
            <img src={ctaGirl} alt="CTA Girl" />
            {/* <div className="cta-card-wrap">
              <svg
                className="cta-border-svg"
                viewBox="0 0 420 280"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="418"
                  height="278"
                  rx="15"
                  stroke="url(#borderGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="1200"
                  strokeDashoffset="1200"
                  className="cta-border-rect"
                />
                <defs>
                  <linearGradient id="borderGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="30%" stopColor="#c29e64" />
                    <stop offset="60%" stopColor="#f0d090" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="cta-card">
                <div className="cta-card-label">Reach Us Directly</div>

                <div className="cta-contact-items">
                  <div className="cta-contact-item">
                    <div className="cta-contact-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="cta-contact-body">
                      <span className="cta-contact-label">Call Us</span>
                      <span className="cta-contact-value"> <a href="tel:+919953493794">+91 9953493794</a></span>
                    </div>
                  </div>

                  <div className="cta-contact-item">
                    <div className="cta-contact-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect
                          x="2"
                          y="4"
                          width="20"
                          height="16"
                          rx="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M2 8l10 7 10-7"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    <div className="cta-contact-body">
                      <span className="cta-contact-label">Email Us</span>
                      <span className="cta-contact-value">
                       <a href="mailto:info@interradecors.com">info@interradecors.com</a> 
                      </span>
                    </div>
                  </div>

                  <div className="cta-contact-item">
                    <div className="cta-contact-icon">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="12"
                          cy="9"
                          r="2.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                    <div className="cta-contact-body">
                      <span className="cta-contact-label">Visit Us</span>
                      <span className="cta-contact-value">
                        Shop No. 129, 1st Floor, Jmd Suburbio, 67, Badshahpur Sohna Rd, Sector 67, Gurugram, Haryana 122101
                      </span>
                    </div>
                  </div>
                </div>

                <div className="cta-card-footer">
                  <span className="cta-card-footer-dot" />
                  <span>Creating Luxury Interiors with Modern Elegance</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BOOKING MODAL
      ══════════════════════════════ */}
      {modalOpen && (
        <div
          className="modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className={`modal-box${submitted ? " modal-box--success" : ""}`}>
            {/* Close */}
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              <svg viewBox="0 0 20 20" fill="none">
                <line
                  x1="5"
                  y1="5"
                  x2="15"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="5"
                  x2="5"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {!submitted ? (
              <>
                {/* Modal Header */}
                <div className="modal-header">
                  <div className="modal-icon-wrap">
                    <svg viewBox="0 0 28 28" fill="none">
                      <rect
                        x="2"
                        y="5"
                        width="24"
                        height="21"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <line
                        x1="2"
                        y1="12"
                        x2="26"
                        y2="12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <line
                        x1="9"
                        y1="2"
                        x2="9"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <line
                        x1="19"
                        y1="2"
                        x2="19"
                        y2="8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <rect
                        x="8"
                        y="16"
                        width="4"
                        height="4"
                        rx="1"
                        fill="currentColor"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="modal-title">
                      {modalType === "meeting"
                        ? "Book a Meeting"
                        : "Request Catalogue"}
                    </h3>{" "}
                    <p className="modal-subtitle">
                      {modalType === "meeting"
                        ? "Our expert will get back to you within 24 hours"
                        : "Get our premium catalogue delivered to your inbox"}
                    </p>
                  </div>
                </div>

                {/* Form */}
                <div className="modal-form">
                  {/* Name */}
                  <div
                    className={`modal-field${errors.name ? " modal-field--error" : ""}`}
                  >
                    <label className="modal-label">Full Name</label>
                    <div className="modal-input-wrap">
                      <span className="modal-input-icon">
                        <svg viewBox="0 0 20 20" fill="none">
                          <circle
                            cx="10"
                            cy="7"
                            r="3.5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                          <path
                            d="M3 17c0-3.3 3.1-6 7-6s7 2.7 7 6"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <input
                        className="modal-input"
                        type="text"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>
                    {errors.name && (
                      <span className="modal-error">{errors.name}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div
                    className={`modal-field${errors.phone ? " modal-field--error" : ""}`}
                  >
                    <label className="modal-label">Phone Number</label>
                    <div className="modal-input-wrap">
                      <span className="modal-input-icon">
                        <svg viewBox="0 0 20 20" fill="none">
                          <path
                            d="M5.5 9c1.2 2.4 3.2 4.3 5.5 5.5l1.8-1.8c.3-.3.6-.3.9-.2.9.3 1.9.5 3 .5.5 0 .8.3.8.8V17c0 .5-.3.8-.8.8C8.8 17.8 3 12 3 4.8c0-.5.3-.8.8-.8H7c.5 0 .8.3.8.8 0 1.1.2 2.1.5 3 .1.3 0 .6-.2.9L5.5 9Z"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <input
                        className="modal-input"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    {errors.phone && (
                      <span className="modal-error">{errors.phone}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div
                    className={`modal-field${errors.email ? " modal-field--error" : ""}`}
                  >
                    <label className="modal-label">Email Address</label>
                    <div className="modal-input-wrap">
                      <span className="modal-input-icon">
                        <svg viewBox="0 0 20 20" fill="none">
                          <rect
                            x="2"
                            y="4"
                            width="16"
                            height="12"
                            rx="2"
                            stroke="currentColor"
                            strokeWidth="1.4"
                          />
                          <path
                            d="M2 7l8 5 8-5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <input
                        className="modal-input"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                    {errors.email && (
                      <span className="modal-error">{errors.email}</span>
                    )}
                  </div>

                  {/* Purpose dropdown */}
                  <div
                    className={`modal-field${errors.purpose ? " modal-field--error" : ""}`}
                  >
                    <label className="modal-label">
                      {modalType === "meeting"
                        ? "Purpose of Meeting"
                        : "Catalogue Requirement"}
                    </label>{" "}
                    <div className="modal-input-wrap modal-select-wrap">
                      <span className="modal-input-icon">
                        <svg viewBox="0 0 20 20" fill="none">
                          <path
                            d="M4 6h12M4 10h8M4 14h5"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      <select
                        className="modal-input modal-select"
                        value={form.purpose}
                        onChange={(e) =>
                          handleChange("purpose", e.target.value)
                        }
                      >
                        {purposeOptions.map((o) => (
                          <option
                            key={o.value}
                            value={o.value}
                            disabled={o.value === ""}
                          >
                            {o.label}
                          </option>
                        ))}
                      </select>
                      <span className="modal-select-arrow">
                        <svg viewBox="0 0 16 16" fill="none">
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                    {errors.purpose && (
                      <span className="modal-error">{errors.purpose}</span>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button className="modal-submit" onClick={handleSubmit}>
                  {modalType === "meeting"
                    ? "Confirm Booking"
                    : "Request Catalogue"}

                  <svg viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <p className="modal-privacy">
                  🔒 Your details are safe with us. No spam, ever.
                </p>
              </>
            ) : (
              /* ── SUCCESS STATE ── */
              <div className="modal-success">
                <div className="modal-success-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle
                      cx="24"
                      cy="24"
                      r="22"
                      stroke="#c29e64"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14 24l8 8 12-14"
                      stroke="#c29e64"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="modal-success-title">
                  {modalType === "meeting"
                    ? "Booking Confirmed!"
                    : "Catalogue Requested!"}
                </h3>{" "}
                <p className="modal-success-msg">
                  Thank you, <strong>{form.name}</strong>!<br />
                  Our team will reach you at <strong>{form.phone}</strong>{" "}
                  within 24 hours.
                </p>
                <button
                  className="modal-submit modal-submit--outline"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
