import React from "react";
import "./MissionVision.css";
import img1 from "../../assets/mission/01.jpg";
import img2 from "../../assets/mission/02.jpg";
import img3 from "../../assets/mission/03.jpg";
import img4 from "../../assets/mission/04.jpg";

const MissionVision = () => {
  return (
    <section class="spatial-showroom">
      <div class="column-split-canvas">
        <div class="studio-col dark-monolith">
          <div class="texture-overlay"></div>

          <div class="col-content">
            <span class="meta-tag">01 / Purpose</span>

            <h2 class="display-title">Our Mission —</h2>

            <p class="manifesto-text">
              “To craft refined interior environments that seamlessly combine
              luxury furnishing, functional elegance, and timeless aesthetics —
              delivering personalized spaces that elevate modern lifestyles with
              precision, comfort, and sophisticated design sensibilities.”
            </p>

            {/* <span class="font-signature">Teko & Plus Jakarta Sans</span> */}
          </div>
        </div>

        <div class="studio-col light-alabaster">
          <div class="texture-overlay"></div>

          <div class="col-content">
            <span class="meta-tag">02 / Vision</span>

            <h2 class="display-title">Our Vision —</h2>

            <p class="manifesto-text">
              “To become a leading destination for premium furnishing and
              interior solutions — recognized for transforming residential,
              hospitality, and commercial spaces into timeless experiences of
              luxury, innovation, and enduring architectural beauty.”
            </p>

            {/* <span class="font-signature">Teko & Plus Jakarta Sans</span> */}
          </div>
        </div>
      </div>

      <div class="matrix-blueprint-wrapper">
        <div class="matrix-container">
          <header class="matrix-header">
            <h3>Design Philosophy & Core Principles</h3>
          </header>

          <div class="matrix-grid">
            <div class="matrix-cell">
              <div class="matrix-thumb">
                <img src={img1} alt="Elegance" />
              </div>
              <h4 class="pillar-title">ELEGANCE</h4>

              <div class="cell-body">
                <span class="cell-num">01</span>

                <span class="cell-label">Design</span>

                <p class="cell-desc">
                  Sophisticated furnishing concepts curated with timeless
                  aesthetics and modern spatial harmony.
                </p>
              </div>
            </div>

            <div class="matrix-cell">
              <div class="matrix-thumb">
                <img src={img2} alt="Elegance" />
              </div>
              <h4 class="pillar-title">QUALITY</h4>

              <div class="cell-body">
                <span class="cell-num">02</span>

                <span class="cell-label">Material</span>

                <p class="cell-desc">
                  Premium fabrics, textures, finishes, and carefully selected
                  materials crafted for lasting luxury.
                </p>
              </div>
            </div>

            <div class="matrix-cell">
              <div class="matrix-thumb">
                <img src={img3} alt="Elegance" />
              </div>
              <h4 class="pillar-title">PRECISION</h4>

              <div class="cell-body">
                <span class="cell-num">03</span>

                <span class="cell-label">Execution</span>

                <p class="cell-desc">
                  Detailed planning, flawless installation, and seamless project
                  coordination from concept to completion.
                </p>
              </div>
            </div>

            <div class="matrix-cell">
              <div class="matrix-thumb">
                <img src={img4} alt="Elegance" />
              </div>
              <h4 class="pillar-title">EXPERIENCE</h4>

              <div class="cell-body">
                <span class="cell-num">04</span>

                <span class="cell-label">Lifestyle</span>

                <p class="cell-desc">
                  Creating warm, luxurious, and highly personalized interiors
                  designed around comfort and everyday living.
                </p>

                <div class="accent-star-vector">✦</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
