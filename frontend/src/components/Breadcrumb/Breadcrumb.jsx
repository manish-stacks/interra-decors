import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <section className="breadcrumb-section">
      <div className="breadcrumb-overlay"></div>

      <div className="breadcrumb-content">
        {/* Title */}
        <h1 className="breadcrumb-title animate-title">
          {pathnames.length === 0 ? "Home" : pathnames[pathnames.length - 1]}
        </h1>

        {/* Path */}
        <div className="breadcrumb-path animate-path">
          <Link to="/">Home</Link>

          {pathnames.map((name, index) => {
            const routeTo = "/" + pathnames.slice(0, index + 1).join("/");

            return (
              <span key={name}>
                <span className="divider">/</span>
                <Link to={routeTo}>
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
