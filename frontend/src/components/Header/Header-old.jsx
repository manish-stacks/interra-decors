import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState, useEffect } from "react";

// ─── ICONS ───────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015 12.84a19.79 19.79 0 01-3.07-8.67A2 2 0 013.91 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="17"
    height="17"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
// "Home", "About Us", "Products", "Services", "Projects", "Contact Us"
const primaryNav = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Our Offering",
    href: "/all-products",
  },
  {
    title: "Services",
    href: "/our-services",
  },
  {
    title: "Projects",
    href: "/our-projects",
  },
  {
    title: "Work Process",
    href: "/work-process",
  },
  {
    title: "Blog",
    href: "/blogs",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];
const subNav = [
  {
    title: "Curtains",
    href: "/all-products?category=curtains",
  },
  {
    title: "Upholstery",
    href: "/all-products?category=upholstery",
  },
  {
    title: "Wallpaper",
    href: "/all-products?category=wallpaper",
  },
  {
    title: "Blinds & Curtain Tracks",
    href: "/all-products?category=blinds-and-curtain-tracks",
  },
  {
    title: "Motorized & Automation Solutions",
    href: "/all-products?category=motorized-and-automation-solutions",
  },
  {
    title: "Bed & Bath Linens",
    href: "/all-products?category=bed-and-bath-linens",
  },
  {
    title: "Mattresses",
    href: "/all-products?category=mattresses",
  },
  {
    title: "Rugs & Carpets",
    href: "/all-products?category=rugs-and-carpets",
  },
  {
    title: "Wooden Flooring",
    href: "/all-products?category=wooden-flooring",
  },
  {
    title: "Wall-to-Wall Carpets",
    href: "/all-products?category=wall-to-wall-carpets",
  },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function DecorHeader() {
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavClick = (item) => {
    setActiveNav(item);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="dh-root">
      <header className={`dh-header ${isSticky ? "sticky" : ""}`}>
        <div className="dh-topbar">
          <div className="dh-topbar-inner">
            <div className="dh-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Interra Decors Logo"
                  className="dh-logo-img"
                />
              </Link>
            </div>

            <div className="dh-icons">
              <a
                href="tel:+919953493794"
                className="dh-icon-btn"
                aria-label="Call us"
              >
                <PhoneIcon />
              </a>
              <a
                href="https://wa.me/+919953493794"
                target="_blank"
                rel="noreferrer"
                className="dh-icon-btn dh-whatsapp"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>

              {/* Desktop only — CTA btn */}
              <a href="/book-a-meeting" className="dh-dealer">
                Book a Meeting
              </a>

              {/* Mobile only — hamburger */}
              <button
                className={`dh-hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
        <div className={`dh-sticky-wrapper ${isSticky ? "sticky" : ""}`}>
          {/* ── Primary Nav (desktop) ── */}
          <div className="dh-primary">
            <div className="dh-primary-inner">
              <ul className="dh-nav-list">
                {primaryNav.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={activeNav === item ? "dh-active" : ""}
                      onClick={(e) => {
                        setActiveNav(item);
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="dh-search-btn">
                <SearchIcon /> Search
              </button>
            </div>
          </div>

          {/* ── Sub Nav (desktop) ── */}
          <div className="dh-subnav">
            <div className="dh-subnav-inner">
              {subNav.map((item, index) => (
                <Link key={index} to={item.href} className="dh-sub-link">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {/* ── Mobile Drawer ── */}
        <div
          className={`dh-mobile-menu ${
            menuOpen ? "open" : ""
          } ${isSticky ? "sticky" : ""}`}
        >
          {/* Primary nav links */}
          <nav className="dh-mobile-nav">
            {primaryNav.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={activeNav === item ? "dh-active" : ""}
                onClick={() => handleNavClick(item)}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Sub nav as pills */}
          <div className="dh-mobile-sub">
            {subNav.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Bottom row */}
          <div className="dh-mobile-bottom">
            <button className="dh-mobile-dealer">Book a Meeting</button>
            <button className="dh-mobile-search">
              <SearchIcon /> Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
