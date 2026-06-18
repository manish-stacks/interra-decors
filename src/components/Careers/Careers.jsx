// Careers.jsx
import React, { useEffect, useRef, useState } from "react";
import "./Careers.css";

/* ─── SVG Icons ─── */
const IconGrowth = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconCreativity = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);
const IconCollaboration = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconExcellence = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const IconUpload = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);
const IconMail = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);
const IconBriefcase = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="3" ry="3" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <line x1="2" y1="13" x2="22" y2="13" />
  </svg>
);

/* ─── Data ─── */
const culturePoints = [
  {
    icon: <IconGrowth />,
    title: "Growth",
    desc: "We invest in every individual's professional journey through mentorship and clear progression paths.",
  },
  {
    icon: <IconCreativity />,
    title: "Creativity",
    desc: "Imagination is our foundation. Every project is a canvas for bold ideas and refined execution.",
  },
  {
    icon: <IconCollaboration />,
    title: "Collaboration",
    desc: "We build spaces together — across disciplines, perspectives, and creative visions.",
  },
  {
    icon: <IconExcellence />,
    title: "Excellence",
    desc: "Craftsmanship isn't a standard, it's our identity. We hold every detail to the highest measure.",
  },
];

const benefits = [
  {
    title: "Professional Growth",
    desc: "Structured learning paths, mentorship programs, and clear career milestones to help you reach your full potential.",
  },
  {
    title: "Supportive Environment",
    desc: "A culture rooted in respect, openness, and shared ambition — where every voice shapes the direction.",
  },
  {
    title: "Creative Projects",
    desc: "Work on landmark residential and commercial projects that define the future of luxury living.",
  },
  {
    title: "Flexible Opportunities",
    desc: "We believe great work happens when people have the freedom to design their own rhythm.",
  },
  {
    title: "Learning & Development",
    desc: "Regular workshops, industry events, and access to the world's finest design resources and libraries.",
  },
];

const talentTags = [
  "Interior Designers",
  "Architects",
  "Project Managers",
  "Sales Experts",
  "Creative Consultants",
  "Space Planners",
  "Visual Merchandisers",
  "Brand Strategists",
];

/* ─── Intersection Observer Hook ─── */
const useReveal = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

/* ─── Main Component ─── */
const Careers = () => {
  const [heroRef, heroVisible] = useReveal();
  const [cultureRef, cultureVisible] = useReveal();
  const [benefitRef, benefitVisible] = useReveal();
  const [openRef, openVisible] = useReveal();
  const [talentRef, talentVisible] = useReveal();
  const [formRef, formVisible] = useReveal();

  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (f) setFileName(f.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="cr-page">
      {/* ══════════════════ 4. OPENINGS (EMPTY STATE) ══════════════════ */}
      <section className="cr-openings" id="cr-openings" ref={openRef}>
        <div className="cr-container">
          <div className={`cr-empty-state${openVisible ? " cr-reveal" : ""}`}>
            <div className="cr-empty-state__glow" aria-hidden="true" />

            <div className="cr-empty-state__icon" aria-hidden="true">
              <IconBriefcase />
            </div>

            <h3 className="cr-empty-state__heading">
              A Workplace Designed for Excellence
            </h3>
            <p className="cr-empty-state__body">
              Our office environment fosters creativity, collaboration, and
              innovation. We believe that great ideas thrive in inspiring spaces
              where talented individuals work together to create meaningful
              impact and deliver exceptional experiences.
            </p>

            <div className="cr-empty-state__divider" aria-hidden="true" />

            <p className="cr-empty-state__cta-text">
              Send us your resume and we'll reach out when the right opportunity
              arises.
            </p>

            <div className="cr-empty-state__actions">
              <a href="#cr-form" className="cr-btn cr-btn--gold">
                Share Your Resume <IconArrow />
              </a>
              <a
                href="mailto:info@interradecors.com"
                className="cr-empty-state__email"
              >
                <IconMail />
                info@interradecors.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
