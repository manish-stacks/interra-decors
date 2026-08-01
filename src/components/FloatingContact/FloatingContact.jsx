"use client";

import { Link } from "react-router-dom";
import "./FloatingContact.css";
import { Phone, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        href="tel:+919953493794"
        className="contact-btn call"
        aria-label="Call"
      >
        <PhoneCall size={22} />
      </a>

      <a
        href="https://wa.me/919953493794"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-btn whatsapp"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
