import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TrustSection from "../../components/WhyTrust/Trustsection";

import "./WorkProcessPage.css";

import img1 from "../../assets/work-process/01.jpg";
import img2 from "../../assets/work-process/02.jpg";
import img3 from "../../assets/work-process/03.jpg";
import img4 from "../../assets/work-process/04.jpg";
import img5 from "../../assets/work-process/01.jpg";

const steps = [
  {
    number: "01",
    label: "Step 1",
    title: "Product Selection",
    description:
      "Browse through our digital product library to select design-appropriate products for your space. Our physical products can be experienced at our studios across various locations.",
    image: img1,
    alt: "Designer reviewing floor plans and fabric swatches",
  },
  {
    number: "02",
    label: "Step 2",
    title: "Site Visit",
    description:
      "Our project managers and designers visit the site for measurements and technical evaluation. Details like pelmet and cove sizes, electric points for motorisation, sunlight direction, and overall aesthetics are taken into account before product selection.",
    image: img2,
    alt: "Empty apartment interior with floor-to-ceiling windows during a site visit",
  },
  {
    number: "03",
    label: "Step 3",
    title: "Design Finalization",
    description:
      "Once measurements and preferences are confirmed, our design team prepares detailed mockups and material samples, so every fabric, finish, and fitting is approved before production begins.",
    image: img3,
    alt: "Design mockups and material samples laid out for review",
  },
  {
    number: "04",
    label: "Step 4",
    title: "Production",
    description:
      "Approved designs move into production at our workshop, where skilled craftsmen bring precision and quality control to every cut, seam, and finish.",
    image: img4,
    alt: "Craftsmen working in a furniture production workshop",
  },
  {
    number: "05",
    label: "Step 5",
    title: "Installation",
    description:
      "Our trained installation team delivers and fits each piece on-site with care, ensuring a flawless finish and a space that's ready to enjoy from day one.",
    image: img5,
    alt: "Installation team fitting furnishings on-site",
  },
];

const WorkProcess = () => {
  return (
    <>
      <Breadcrumb />

      <section className="lux-process-section">
        <div className="lux-process-container">
          <div className="lux-process-header">
            <div className="lux-meta-tag">
              <span className="lux-line"></span>
              <span className="lux-tag-text">How We Work</span>
            </div>
            <h2 className="lux-process-heading">
              Our Process, <span>Step by Step</span>
            </h2>
            <p className="lux-process-subheading">
              From the first idea to the final fitting, every project follows
              a clear, considered path — designed to remove guesswork and
              deliver a result you can trust.
            </p>
          </div>

          <div className="lux-process-list">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`lux-process-row${
                  index % 2 === 1 ? " reversed" : ""
                }`}
              >
                <div className="lux-process-visual">
                  <div className="lux-process-frame">
                    <img src={step.image} alt={step.alt} loading="lazy" />
                    <div className="lux-process-shimmer"></div>
                  </div>
                  <span className="lux-process-bignum">{step.number}</span>
                </div>

                <div className="lux-process-copy">
                  <span className="lux-process-label">{step.label}</span>
                  <h3 className="lux-process-title">{step.title}</h3>
                  <p className="lux-process-desc">{step.description}</p>
                </div>

                {index !== steps.length - 1 && (
                  <span className="lux-process-connector" aria-hidden="true"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
    </>
  );
};

export default WorkProcess;