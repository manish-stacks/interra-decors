import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Send,
  Lock,
  ExternalLink,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./Contact.css";
import TrustSection from "../../components/WhyTrust/Trustsection";
import { API_URL } from "../../constant/Url";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    // ── 1. PREVENT DEFAULT EARLY ──
    e.preventDefault();
    e.stopPropagation(); // extra safety

    // ── 2. VALIDATE ──
    if (!form.name || !form.email || !form.message) {
      setToast({
        show: true,
        message: "Please fill in all required fields.",
        type: "error",
      });
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
      return;
    }

    setLoading(true);
    setToast({ show: false, message: "", type: "" });

    try {
      // ── 3. CHECK API_URL ──
      if (!API_URL) {
        throw new Error("API_URL is not defined. Check your constant/Url.js");
      }

      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToast({
          show: true,
          message: "✅ Message sent! We'll get back to you soon.",
          type: "success",
        });
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setToast({
          show: true,
          message: `❌ ${data.error || "Server error. Please try again."}`,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Submit error:", error);
      setToast({
        show: true,
        message: `❌ ${error.message || "Network error. Please check your connection."}`,
        type: "error",
      });
    } finally {
      setLoading(false);
      // reset toast after 5 seconds
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 5000);
    }
  };

  return (
    <>
      <Breadcrumb />

      <div className="cp-page">
        <div className="cp-container">
          {/* ── HERO ── */}
          <div className="cp-hero">
            <div className="cp-hero-left">
              <span className="cp-hero-tag">
                <MessageSquare size={11} /> Let's Connect
              </span>
              <h1>
                Let's Build <em> Something </em> Together
              </h1>
            </div>
            <div className="cp-hero-right">
              <p className="cp-hero-desc">
                Whether it's a dream home, a commercial space, or a hospitality
                project — we'd love to hear from you and bring your vision to
                life.
              </p>
            </div>
          </div>

          {/* ── MAIN GRID ── */}
          <div className="cp-grid">
            {/* LEFT COLUMN */}
            <div className="cp-left">
              {/* Contact Info Card */}
              <div className="cp-info-card">
                <h3>Contact Details</h3>

                <div className="cp-detail">
                  <div className="cp-detail-icon">
                    <Phone size={17} />
                  </div>
                  <div className="cp-detail-text">
                    <label>Phone</label>
                    <span>+91 99534 93794</span>
                  </div>
                </div>

                <div className="cp-detail">
                  <div className="cp-detail-icon">
                    <Mail size={17} />
                  </div>
                  <div className="cp-detail-text">
                    <label>Email</label>
                    <span>info@interradecors.com</span>
                  </div>
                </div>

                <div className="cp-detail">
                  <div className="cp-detail-icon">
                    <MapPin size={17} />
                  </div>
                  <div className="cp-detail-text">
                    <label>Address</label>
                    <span>
                      Shop No. 129, 1st Floor, Jmd Suburbio 67, Badshahpur Sohna
                      Rd, Sector 67, Gurugram, Haryana 122101
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Card */}
              <div className="cp-social-card">
                <h4>Follow Us</h4>
                <div className="cp-socials">
                  <a
                    className="cp-social-btn"
                    href="https://www.instagram.com/interradecors?igsh=MXhveWY2cm9sMWFvcQ=="
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    className="cp-social-btn"
                    href="https://www.linkedin.com/company/interra-decors/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    className="cp-social-btn"
                    href="https://www.facebook.com/share/1FwPDe4mfd/"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="cp-right">
              {/* Inquiry Form */}
              <div className="cp-form-card">
                <h3>Send an Inquiry</h3>
                <p>We'll get back to you within 24 hours.</p>

                <form onSubmit={submit}>
                  <div className="cp-form-row">
                    <div className="cp-field">
                      <label>Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="cp-field">
                      <label>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="cp-field">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div className="cp-field">
                      <label>Service Type</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        <option>Residential Design</option>
                        <option>Commercial Design</option>
                        <option>Hospitality Project</option>
                        <option>Renovation</option>
                        <option>Consultation</option>
                      </select>
                    </div>

                    <div className="cp-field full">
                      <label>Your Message *</label>
                      <textarea
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, timeline, and budget…"
                        required
                      />
                    </div>
                  </div>

                  <div className="cp-submit-row">
                    <p className="cp-submit-note">
                      <Lock size={11} /> Your information is private &amp;
                      secure.
                    </p>
                    <button
                      type="submit"
                      className={`cp-submit-btn${loading ? " loading" : ""}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <>Sending…</>
                      ) : (
                        <>
                          <Send size={13} /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Map Card */}
              <div className="cp-map-card">
                <div className="cp-map-header">
                  <h4>
                    <MapPin size={15} /> Our Location
                  </h4>
                  <a
                    className="cp-map-link"
                    href="https://maps.google.com/?q=Krishna+Nagar,+Delhi,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps <ExternalLink size={10} />
                  </a>
                </div>
                <iframe
                  className="cp-map-embed"
                  title="Office Location"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1875056635895!2d77.0555897!3d28.383404099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d238424d20603%3A0xe20206a5097592e2!2sInterra%20Decors!5e0!3m2!1sen!2sin!4v1781854052185!5m2!1sen!2sin"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustSection />

      {/* ── TOAST ── */}
      {toast.show && (
        <div
          className={`cp-toast ${
            toast.type === "error" ? "cp-toast-error" : "cp-toast-success"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle size={15} color="#1db9af" />
          ) : (
            <span>⚠️</span>
          )}
          {toast.message}
        </div>
      )}
    </>
  );
};

export default Contact;
