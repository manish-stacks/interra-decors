import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  CalendarDays,
  User,
  Mail,
  Phone,
} from "lucide-react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./BookMeeting.css";
import { API_URL } from "../../constant/Url";

const BookMeeting = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // ─── Toast state ──────────────────────────────────────────────
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const handle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setSent(false);

    try {
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "book_meeting",
          name: form.name,
          email: form.email,
          phone: form.phone,
          purpose: form.purpose,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSent(true);
        // ── Show success toast ──
        setToast({
          show: true,
          message: "✅ Meeting booked successfully! We'll contact you shortly.",
          type: "success",
        });
        setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
        // Optionally reset form
        // setForm({ name: "", email: "", phone: "", purpose: "", message: "" });
      } else {
        setToast({
          show: true,
          message: `❌ ${data.error || "Submission failed. Please try again."}`,
          type: "error",
        });
        setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
      }
    } catch (error) {
      console.error(error);
      setToast({
        show: true,
        message: "❌ Network error. Please check your connection.",
        type: "error",
      });
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Breadcrumb />

      <div className="bm-page">
        <div className="bm-container">
          <div className="bm-header">
            <h1>Book a Meeting</h1>
            <p>Schedule a consultation with our interior experts</p>
          </div>

          <div className="bm-form-card">
            <form onSubmit={submit}>
              <div className="bm-grid">
                {/* NAME */}
                <div className="bm-field">
                  <label>
                    <User size={14} />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Enter your full name"
                    required
                    disabled={loading}
                  />
                </div>

                {/* EMAIL */}
                <div className="bm-field">
                  <label>
                    <Mail size={14} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handle}
                    placeholder="you@example.com"
                    required
                    disabled={loading}
                  />
                </div>

                {/* PHONE */}
                <div className="bm-field">
                  <label>
                    <Phone size={14} />
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+91 XXXXX XXXXX"
                    required
                    disabled={loading}
                  />
                </div>

                {/* SELECT PURPOSE */}
                <div className="bm-field">
                  <label>
                    <CalendarDays size={14} />
                    Meeting Purpose
                  </label>
                  <select
                    name="purpose"
                    value={form.purpose}
                    onChange={handle}
                    required
                    defaultValue=""
                    disabled={loading}
                  >
                    <option value="">-- Select Meeting Purpose --</option>
                    <option value="Interior Design Consultation">Interior Design Consultation</option>
                    <option value="Residential Project Discussion">Residential Project Discussion</option>
                    <option value="Commercial Space Planning">Commercial Space Planning</option>
                    <option value="Furniture & Decor Selection">Furniture & Decor Selection</option>
                    <option value="Custom Design Requirement">Custom Design Requirement</option>
                    <option value="Home Renovation Planning">Home Renovation Planning</option>
                    <option value="Luxury Interior Consultation">Luxury Interior Consultation</option>
                    <option value="Pricing & Quotation Discussion">Pricing & Quotation Discussion</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* ── BUTTON ── */}
              <button
                type="submit"
                className={`bm-btn ${sent ? "sent" : ""} ${loading ? "loading" : ""}`}
                disabled={loading || sent}
              >
                {loading ? (
                  <>
                    <span className="spinner" /> Submitting…
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle size={16} />
                    Meeting Booked
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Book Now
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── TOAST NOTIFICATION ── */}
      {toast.show && (
        <div className={`bm-toast ${toast.type === "success" ? "bm-toast-success" : "bm-toast-error"}`}>
          <div className="bm-toast-content">
            <span className="bm-toast-icon">
              {toast.type === "success" ? "✅" : "❌"}
            </span>
            <span className="bm-toast-message">{toast.message}</span>
          </div>
          <button
            className="bm-toast-close"
            onClick={() => setToast({ show: false, message: "", type: "" })}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default BookMeeting;