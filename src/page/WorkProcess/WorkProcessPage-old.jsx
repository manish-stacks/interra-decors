import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TrustSection from "../../components/WhyTrust/Trustsection";

import "./WorkProcessPageSection.css";
import { Link } from "react-router-dom";
import consultancyImg from "../../assets/banner/why-consultancy.jpg";

const WorkProcess = () => {
  return (
    <>
      <Breadcrumb />
      <section className="lux-consultancy">
        <div className="lux-container">
          {/* LEFT CONTENT */}
          <div className="lux-content-block">
            <div className="lux-meta-tag">
              <span className="lux-line"></span>
              <span className="lux-tag-text">Why Consultancy Matters</span>
            </div>

            <h2 className="lux-heading">
              Expert Guidance <br />
              Makes <span>Every Decision Better</span>
            </h2>

            <p className="lux-description">
              Professional consultancy helps individuals and businesses make
              confident, well-planned decisions by combining industry expertise,
              strategic thinking, and customized solutions tailored to long-term
              growth and success.
            </p>

            {/* PROCESS TIMELINE/FEATURES */}
            <div className="lux-process-stack">
              <div className="lux-process-item">
                <div className="lux-index">01</div>
                <div className="lux-process-body">
                  <h3>Strategic Planning</h3>
                  <p>
                    Clear roadmaps and expert insights help streamline
                    operations, reduce risks, and improve overall project
                    execution.
                  </p>
                </div>
              </div>

              <div className="lux-process-item">
                <div className="lux-index">02</div>
                <div className="lux-process-body">
                  <h3>Industry Expertise</h3>
                  <p>
                    Experienced consultants provide practical solutions, modern
                    approaches, and valuable knowledge for better outcomes.
                  </p>
                </div>
              </div>

              <div className="lux-process-item">
                <div className="lux-index">03</div>
                <div className="lux-process-body">
                  <h3>Growth & Efficiency</h3>
                  <p>
                    Consultancy services improve productivity, optimize
                    resources, and support sustainable business development
                    effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTIONS */}
            <div className="lux-action-group">
              <Link to="/book-a-meeting" className="lux-btn-solid">
                <span>Book A Meeting</span>

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1M13 1H3.5M13 1V10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              {/* 
              <Link to="/about" className="lux-btn-text">
                <span>Learn More</span>
              </Link> */}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="lux-visual-block">
            <div className="lux-image-composition">
              {/* Main Canvas Frame */}
              <div className="lux-frame main-frame">
                {
                  /* <img 
                  src="src/assets/banner/why-consultancy.jpg"
                  alt="Professional Consultancy Services"
                /> */
                  <img
                    src={consultancyImg}
                    alt="Professional Consultancy Services"
                  />
                }
                <div className="lux-overlay-shimmer"></div>
              </div>

              {/* Floating context badge */}
              <div className="lux-status-badge">
                <span className="lux-pulse-dot"></span>
                <span className="lux-badge-label">Trusted Consultancy</span>
              </div>

              {/* Architectural Stat Card */}
              <div className="lux-stat-card">
                <div className="lux-stat-header">
                  <span className="lux-stat-title">Successful Projects</span>
                  <span className="lux-stat-number">300+</span>
                </div>

                <p className="lux-stat-caption">
                  Businesses and clients empowered with strategic consultancy
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustSection />
    </>
  );
};

export default WorkProcess;
