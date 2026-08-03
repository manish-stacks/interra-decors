import { useState } from "react";
import "./AllProjectsSection.css";

// 🔥 UNIQUE DATA NAME
const allProjectsData = [
  {
    id: 1,
    num: "01",
    category: "Residential",
    tag: "Featured",
    date: "Mar 2025",
    title: "Luxury 3BHK Interior in Gurgaon",
    excerpt:
      "A modern luxury apartment designed with warm tones, custom furniture, and premium finishes.",
  },
  {
    id: 2,
    num: "02",
    category: "Commercial",
    tag: "Trending",
    date: "Feb 2025",
    title: "Corporate Office Design",
    excerpt:
      "A sleek office space designed for productivity with modular furniture and open layouts.",
  },
  {
    id: 3,
    num: "03",
    category: "Hospitality",
    tag: "Case Study",
    date: "Jan 2025",
    title: "5-Star Hotel Furnishing",
    excerpt:
      "Complete furnishing solution for a luxury hotel with custom-crafted interiors.",
  },
  {
    id: 4,
    num: "04",
    category: "Retail",
    tag: null,
    date: "Dec 2024",
    title: "Premium Showroom Design",
    excerpt:
      "Designed a high-end retail showroom with elegant lighting and display units.",
  },
];

// 🔥 ICON
const ArrowIcon = ({ size = 14 }) => (
  <svg viewBox="0 0 14 14" fill="none" style={{ width: size }}>
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 🔥 UNIQUE COMPONENT NAME
export default function AllProjectsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="allproj-root">
      <div className="allproj-container">

        {/* HEADER */}
        <div className="allproj-header">
          <div>
            <span className="allproj-eyebrow">
              <span className="allproj-bar" />
              Our Work
            </span>

            <h2 className="allproj-heading">
              All <em>Projects</em>
            </h2>
          </div>

          <div>
            <p className="allproj-sub">
              Explore our complete portfolio of interior and furnishing projects crafted with precision and creativity.
            </p>

            <button className="allproj-btn">
              All Projects
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="allproj-grid">
          {allProjectsData.map((item) => (
            <div
              key={item.id}
              className={`allproj-card ${
                hoveredCard === item.id ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="allproj-top">
                <span className="allproj-num">{item.num}</span>
                <span className="allproj-pill">{item.category}</span>

                {item.tag && (
                  <span className="allproj-tag">{item.tag}</span>
                )}
              </div>

              <div className="allproj-body">
                <p className="allproj-date">{item.date}</p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>

                <button className="allproj-read">
                  View Project <ArrowIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}