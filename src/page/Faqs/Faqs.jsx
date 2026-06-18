import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import React, { useId, useMemo, useState } from "react";
import "./faqsSection.css";
const faqData = [
  {
    category: "Company",
    items: [
      {
        question: "What does Interra Decors do?",
        answer:
          "We help homeowners and design professionals furnish entire spaces under one roof — flooring, curtains, furniture and lighting — backed by a vetted vendor network and an in-house design team.",
      },
      {
        question: "Where can I see your products in person?",
        answer:
          "Visit our showroom to browse fabric swatches, flooring samples and furniture in person, or book a virtual consultation if you're not nearby.",
      },
      {
        question: "Do you work with interior designers and contractors?",
        answer:
          "Yes. We offer trade pricing and dedicated account support for designers, architects and contractors working on residential or commercial projects.",
      },
      {
        question: "How do I get in touch with your team?",
        answer:
          "Email hello@interradecors.com or use the contact form on our site — our team typically replies within one business day.",
      },
    ],
  },
  {
    category: "Curtains & Blinds",
    items: [
      {
        question: "Can curtains and blinds be made to custom sizes?",
        answer:
          "Every order is made to your exact window measurements. Our team will guide you through measuring, or arrange an in-home measurement visit.",
      },
      {
        question: "Can I order fabric samples before committing?",
        answer:
          "Yes — we send up to five physical fabric swatches free of charge so you can check colour and texture against your space before ordering.",
      },
      {
        question: "Do you offer installation?",
        answer:
          "Professional installation is available in most service areas and can be added at checkout, or booked separately after delivery.",
      },
      {
        question: "How long does a custom order take to arrive?",
        answer:
          "Custom curtains and blinds typically take three to four weeks to manufacture, plus delivery time. We'll confirm an estimated date when you order.",
      },
    ],
  },
  {
    category: "Orders",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards, UPI, net banking and EMI options at checkout. Trade accounts can also request invoicing.",
      },
      {
        question: "Can I change or cancel an order after placing it?",
        answer:
          "Orders can be changed or cancelled within 24 hours of purchase, before production begins. Once a custom item enters manufacturing it can no longer be modified.",
      },
      {
        question: "How do I track my order?",
        answer:
          "You'll receive a tracking link by email once your order ships, and you can check status anytime from your account dashboard.",
      },
      {
        question: "Do you offer pricing for bulk or trade orders?",
        answer:
          "Yes — designers, contractors and bulk buyers can apply for trade pricing. Reach out to our team to set up an account.",
      },
    ],
  },
  {
    category: "Shipping",
    items: [
      {
        question: "Which areas do you deliver to?",
        answer:
          "We currently deliver across India, with white-glove delivery available in major metro areas. Enter your pincode at checkout to confirm availability.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Ready-to-ship items usually arrive within 5–7 business days. Made-to-order pieces ship once production is complete, typically three to five weeks from order date.",
      },
      {
        question: "Is installation included with delivery?",
        answer:
          "Standard delivery brings items to your door. In-home installation for curtains, blinds and furniture assembly can be added as a service at checkout.",
      },
      {
        question: "What happens if an item arrives damaged?",
        answer:
          "Contact us within 48 hours of delivery with photos of the damage, and we'll arrange a free replacement or repair at no extra cost.",
      },
    ],
  },
];

/* -------------------------------------------------------------------- */
/*  A single collapsible question / answer pair                        */
/* -------------------------------------------------------------------- */
function AccordionItem({ question, answer, isOpen, onToggle }) {
  const panelId = useId();

  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button
        type="button"
        className="faq-item__question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          <span className="faq-item__icon-line faq-item__icon-line--h" />
          <span className="faq-item__icon-line faq-item__icon-line--v" />
        </span>
      </button>
      <div className="faq-item__answer" id={panelId} role="region">
        <div className="faq-item__answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function Faqs({ categories = faqData }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].category);
  const [query, setQuery] = useState("");
  const [openKeys, setOpenKeys] = useState(() => new Set());

  const toggle = (key) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    const matches = [];
    categories.forEach((cat) => {
      cat.items.forEach((item) => {
        if (
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q)
        ) {
          matches.push({ ...item, category: cat.category });
        }
      });
    });
    return matches;
  }, [query, categories]);

  const activeItems =
    categories.find((cat) => cat.category === activeCategory)?.items || [];

  return (
    <>
      <Breadcrumb />
      <section className="faq">
        <div className="faq__intro">
          <span className="faq__eyebrow">
            <span className="faq__eyebrow-dash" aria-hidden="true" />
            Support
          </span>
          <h2 className="faq__heading">Frequently Asked Questions</h2>
          <p className="faq__tagline">Answers as considered as our designs.</p>

          <div className="faq__search">
            <svg
              className="faq__search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden="true"
            >
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="M19 19l-3.8-3.8" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              className="faq__search-input"
              placeholder="Search your question…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search frequently asked questions"
            />
          </div>
        </div>

        {!searchResults && (
          <div className="faq__tabs" role="tablist" aria-label="FAQ categories">
            {categories.map((cat) => (
              <button
                key={cat.category}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.category}
                className={`faq__tab${
                  activeCategory === cat.category ? " faq__tab--active" : ""
                }`}
                onClick={() => setActiveCategory(cat.category)}
              >
                {cat.category}
              </button>
            ))}
          </div>
        )}

        <div className="faq__panel">
          {searchResults ? (
            searchResults.length ? (
              <div className="faq__list">
                {searchResults.map((item, i) => {
                  const key = `search-${i}`;
                  return (
                    <div className="faq__result" key={key}>
                      <span className="faq__result-tag">{item.category}</span>
                      <AccordionItem
                        question={item.question}
                        answer={item.answer}
                        isOpen={openKeys.has(key)}
                        onToggle={() => toggle(key)}
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="faq__empty">
                No results for “{query}”. Try a different search term.
              </p>
            )
          ) : (
            <div className="faq__list">
              {activeItems.map((item, i) => {
                const key = `${activeCategory}-${i}`;
                return (
                  <AccordionItem
                    key={key}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openKeys.has(key)}
                    onToggle={() => toggle(key)}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="faq__cta">
          <p className="faq__cta-tagline">We're here to help</p>
          <p className="faq__cta-heading">Still have a question?</p>
          <a className="faq__cta-button" href="mailto:hello@interradecors.com">
            Email our team
          </a>
        </div>
      </section>
    </>
  );
}

