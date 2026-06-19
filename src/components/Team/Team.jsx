import React from "react";
import "./Team.css";

function Team() {
  return (
    <section class="team-intro">
      <div class="team-container">
        <span class="team-badge">Our Experts</span>
        <h2>
          Meet the <span>People Behind Our Success</span>
        </h2>
        <p>
          Our team is a blend of creative thinkers, skilled professionals, and
          dedicated problem-solvers who work together to deliver exceptional
          results. With a passion for innovation and a commitment to excellence,
          we transform ideas into remarkable experiences for our clients.
        </p>
        <div class="team-stats">
          <div class="stat-card">
            <h3>50+</h3> <span>Projects Completed</span>
          </div>
          <div class="stat-card">
            <h3>10+</h3> <span>Industry Experts</span>
          </div>
          <div class="stat-card">
            <h3>100%</h3> <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
