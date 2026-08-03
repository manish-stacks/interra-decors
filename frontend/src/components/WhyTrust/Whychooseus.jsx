import React, { useEffect, useRef } from "react";
import "./Whychooseus.css";
import img1 from "../../assets/why-choose/01.jpg";
import img2 from "../../assets/why-choose/02.jpg";
import img3 from "../../assets/why-choose/03.jpg";
import img4 from "../../assets/why-choose/04.jpg";
import img5 from "../../assets/why-choose/05.jpg";
import img6 from "../../assets/why-choose/06.jpg";

/* -------------------------------------------------------------------- */
/*  Icons — simple single-weight line icons, drawn to match the brand's */
/*  existing icon language (star / home / network / tag / people /     */
/*  clock). Swap these for your own icon set if you have one.           */
/* -------------------------------------------------------------------- */
const Icon = {
  star: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 3.5l2.47 5.27 5.78.62-4.36 3.93 1.27 5.68L12 16.1l-5.16 2.9 1.27-5.68-4.36-3.93 5.78-.62L12 3.5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 11.2 12 4l8 7.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9.8V20h12V9.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 20v-6h4v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  network: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="5" cy="6" r="2.2" />
      <circle cx="5" cy="18" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M7 6.9 16 11M7 17.1 16 13" strokeLinecap="round" />
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v9M9.3 9.3c0-1.3 1.2-2 2.7-2s2.7.8 2.7 2-1.2 1.7-2.7 2-2.7.7-2.7 2 1.2 2 2.7 2 2.7-.7 2.7-2" strokeLinecap="round" />
    </svg>
  ),
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="8.5" cy="8" r="2.6" />
      <circle cx="16" cy="9" r="2.1" />
      <path d="M3.5 19c0-3 2.3-5 5-5s5 2 5 5" strokeLinecap="round" />
      <path d="M14 14.3c2.1.2 3.7 1.9 3.7 4.2" strokeLinecap="round" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

/* -------------------------------------------------------------------- */
/*  Default content — replace the `image` paths with your own product   */
/*  / lifestyle photography. Placeholders below are deterministic stock */
/*  images so the layout previews correctly out of the box.             */
/* -------------------------------------------------------------------- */
const defaultFeatures = [
  {
    icon: "star",
    title: "Premium Quality Products",
    description:
      "Interra Decors curates premium furnishings, décor, and interior solutions crafted from superior materials and refined finishes. Every product is selected to deliver lasting beauty, durability, and sophistication, ensuring your spaces reflect elegance while meeting everyday functional needs.",
    image: img1,
    alt: "Premium finish detail on a furniture piece",
  },
  {
    icon: "home",
    title: "Wide Range Under One Roof",
    description:
      "From luxurious curtains and wallpapers to flooring, rugs, and custom furnishings, Interra Decors offers comprehensive interior solutions. Our diverse product portfolio allows homeowners and designers to create cohesive, stylish, and functional spaces with ease.",
    image: img2,
    alt: "Showroom displaying a wide range of furnishings",
  },
  {
    icon: "network",
    title: "Strong Vendor Network",
    description:
      "Backed by an extensive network of trusted suppliers and premium brands, Interra Decors ensures consistent quality, innovative designs, and reliable availability. This strong ecosystem enables us to deliver exceptional interior solutions for every project.",
    image: img3,
    alt: "Warehouse representing a strong supplier network",
  },
  {
    icon: "tag",
    title: "Competitive Pricing",
    description:
      "We believe exceptional design should offer value alongside luxury. Interra Decors combines premium products with competitive pricing, enabling clients to achieve elegant and functional interiors that align perfectly with their style and budget.",
    image: img4,
    alt: "Interior styled to represent value and quality",
  },
  {
    icon: "people",
    title: "Professional Team Support",
    description:
      "Our experienced team provides expert guidance at every stage, from concept and material selection to execution and installation. We collaborate closely with clients to create thoughtfully designed spaces that balance aesthetics and practicality.",
    image: img5,
    alt: "Design team consulting on a project",
  },
  {
    icon: "clock",
    title: "Timely Delivery",
    description:
      "Interra Decors is committed to delivering projects on schedule without compromising quality. Through efficient planning, expert coordination, and reliable partnerships, we ensure seamless execution and timely completion for every interior transformation.",
    image: img6,
    alt: "Delivery and installation in progress on site",
  },
];
/* -------------------------------------------------------------------- */
/*  A single zig-zag row. Handles its own scroll-reveal animation.      */
/* -------------------------------------------------------------------- */
function FeatureRow({ feature, reversed }) {
  const rowRef = useRef(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("wcu-row--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`wcu-row${reversed ? " wcu-row--reversed" : ""}`}
    >
      <div className="wcu-row__media">
        <div className="wcu-row__frame">
          <img
            className="wcu-row__image"
            src={feature.image}
            alt={feature.alt || feature.title}
            loading="lazy"
          />
        </div>
        <div className="wcu-row__chip" aria-hidden="true">
          {Icon[feature.icon] || Icon.star}
        </div>
      </div>

      <div className="wcu-row__content">
        <span className="wcu-row__rule" aria-hidden="true" />
        <h3 className="wcu-row__title">{feature.title}</h3>
        <p className="wcu-row__description">{feature.description}</p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/*  Section export                                                       */
/* -------------------------------------------------------------------- */
export default function WhyChooseUs({
  eyebrow = "Why Choose Us",
  introText = "We combine craftsmanship, expertise, and a deep commitment to excellence — delivering spaces that speak for themselves.",
  features = defaultFeatures,
}) {
  return (
    <section className="wcu">
      <div className="wcu__intro">
        <span className="wcu__eyebrow">
          <span className="wcu__eyebrow-dash" aria-hidden="true" />
          {eyebrow}
        </span>
        <h2 className="wcu__heading">
          Why <span className="wcu__highlight">Interra </span>
          Decors
        </h2>
        <p className="wcu__intro-text">{introText}</p>
      </div>

      <div className="wcu__rows">
        {features.map((feature, i) => (
          <FeatureRow
            key={feature.title}
            feature={feature}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}