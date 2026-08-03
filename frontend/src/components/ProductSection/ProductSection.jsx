import { useState } from "react";
import "./ProductSection.css";
import { Link } from "react-router-dom";

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
    img1: Pro01,
    img2: Pro01,
    desc: "Lightweight sheer curtains that diffuse natural light beautifully. Available in custom sizes and a wide range of colors.",
  },
  {
    id: 2,
    name: "Velvet Blackout Curtains",
    category: "Curtains",
    price: 6800,
    discount: 5499,
    rating: 4,
    tag: "New",
    img1: Pro02,
    img2: Pro02,
    desc: "Premium velvet blackout curtains for complete privacy and light control. Perfect for bedrooms and home theatres.",
  },
  {
    id: 3,
    name: "Linen Sofa Upholstery",
    category: "Upholstery",
    price: 12000,
    discount: 9499,
    rating: 5,
    tag: "Trending",
    img1: Pro03,
    img2: Pro03,
    desc: "Natural linen upholstery fabric, breathable and durable. Available in 30+ shades, perfect for sofas and armchairs.",
  },
  {
    id: 4,
    name: "Geometric Wallpaper",
    category: "Wallpaper",
    price: 3200,
    discount: 2499,
    rating: 4,
    tag: "Sale",
    img1: Pro04,
    img2: Pro04,
    desc: "Bold geometric patterned wallpaper that transforms any room. Easy peel-and-stick application, removable.",
  },
  {
    id: 5,
    name: "Roman Blinds",
    category: "Blinds & Curtain Tracks",
    price: 5500,
    discount: 4199,
    rating: 4,
    tag: null,
    img1: Pro05,
    img2: Pro05,
    desc: "Elegant Roman blinds with smooth folding mechanism. Customizable fabric, size, and lining options available.",
  },
  {
    id: 6,
    name: "Motorized Roller Blinds",
    category: "Motorized & Automation Solutions",
    price: 18000,
    discount: 14999,
    rating: 5,
    tag: "New",
    img1: Pro06,
    img2: Pro06,
    desc: "Smart motorized roller blinds with app and voice control. Compatible with Alexa, Google Home, and Apple HomeKit.",
  },
  {
    id: 7,
    name: "Egyptian Cotton Bedsheet",
    category: "Bed & Bath Linens",
    price: 4200,
    discount: 2999,
    rating: 5,
    tag: "Bestseller",
    img1: Pro07,
    img2: Pro07,
    desc: "500 thread count Egyptian cotton bedsheets. Ultra-soft, breathable, and long-lasting. Available in King, Queen, and Single sizes.",
  },
  {
    id: 8,
    name: "Orthopedic Memory Foam Mattress",
    category: "Mattresses",
    price: 35000,
    discount: 27999,
    rating: 5,
    tag: "Sale",
    img1: Pro08,
    img2: Pro08,
    desc: "7-zone orthopedic memory foam mattress with cooling gel technology. Ideal for back and joint support.",
  },
  {
    id: 9,
    name: "Persian Hand-Knotted Rug",
    category: "Rugs Carpets",
    price: 22000,
    discount: 17499,
    rating: 4,
    tag: "Trending",
    img1: Pro09,
    img2: Pro09,
    desc: "Authentic hand-knotted Persian rug with intricate patterns. Made from 100% pure wool, available in multiple sizes.",
  },
  {
    id: 10,
    name: "European Oak Flooring",
    category: "Wooden Flooring",
    price: 850,
    discount: 699,
    rating: 5,
    tag: "New",
    img1: Pro10,
    img2: Pro10,
    desc: "Solid European Oak hardwood flooring, pre-finished with UV lacquer. Per sq.ft. pricing, minimum order 200 sq.ft.",
  },
  {
    id: 11,
    name: "Wall-to-Wall Wool Carpet",
    category: "Wall-to-Wall Carpets",
    price: 1200,
    discount: 949,
    rating: 4,
    tag: "Sale",
    img1: Pro11,
    img2: Pro11,
    desc: "Premium wool wall-to-wall carpet with 12mm pile height. Per sq.ft. pricing. Professional installation included.",
  },
  {
    id: 12,
    name: "Floral Fabric Upholstery",
    category: "Upholstery",
    price: 9500,
    discount: 7299,
    rating: 4,
    tag: null,
    img1: Pro12,
    img2: Pro12,
    desc: "Luxurious floral-patterned upholstery fabric. High durability weave, suitable for chairs, headboards, and ottomans.",
  },
];

const tagColors = {
  Bestseller: { bg: "#1a1a1a", color: "#fff" },
  New: { bg: "#2e7d32", color: "#fff" },
  Sale: { bg: "#c62828", color: "#fff" },
  Trending: { bg: "#6a1b9a", color: "#fff" },
};

const ALL_CATEGORIES = [
  "All",
  "Curtains",
  "Upholstery",
  "Wallpaper",
  "Blinds & Curtain Tracks",
  "Motorized & Automation Solutions",
  "Bed & Bath Linens",
  "Mattresses",
  "Rugs Carpets",
  "Wooden Flooring",
  "Wall-to-Wall Carpets",
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={s <= rating ? "#f59e0b" : "none"}
          stroke={s <= rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
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
          <div className="modal-success">
            <div className="success-icon">
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
            <button className="success-btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="modal-eyebrow">Enquiry Form</span>
              <h3 className="modal-title">{product.name}</h3>
              <p className="modal-cat">
                {product.category} &nbsp;·&nbsp; ₹
                {product.discount.toLocaleString()}{" "}
                <s>₹{product.price.toLocaleString()}</s>
              </p>
            </div>

            <form className="enq-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
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
              <div className="form-group">
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
              <div className="form-group">
                <label>Address / City</label>
                <input
                  name="address"
                  placeholder="Your address or city"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={`I'm interested in ${product.name}...`}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-btn">
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

/* ── Product Detail Modal ── */
function ProductDetailModal({ product, onClose, onEnquire }) {
  const discountPct = Math.round(
    ((product.price - product.discount) / product.price) * 100,
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="detail-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
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

        <div className="detail-img-wrap">
          {product.tag && (
            <span
              className="card-badge"
              style={{
                background: tagColors[product.tag].bg,
                color: tagColors[product.tag].color,
              }}
            >
              {product.tag}
            </span>
          )}
          <span className="card-discount">-{discountPct}%</span>
          <img src={product.img1} alt={product.name} />
        </div>

        <div className="detail-info">
          <span className="detail-cat">{product.category}</span>
          <h2 className="detail-name">{product.name}</h2>
          <StarRating rating={product.rating} />
          <p className="detail-desc">{product.desc}</p>
          <div className="detail-price">
            <span className="price-current">
              ₹{product.discount.toLocaleString()}
            </span>
            <span className="price-original">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="save-badge">Save {discountPct}%</span>
          </div>
          <button
            className="enq-now-btn"
            onClick={() => {
              onClose();
              onEnquire(product);
            }}
          >
            <svg
              width="15"
              height="15"
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
    </div>
  );
}

/* ── Product Card ── */
function ProductCard({ item, index, onEnquire, onDetail }) {
  const discountPct = Math.round(
    ((item.price - item.discount) / item.price) * 100,
  );

  return (
    <div className="product-card" style={{ animationDelay: `${index * 80}ms` }}>
      {item.tag && (
        <span
          className="card-badge"
          style={{
            background: tagColors[item.tag].bg,
            color: tagColors[item.tag].color,
          }}
        >
          {item.tag}
        </span>
      )}
      <span className="card-discount">-{discountPct}%</span>

      <div
        className="img-box"
        onClick={() => onDetail(item)}
        style={{ cursor: "pointer" }}
      >
        <img src={item.img1} className="img1" alt={item.name} />
        <img src={item.img2} className="img2" alt={item.name} />
        <div className="img-overlay-hint">View Details</div>
      </div>

      <div className="card-body">
        <p className="card-category">{item.category}</p>
        <h4
          className="card-name"
          onClick={() => onDetail(item)}
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </h4>
        <StarRating rating={item.rating} />

        <div className="card-price">
          <span className="price-current">
            ₹{item.discount.toLocaleString()}
          </span>
          <span className="price-original">₹{item.price.toLocaleString()}</span>
        </div>

        <button className="cart-btn" onClick={() => onEnquire(item)}>
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
}

/* ── Main Section ── */
export default function ProductSection() {
  const [filter, setFilter] = useState("All");
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [detailProduct, setDetailProduct] = useState(null);
  const scrollRef = useState(null);
  const filterRef = { current: null };

  const scrollFilters = (dir) => {
    const el = document.getElementById("ps-filter-track");
    if (el) el.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  const filtered =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="ps-section">
      <div className="ps-header">
        <span className="ps-eyebrow">Curated Collection</span>
        <h2 className="ps-title">Our Products</h2>
        <p className="ps-subtitle">
          Discover pieces crafted for modern living — where quality meets
          timeless design.
        </p>
      </div>

      <div className="ps-filters-wrapper">
        <button
          className="filter-arrow filter-arrow-left"
          onClick={() => scrollFilters(-1)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
        </button>

        <div className="ps-filters" id="ps-filter-track">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <button
          className="filter-arrow filter-arrow-right"
          onClick={() => scrollFilters(1)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </div>

      <div className="ps-grid">
        {filtered.map((item, i) => (
          <ProductCard
            key={item.id}
            item={item}
            index={i}
            onEnquire={setEnquiryProduct}
            onDetail={setDetailProduct}
          />
        ))}
      </div>

      <div className="ps-footer">
        <Link to="/all-products" className="view-all-btn">
          <span>View All Products</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12,5 19,12 12,19" />
          </svg>
        </Link>
        <p className="ps-count">
          Showing {filtered.length} of {products.length} products
        </p>
      </div>

      {/* Product Detail Modal */}
      {detailProduct && (
        <ProductDetailModal
          product={detailProduct}
          onClose={() => setDetailProduct(null)}
          onEnquire={setEnquiryProduct}
        />
      )}

      {/* Enquiry Modal */}
      {enquiryProduct && (
        <EnquiryModal
          product={enquiryProduct}
          onClose={() => setEnquiryProduct(null)}
        />
      )}
    </section>
  );
}
