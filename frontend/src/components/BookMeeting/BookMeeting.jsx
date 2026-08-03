import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  CalendarDays,
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./BookMeeting.css";

const BookMeeting = () => {
  /* FORM STATE */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
  });

  /* SUCCESS STATE */
  const [sent, setSent] = useState(false);

  /* HANDLE INPUT */
  const handle = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* SUBMIT */
  const submit = (e) => {
    e.preventDefault();

    setSent(true);
  };

  return (
    <>
      <Breadcrumb />

      <div className="bm-page">
        <div className="bm-container">
          {/* HEADER */}
          <div className="bm-header">
            <h1>Book a Meeting</h1>
            <p>Schedule a consultation with our interior experts</p>
          </div>

          {/* FORM CARD */}
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
                  >
                    <option value="">-- Select Meeting Purpose --</option>

                    <option value="consultation">
                      Interior Design Consultation
                    </option>

                    <option value="residential">
                      Residential Project Discussion
                    </option>

                    <option value="commercial">
                      Commercial Space Planning
                    </option>

                    <option value="furniture">
                      Furniture & Decor Selection
                    </option>

                    <option value="custom">Custom Design Requirement</option>

                    <option value="renovation">Home Renovation Planning</option>

                    <option value="luxury">Luxury Interior Consultation</option>

                    <option value="quotation">
                      Pricing & Quotation Discussion
                    </option>

                    <option value="other">Other</option>
                  </select>
                </div>

                {/* MESSAGE */}
                {/* <div className="bm-field full">
                  <label>
                    <MessageSquare size={14} />
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handle}
                    placeholder="Describe your requirement..."
                  />
                </div> */}
              </div>

              {/* BUTTON */}
              <button type="submit" className={`bm-btn ${sent ? "sent" : ""}`}>
                {sent ? (
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
    </>
  );
};

export default BookMeeting;
