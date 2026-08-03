import React from "react";

import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import TrustSection from "../../components/WhyTrust/Trustsection";

import "./ProjectsPageSection.css";

/* IMAGES */
import project1 from "/src/assets/projects/hall.jpg";
import project2 from "/src/assets/projects/residential.jpg";
import project3 from "/src/assets/projects/villa.jpg";
import project4 from "/src/assets/projects/apartment.jpg";
import project5 from "/src/assets/projects/farmhouse.jpg";
import project6 from "/src/assets/projects/hotel.jpg";
import project7 from "/src/assets/projects/resort.jpg";
import project8 from "/src/assets/projects/corporate.jpg";
import project9 from "/src/assets/projects/hospitality.jpg";


/* DATA */
const projects = [
  {
    image: project1,
    category: "HALL INTERIORS",
    title: "Modern Luxury Hall Design",
  },

  {
    image: project2,
    category: "RESIDENTIAL",
    title: "Premium Residential Furnishing",
  },

  {
    image: project3,
    category: "VILLAS",
    title: "Elegant Villa Interior Setup",
  },

  {
    image: project4,
    category: "APARTMENTS",
    title: "Contemporary Apartment Living",
  },

  {
    image: project5,
    category: "FARMHOUSE",
    title: "Luxury Farmhouse Styling",
  },

  {
    image: project6,
    category: "HOTELS",
    title: "Premium Hotel Interior Project",
  },

  {
    image: project7,
    category: "RESORTS",
    title: "Modern Resort Furnishing",
  },

  {
    image: project8,
    category: "CORPORATE",
    title: "Corporate Office Interiors",
  },

  {
    image: project9,
    category: "HOSPITALITY",
    title: "Luxury Hospitality Solutions",
  },
];

const Projects = () => {

  return (
    <>
      <Breadcrumb />

      {/* =========================
          PROJECTS SECTION
      ========================= */}
      <section className="projects-page">

        {/* HEADING */}
        <div className="projects-head">

          <span className="projects-label">
            OUR PROJECTS
          </span>

          <h2>
            Crafted Spaces
            <span> With Elegance</span>
          </h2>

          <p>
            Explore our thoughtfully designed luxury interiors,
            modern residential spaces, and premium furnishing
            projects crafted with timeless aesthetics and
            exceptional attention to detail.
          </p>

        </div>

        {/* GRID */}
        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              {/* IMAGE */}
              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                {/* OVERLAY */}
                <div className="project-overlay">

                  <span>
                    {project.title}
                  </span>

                </div>

              </div>

              {/* CONTENT */}
              <div className="project-content">

                <span className="project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>

      <TrustSection />
    </>
  );
};

export default Projects;