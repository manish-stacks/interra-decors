import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./Checkout.css";

/* ── Inline SVG Icons ── */
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 10a16 16 0 0 0 6.29 6.29l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconHome = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const IconCity = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="9" height="12" />
    <path d="M12 3h9v18H3V9l9-6z" />
    <path d="M7 13h2M7 17h2M15 7h2M15 11h2M15 15h2" />
  </svg>
);

const IconMapPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconMap = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" y1="3" x2="9" y2="18" />
    <line x1="15" y1="6" x2="15" y2="21" />
  </svg>
);

const IconWallet = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4z" />
  </svg>
);

const IconTruck = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
    <rect x="9" y="11" width="14" height="10" rx="2" />
    <circle cx="12" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
  </svg>
);

const IconCreditCard = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconLock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconBag = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const IconTag = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const IconReceipt = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z" />
    <line x1="8" y1="9" x2="16" y2="9" /><line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </svg>
);

const IconPercent = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const IconRupee = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12M6 8h12M6 13l8.5 8M6 8c0 3.3 2.7 5 6 5" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

/* ══════════════════════════════════════════
   Checkout Component
══════════════════════════════════════════ */
const Checkout = () => {
  const [payment, setPayment] = useState("cod");
  const [btnSuccess, setBtnSuccess] = useState(false);

  const handlePlaceOrder = () => {
    setBtnSuccess(true);
    setTimeout(() => setBtnSuccess(false), 2500);
  };

  return (
    <>
      <Breadcrumb />

      <section className="chk">
        <div className="chk-inner">

          {/* ── Header ── */}
          <div className="chk-header">
            <h1>Checkout</h1>
            <p>
              <IconShield /> Secure &amp; encrypted order
            </p>
          </div>

          <div className="chk-grid">

            {/* ── Left Column ── */}
            <div className="chk-left">

              {/* Contact Details */}
              <div className="chk-card">
                <div className="chk-card-label">
                  <span className="label-icon"><IconUser /></span>
                  Contact Details
                </div>

                <div className="input-wrap">
                  <span className="input-icon"><IconUser /></span>
                  <input className="chk-input" type="text" placeholder="Full Name" />
                </div>
                <div className="input-wrap">
                  <span className="input-icon"><IconMail /></span>
                  <input className="chk-input" type="email" placeholder="Email Address" />
                </div>
                <div className="input-wrap">
                  <span className="input-icon"><IconPhone /></span>
                  <input className="chk-input" type="tel" placeholder="Phone Number" />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="chk-card">
                <div className="chk-card-label">
                  <span className="label-icon"><IconMapPin /></span>
                  Shipping Address
                </div>

                <div className="input-wrap">
                  <span className="input-icon"><IconHome /></span>
                  <input className="chk-input" type="text" placeholder="Street Address" />
                </div>
                <div className="chk-row">
                  <div className="input-wrap">
                    <span className="input-icon"><IconCity /></span>
                    <input className="chk-input" type="text" placeholder="City" />
                  </div>
                  <div className="input-wrap">
                    <span className="input-icon"><IconMapPin /></span>
                    <input className="chk-input" type="text" placeholder="Pincode" />
                  </div>
                </div>
                <div className="input-wrap">
                  <span className="input-icon"><IconMap /></span>
                  <input className="chk-input" type="text" placeholder="State" />
                </div>
              </div>

              {/* Payment Method */}
              <div className="chk-card">
                <div className="chk-card-label">
                  <span className="label-icon"><IconWallet /></span>
                  Payment Method
                </div>

                <div className="chk-radio-group">
                  <label
                    className={`chk-radio-label ${payment === "cod" ? "active" : ""}`}
                    onClick={() => setPayment("cod")}
                  >
                    <div className="radio-dot">
                      <div className="radio-dot-inner"></div>
                    </div>
                    Cash on Delivery
                    <div className="pay-icon"><IconTruck /></div>
                  </label>

                  <label
                    className={`chk-radio-label ${payment === "online" ? "active" : ""}`}
                    onClick={() => setPayment("online")}
                  >
                    <div className="radio-dot">
                      <div className="radio-dot-inner"></div>
                    </div>
                    Card Payment
                    <div className="pay-icon"><IconCreditCard /></div>
                  </label>
                </div>

                {payment === "online" && (
                  <div className="card-fields">
                    <div className="input-wrap">
                      <span className="input-icon"><IconCreditCard /></span>
                      <input className="chk-input" type="text" placeholder="Card Number" />
                    </div>
                    <div className="card-row">
                      <div className="input-wrap">
                        <span className="input-icon"><IconCalendar /></span>
                        <input className="chk-input" type="text" placeholder="MM / YY" />
                      </div>
                      <div className="input-wrap">
                        <span className="input-icon"><IconLock /></span>
                        <input className="chk-input" type="text" placeholder="CVV" />
                      </div>
                    </div>
                    <div className="input-wrap">
                      <span className="input-icon"><IconUser /></span>
                      <input className="chk-input" type="text" placeholder="Name on Card" />
                    </div>
                  </div>
                )}
              </div>

            </div>
            {/* end chk-left */}

            {/* ── Right Column — Order Summary ── */}
            <div className="chk-right">

              <div className="order-title">
                <IconBag /> Order Summary
              </div>

              <div className="order-item">
                <div className="order-img">
                  <img
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=128&h=128&fit=crop"
                    alt="Luxury Chair"
                  />
                </div>
                <div className="order-info">
                  <div className="order-name">Luxury Chair</div>
                  <div className="order-sub">Qty: 1 · Ivory White</div>
                </div>
                <div className="order-price">₹999</div>
              </div>

              <div className="order-breakdown">
                <div className="order-row">
                  <span><IconReceipt /> Subtotal</span>
                  <span>₹999</span>
                </div>
                <div className="order-row">
                  <span><IconTruck /> Shipping</span>
                  <span className="free">Free</span>
                </div>
                <div className="order-row">
                  <span><IconPercent /> GST (18%)</span>
                  <span>₹179</span>
                </div>
                <div className="order-row total">
                  <span><IconRupee /> Total</span>
                  <span>₹1,178</span>
                </div>
              </div>

              <div className="promo-wrap">
                <input className="promo-input" type="text" placeholder="Promo code" />
                <button className="promo-btn">
                  <IconTag /> Apply
                </button>
              </div>

              <button
                className={`chk-place-btn ${btnSuccess ? "success" : ""}`}
                onClick={handlePlaceOrder}
              >
                {btnSuccess ? <IconCheck /> : <IconBag />}
                {btnSuccess ? "Order Placed!" : "Place Order"}
              </button>

              <div className="secure-note">
                <IconLock /> 256-bit SSL encrypted checkout
              </div>

            </div>
            {/* end chk-right */}

          </div>
          {/* end chk-grid */}

        </div>
      </section>
    </>
  );
};

export default Checkout;