import React, { useState, useEffect } from "react";
import "./AllProductsSection.css";

import Pro01 from "../../assets/products/sheer-elegance-curtains.jpg"
import Pro02 from "../../assets/products/velvet-blackout-curtains.jpg"
import Pro03 from "../../assets/products/linen-sofa-upholstery.jpg"
import Pro04 from "../../assets/products/geometric-wallpaper.webp"
import Pro05 from "../../assets/products/roman-blinds.jpg"
import Pro06 from "../../assets/products/motorized-roller-blinds.jpg"
import Pro07 from "../../assets/products/egyptian-cotton0bedsheet.jpg"
import Pro08 from "../../assets/products/orthopedic-memory-foam-mattress.jpg"
import Pro09 from "../../assets/products/persian-hand-knotted-rugs.webp"
import Pro10 from "../../assets/products/european-oak-flooring.jpg"
import Pro11 from "../../assets/products/wall-to-wall-wool-carpet.jpg"
import Pro12 from "../../assets/products/floral-fabric-pholstery.jpg"

const products = [
  {
    id: 1,
    name: "Sheer Elegance Curtains",
    category: "Curtains",
    price: 4500,
    discount: 3299,
    rating: 5,
    tag: "Bestseller",
    inStock: true,
    desc: "Lightweight sheer curtains that diffuse natural light beautifully. Available in custom sizes and a wide range of colors.",
    img: Pro01,
  },
  {
    id: 2,
    name: "Velvet Blackout Curtains",
    category: "Curtains",
    price: 6800,
    discount: 5499,
    rating: 4,
    tag: "New",
    inStock: true,
    desc: "Premium velvet blackout curtains for complete privacy and light control. Perfect for bedrooms and home theatres.",
    img: Pro02,
  },
  {
    id: 3,
    name: "Linen Sofa Upholstery",
    category: "Upholstery",
    price: 12000,
    discount: 9499,
    rating: 5,
    tag: "Trending",
    inStock: true,
    desc: "Natural linen upholstery fabric, breathable and durable. Available in 30+ shades, perfect for sofas and armchairs.",
    img: Pro03,
  },
  {
    id: 4,
    name: "Geometric Wallpaper",
    category: "Wallpaper",
    price: 3200,
    discount: 2499,
    rating: 4,
    tag: "Sale",
    inStock: true,
    desc: "Bold geometric patterned wallpaper that transforms any room. Easy peel-and-stick application, removable.",
    img: Pro04,
  },
  {
    id: 5,
    name: "Roman Blinds",
    category: "Blinds & Curtain Tracks",
    price: 5500,
    discount: 4199,
    rating: 4,
    tag: null,
    inStock: true,
    desc: "Elegant Roman blinds with smooth folding mechanism. Customizable fabric, size, and lining options available.",
    img: Pro05,
  },
  {
    id: 6,
    name: "Motorized Roller Blinds",
    category: "Motorized & Automation Solutions",
    price: 18000,
    discount: 14999,
    rating: 5,
    tag: "New",
    inStock: true,
    desc: "Smart motorized roller blinds with app and voice control. Compatible with Alexa, Google Home, and Apple HomeKit.",
    img: Pro06,
  },
  {
    id: 7,
    name: "Egyptian Cotton Bedsheet",
    category: "Bed & Bath Linens",
    price: 4200,
    discount: 2999,
    rating: 5,
    tag: "Bestseller",
    inStock: true,
    desc: "500 thread count Egyptian cotton bedsheets. Ultra-soft, breathable, and long-lasting. Available in King, Queen, and Single sizes.",
    img: Pro07,
  },
  {
    id: 8,
    name: "Orthopedic Memory Foam Mattress",
    category: "Mattresses",
    price: 35000,
    discount: 27999,
    rating: 5,
    tag: "Sale",
    inStock: true,
    desc: "7-zone orthopedic memory foam mattress with cooling gel technology. Ideal for back and joint support.",
    img: Pro08,
  },
  {
    id: 9,
    name: "Persian Hand-Knotted Rug",
    category: "Rugs & Carpets",
    price: 22000,
    discount: 17499,
    rating: 4,
    tag: "Trending",
    inStock: true,
    desc: "Authentic hand-knotted Persian rug with intricate patterns. Made from 100% pure wool, available in multiple sizes.",
    img: Pro09,
  },
  {
    id: 10,
    name: "European Oak Flooring",
    category: "Wooden Flooring",
    price: 850,
    discount: 699,
    rating: 5,
    tag: "New",
    inStock: true,
    desc: "Solid European Oak hardwood flooring, pre-finished with UV lacquer. Per sq.ft. pricing, minimum order 200 sq.ft.",
    img: Pro10,
  },
  {
    id: 11,
    name: "Wall-to-Wall Wool Carpet",
    category: "Wall-to-Wall Carpets",
    price: 1200,
    discount: 949,
    rating: 4,
    tag: "Sale",
    inStock: true,
    desc: "Premium wool wall-to-wall carpet with 12mm pile height. Per sq.ft. pricing. Professional installation included.",
    img: Pro11,
  },
  {
    id: 12,
    name: "Floral Fabric Upholstery",
    category: "Upholstery",
    price: 9500,
    discount: 7299,
    rating: 4,
    tag: null,
    inStock: true,
    desc: "Luxurious floral-patterned upholstery fabric. High durability weave, suitable for chairs, headboards, and ottomans.",
    img: Pro12,
  },
];

const ALL_CATEGORIES = [
  "All",
  "Curtains",
  "Upholstery",
  "Wallpaper",
  "Blinds & Curtain Tracks",
  "Motorized & Automation Solutions",
  "Bed & Bath Linens",
  "Mattresses",
  "Rugs & Carpets",
  "Wooden Flooring",
  "Wall-to-Wall Carpets",
];

const tagColors = {
  Bestseller: "#1a1a1a",
  New: "#2e7d32",
  Sale: "#c62828",
  Trending: "#6a1b9a",
};

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
function fromSlug(slug) {
  return ALL_CATEGORIES.find(
    (cat) => toSlug(cat) === slug
  );
}
function discPct(p) {
  return Math.round(((p.price - p.discount) / p.price) * 100);
}

/* ── Star Rating ── */
function StarRating({ rating }) {
  return (
    <div className="aps-star-row">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={s <= rating ? "aps-star active" : "aps-star"}>
          ★
        </span>
      ))}
    </div>
  );
}

/* ── Enquiry Modal ── */
function EnquiryModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const pct = discPct(product);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="aps-modal-overlay" onClick={onClose}>
      <div className="aps-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="aps-modal-close" onClick={onClose}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="aps-modal-success">
            <div className="aps-success-icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <h3>Enquiry Submitted!</h3>
            <p>
              Thank you <strong>{form.name}</strong>! We've received your
              enquiry for <strong>{product.name}</strong>. Our team will contact
              you shortly.
            </p>
            <button className="aps-success-btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="aps-modal-header">
              <span className="aps-modal-eyebrow">Enquiry Form</span>
              <h3 className="aps-modal-title">{product.name}</h3>
              <p className="aps-modal-cat">
                {product.category}&nbsp;·&nbsp;₹
                {product.discount.toLocaleString("en-IN")}{" "}
                <s>₹{product.price.toLocaleString("en-IN")}</s>
                &nbsp;
                <span className="aps-save-pill">Save {pct}%</span>
              </p>
            </div>

            <form className="aps-enq-form" onSubmit={handleSubmit}>
              <div className="aps-form-row">
                <div className="aps-form-group">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="aps-form-group">
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="aps-form-group">
                <label>Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="aps-form-group">
                <label>Address / City</label>
                <input
                  name="address"
                  placeholder="Your address or city"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
              <div className="aps-form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={`I'm interested in ${product.name}...`}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="aps-submit-btn">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22,2 15,22 11,13 2,9" />
                </svg>
                Submit Enquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Main Component ── */
const AllProductsSection = ({ category = "All" }) => {
  const [selCategories, setSelCategories] = useState(["All"]);
  const [priceMax, setPriceMax] = useState(35000);
  const [minRating, setMinRating] = useState(0);
  const [sortOpt, setSortOpt] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [enquiryProduct, setEnquiryProduct] = useState(null);

  useEffect(() => {
    if (category) {
      const matchedCategory = fromSlug(category);

      if (matchedCategory) {
        setSelCategories([matchedCategory]);
      } else {
        setSelCategories(["All"]);
      }
    }
  }, [category]);

  const toggleCat = (cat) => {
    if (cat === "All") {
      setSelCategories(["All"]);
      return;
    }
    let updated = selCategories.filter((c) => c !== "All");
    updated = updated.includes(cat)
      ? updated.filter((c) => c !== cat)
      : [...updated, cat];
    setSelCategories(updated.length === 0 ? ["All"] : updated);
  };

  const clearFilters = () => {
    setSelCategories(["All"]);
    setPriceMax(35000);
    setMinRating(0);
  };

  const hasFilters =
    !selCategories.includes("All") || minRating > 0 || priceMax < 35000;

  const filtered = products
    .filter(
      (p) =>
        selCategories.includes("All") || selCategories.includes(p.category)
    )
    .filter((p) => p.discount <= priceMax)
    .filter((p) => p.rating >= minRating)
    .sort((a, b) => {
      if (sortOpt === "price-asc") return a.discount - b.discount;
      if (sortOpt === "price-desc") return b.discount - a.discount;
      if (sortOpt === "rating") return b.rating - a.rating;
      if (sortOpt === "discount") return discPct(b) - discPct(a);
      return 0;
    });

  const goToProduct = (slug) => {
    window.location.href = `/products/${slug}`;
    // React Router use kar rahe ho toh:
    // navigate(`/products/${slug}`)
  };

  return (
    <section className="aps-wrapper">
      <div className="aps-container">

        {/* ── Sidebar ── */}
        <aside className="aps-sidebar">
          <div className="aps-filter-block">
            <h4 className="aps-filter-title">Category</h4>
            {ALL_CATEGORIES.map((cat) => (
              <label
                key={cat}
                className="aps-check-row"
                onClick={() => toggleCat(cat)}
              >
                <span
                  className={`aps-checkbox ${selCategories.includes(cat) ? "checked" : ""
                    }`}
                >
                  {selCategories.includes(cat) && (
                    <span className="aps-tick">✓</span>
                  )}
                </span>
                <span className="aps-check-label">{cat}</span>
              </label>
            ))}
          </div>

          <div className="aps-divider" />

          <div className="aps-filter-block">
            <h4 className="aps-filter-title">Max Price</h4>
            <input
              type="range"
              className="aps-range"
              min={500}
              max={35000}
              step={500}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
            />
            <div className="aps-price-labels">
              <span>₹500</span>
              <span>₹{priceMax.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <div className="aps-divider" />

          <div className="aps-filter-block">
            <h4 className="aps-filter-title">Rating</h4>
            {[5, 4, 3, 2, 1].map((r) => (
              <label
                key={r}
                className="aps-check-row"
                onClick={() => setMinRating(minRating === r ? 0 : r)}
              >
                <span
                  className={`aps-checkbox ${minRating === r ? "checked" : ""}`}
                >
                  {minRating === r && <span className="aps-tick">✓</span>}
                </span>
                <StarRating rating={r} />
                <span className="aps-up-label">&amp; Up</span>
              </label>
            ))}
          </div>

          {hasFilters && (
            <>
              <div className="aps-divider" />
              <button className="aps-clear-btn" onClick={clearFilters}>
                Clear All Filters
              </button>
            </>
          )}
        </aside>

        {/* ── Main ── */}
        <main className="aps-main">
          <div className="aps-topbar">
            <span className="aps-result-count">
              {filtered.length} Products Found
            </span>
            <div className="aps-topbar-right">
              <select
                className="aps-select"
                value={sortOpt}
                onChange={(e) => setSortOpt(e.target.value)}
              >
                <option value="default">Sort: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Best Rating</option>
                <option value="discount">Most Discount</option>
              </select>
              <div className="aps-view-toggle">
                <button
                  className={`aps-view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                  title="Grid View"
                >
                  ⊞
                </button>
                <button
                  className={`aps-view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                  title="List View"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          <div className={`aps-grid ${viewMode === "list" ? "list-mode" : ""}`}>
            {filtered.length === 0 && (
              <div className="aps-empty">
                <span className="aps-empty-icon">😕</span>
                <p className="aps-empty-heading">
                  No products match your filters
                </p>
                <p className="aps-empty-sub">Try adjusting your filters</p>
              </div>
            )}

            {filtered.map((p) => {
              const pct = discPct(p);
              const slug = toSlug(p.name);
              return (
                <div key={p.id} className="aps-card">
                  <div
                    className="aps-card-img-wrap"
                    onClick={() => goToProduct(slug)}
                    style={{ cursor: "pointer" }}
                  >
                    {p.tag && (
                      <span
                        className="aps-badge"
                        style={{ background: tagColors[p.tag] }}
                      >
                        {p.tag}
                      </span>
                    )}
                    <span className="aps-discount-badge">-{pct}%</span>
                    <img
                      src={p.img}
                      alt={p.name}
                      className="aps-card-img"
                      onError={(e) =>
                        (e.target.src = `https://placehold.co/400x400/f5f4f0/c8a84b?text=${encodeURIComponent(p.name)}`)
                      }
                    />
                    <div className="aps-img-hint">View Details</div>
                  </div>

                  <div className="aps-card-body">
                    <span className="aps-cat-label">{p.category}</span>
                    <h3
                      className="aps-product-name"
                      onClick={() => goToProduct(slug)}
                      title={p.name}
                    >
                      {p.name}
                    </h3>
                    <StarRating rating={p.rating} />
                    <div className="aps-price-row">
                      {/* <span className="aps-price">
                        ₹{p.discount.toLocaleString("en-IN")}
                      </span>
                      <span className="aps-old-price">
                        ₹{p.price.toLocaleString("en-IN")}
                      </span> */}
                      <span
                        className={`aps-stock-badge ${p.inStock ? "in-stock" : "out-stock"
                          }`}
                      >
                        {p.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                    <button
                      className="aps-enq-btn"
                      onClick={() => setEnquiryProduct(p)}
                      disabled={!p.inStock}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Enquiry Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>

      {enquiryProduct && (
        <EnquiryModal
          product={enquiryProduct}
          onClose={() => setEnquiryProduct(null)}
        />
      )}
    </section>
  );
};

export default AllProductsSection;