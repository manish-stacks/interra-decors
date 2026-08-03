import React from "react";
import {
  Ruler,
  Palette,
  PackageOpen,
  Wrench,
  HeartHandshake,
  ArrowUpRight,
} from "lucide-react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TrustSection from "../../components/WhyTrust/Trustsection";

import "./OurServicesSection.css";

/* IMAGES */
import service1 from "/src/assets/services/01.jpg";
import service2 from "/src/assets/services/02.jpg";
import service3 from "/src/assets/services/03.jpg";
import service4 from "/src/assets/services/04.jpg";
import service5 from "/src/assets/services/05.jpg";

/* DATA */
const services = [
  {
    icon: <Ruler size={30} />,
    title: "Site Measurement",
    desc: "Our expert team conducts precise on-site measurements to ensure every furnishing element fits perfectly within your space. From curtains and blinds to furniture layouts, we focus on accuracy, functionality, and seamless execution to achieve a refined and luxurious interior finish tailored to your project requirements.",
    image: service1,
  },

  {
    icon: <Palette size={30} />,
    title: "Customization as per Design",
    desc: "We create tailor-made furnishing solutions designed to complement your interior style, preferences, and space planning. From fabrics and textures to colors and layouts, every detail is customized with precision, ensuring your interiors reflect sophistication, comfort, elegance, and a unique personalized design experience.",
    image: service2,
  },

  {
    icon: <PackageOpen size={30} />,
    title: "Bulk Project Supply",
    desc: "Our large-scale furnishing supply solutions are ideal for residential, commercial, hospitality, and builder projects. We ensure consistent product quality, timely delivery, and smooth coordination for bulk requirements, helping clients execute projects efficiently while maintaining premium standards across every furnishing category and interior segment.",
    image: service3,
  },

  {
    icon: <Wrench size={30} />,
    title: "Installation Support",
    desc: "Our professional installation team ensures every furnishing element is installed with precision, safety, and attention to detail. From curtains and blinds to flooring and wall coverings, we provide seamless installation services that enhance aesthetics, functionality, durability, and the overall luxury finish of your interiors.",
    image: service4,
  },

  {
    icon: <HeartHandshake size={30} />,
    title: "After-Sales Service",
    desc: "We believe in building long-term relationships through dependable after-sales support and customer assistance. Our dedicated team remains available for maintenance guidance, service support, and furnishing-related assistance even after project completion, ensuring lasting satisfaction, comfort, trust, and a smooth post-installation experience for every client.",
    image: service5,
  },
];

const OurServices = () => {
  return (
    <>
      <Breadcrumb />

      <section className="zig-services">
        <div className="zig-container">
          {/* TOP HEADING */}
          <div class="zig-trust-header">
            <span class="zig-eyebrow zig-eyebrow-center">Our Services</span>
            <h2 class="zig-heading zig-heading-center">
              Premium <em>Furnishing.</em>
            </h2>
            <p class="zig-trust-sub">
              From concept to completion, we provide complete furnishing
              solutions designed to elevate interiors with elegance, precision,
              and modern functionality.
            </p>
          </div>

          {/* ZIG ZAG LIST */}
          <div className="zig-wrapper">
            {services.map((service, index) => (
              <div
                className={`zig-item ${index % 2 !== 0 ? "reverse" : ""}`}
                key={index}
              >
                {/* IMAGE */}
                <div className="zig-image">
                  <img src={service.image} alt={service.title} />
                </div>

                {/* CONTENT */}
                <div className="zig-content">
                  <div className="zig-number">0{index + 1}</div>

                  <div className="zig-icon">{service.icon}</div>

                  <h3>{service.title}</h3>

                  <p>{service.desc}</p>

                  {/* <button className="zig-btn">
                    Learn More
                    <ArrowUpRight size={18} />
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />
    </>
  );
};

export default OurServices;
