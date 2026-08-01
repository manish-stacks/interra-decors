import React, { useState } from "react";
import "./ProductDetailsSection.css";

import Pro01 from "../../assets/products/sheer-elegance-curtains.jpg";
import Pro02 from "../../assets/products/velvet-blackout-curtains.jpg";
import Pro03 from "../../assets/products/linen-sofa-upholstery.jpg";
import Pro04 from "../../assets/products/geometric-wallpaper.webp";
import Pro05 from "../../assets/products/roman-blinds.jpg";
import Pro06 from "../../assets/products/motorized-roller-blinds.jpg";
import Pro07 from "../../assets/products/egyptian-cotton0bedsheet.jpg";
import Pro08 from "../../assets/products/orthopedic-memory-foam-mattress.jpg";
import Pro09 from "../../assets/products/persian-hand-knotted-rugs.webp";
import Pro10 from "../../assets/products/european-oak-flooring.jpg";
import Pro11 from "../../assets/products/wall-to-wall-wool-carpet.jpg";
import Pro12 from "../../assets/products/floral-fabric-pholstery.jpg";
import { useNavigate, useParams } from "react-router-dom";

const allProducts = [
  {
    id: 1,
    slug: "sheer-elegance-curtains",
    category: "Curtains",
    name: "Sheer Elegance Curtains",
    badge: "Bestseller",
    price: 3299,
    originalPrice: 4500,
    rating: 5,
    reviewCount: 214,
    inStock: true,
    sku: "CRT-SHR-001",
    delivery: "Free delivery by Tomorrow",
    highlights: [
      "Lightweight sheer fabric",
      "Diffuses natural light beautifully",
      "Available in custom sizes",
      "Wide range of 20+ colors",
      "Machine washable",
    ],
    description:
      "Transform your space with Sheer Elegance Curtains — designed to softly filter natural light while maintaining your privacy. Crafted from premium lightweight fabric, these curtains add an airy, sophisticated touch to any room. Available in custom sizes and over 20 stunning colors to perfectly match your interiors.",
    colors: ["#f5f5f0", "#e8d49a", "#c8a8a8", "#a8c8e0"],
    colorNames: ["Ivory", "Gold", "Rose", "Sky Blue"],
    sizes: ["4x5 ft", "4x7 ft", "4x9 ft", "Custom"],
    images: [Pro01, Pro01, Pro01, Pro01],
    specs: [
      { label: "Material", value: "100% Polyester Sheer" },
      { label: "Default Size", value: "4 × 7 ft per panel" },
      { label: "Care", value: "Machine Wash Cold" },
      { label: "Header Type", value: "Rod Pocket / Eyelet" },
      { label: "Panels Included", value: "2 per set" },
      { label: "Warranty", value: "1 Year" },
    ],
    reviews: [
      {
        id: 1,
        name: "Sneha R.",
        rating: 5,
        date: "10 Jan 2025",
        text: "These curtains are absolutely gorgeous! The fabric is so light and airy. My living room looks like a magazine shoot now.",
        avatar: "S",
      },
      {
        id: 2,
        name: "Amit T.",
        rating: 5,
        date: "22 Feb 2025",
        text: "Perfect quality and the custom sizing option is a game changer. Delivered on time and packed beautifully.",
        avatar: "A",
      },
      {
        id: 3,
        name: "Riya M.",
        rating: 5,
        date: "15 Mar 2025",
        text: "Bought in ivory color — it's even more elegant in person. Very happy with the purchase!",
        avatar: "R",
      },
    ],
    related: [2, 5, 6, 4],
  },
  {
    id: 2,
    slug: "velvet-blackout-curtains",
    category: "Curtains",
    name: "Velvet Blackout Curtains",
    badge: "New",
    price: 5499,
    originalPrice: 6800,
    rating: 4,
    reviewCount: 98,
    inStock: true,
    sku: "CRT-VLV-002",
    delivery: "Free delivery in 2-3 days",
    highlights: [
      "100% blackout lining",
      "Premium velvet fabric",
      "Reduces noise by 40%",
      "Thermal insulation",
      "Perfect for bedrooms & home theatre",
    ],
    description:
      "Experience complete darkness and luxury with Velvet Blackout Curtains. The rich velvet exterior combined with a 100% blackout lining ensures no light penetration, making these perfect for bedrooms, nurseries, and home theatres. The heavy fabric also provides excellent thermal insulation and noise reduction.",
    colors: ["#1a1a1a", "#4a0a0a", "#0a0a4a", "#2a4a2a"],
    colorNames: ["Onyx", "Burgundy", "Navy", "Forest"],
    sizes: ["4x7 ft", "4x9 ft", "6x9 ft", "Custom"],
    images: [Pro02, Pro02, Pro02, Pro02],
    specs: [
      { label: "Material", value: "Premium Velvet + Blackout Lining" },
      { label: "Blackout Level", value: "100%" },
      { label: "Default Size", value: "4 × 9 ft per panel" },
      { label: "Care", value: "Dry Clean Only" },
      { label: "Panels Included", value: "2 per set" },
      { label: "Warranty", value: "2 Years" },
    ],
    reviews: [
      {
        id: 1,
        name: "Vikram S.",
        rating: 4,
        date: "05 Feb 2025",
        text: "Incredible blackout performance. My bedroom is now a proper sleep sanctuary. The velvet feels very premium.",
        avatar: "V",
      },
      {
        id: 2,
        name: "Pooja K.",
        rating: 4,
        date: "18 Mar 2025",
        text: "Great quality curtains. The navy color is stunning. Only wish they had more color options.",
        avatar: "P",
      },
      {
        id: 3,
        name: "Nikhil D.",
        rating: 4,
        date: "01 Apr 2025",
        text: "Excellent for home theatre setup. Complete darkness achieved. Very satisfied with the purchase.",
        avatar: "N",
      },
    ],
    related: [1, 5, 6, 3],
  },
  {
    id: 3,
    slug: "linen-sofa-upholstery",
    category: "Upholstery",
    name: "Linen Sofa Upholstery",
    badge: "Trending",
    price: 9499,
    originalPrice: 12000,
    rating: 5,
    reviewCount: 176,
    inStock: true,
    sku: "UPH-LIN-003",
    delivery: "Free delivery in 3-5 days",
    highlights: [
      "100% natural linen fabric",
      "Breathable & durable weave",
      "Available in 30+ shades",
      "Stain-resistant finish",
      "Eco-friendly material",
    ],
    description:
      "Revitalize your furniture with our Natural Linen Sofa Upholstery — the perfect blend of comfort, durability, and natural elegance. Woven from 100% natural linen, this fabric breathes beautifully and develops a gorgeous patina over time. Available in over 30 handpicked shades, it's ideal for sofas, armchairs, and ottomans.",
    colors: ["#d4c5a9", "#c8a84b", "#8b7355", "#6b8e6b"],
    colorNames: ["Natural", "Wheat", "Walnut", "Sage"],
    sizes: ["Per Metre", "5 Metres", "10 Metres", "Custom"],
    images: [Pro03, Pro03, Pro03, Pro03],
    specs: [
      { label: "Material", value: "100% Natural Linen" },
      { label: "Weight", value: "320 GSM" },
      { label: "Width", value: "54 inches" },
      { label: "Martindale Rub", value: "30,000 cycles" },
      { label: "Finish", value: "Stain Resistant" },
      { label: "Warranty", value: "1 Year Fabric Warranty" },
    ],
    reviews: [
      {
        id: 1,
        name: "Divya N.",
        rating: 5,
        date: "14 Jan 2025",
        text: "Absolutely beautiful fabric. The natural texture adds so much character to my sofa. Very durable too!",
        avatar: "D",
      },
      {
        id: 2,
        name: "Rohan P.",
        rating: 5,
        date: "28 Feb 2025",
        text: "Used this for a full sofa reupholstery project. The quality is outstanding and the color range is superb.",
        avatar: "R",
      },
      {
        id: 3,
        name: "Kavya L.",
        rating: 5,
        date: "10 Apr 2025",
        text: "Eco-friendly, gorgeous, and durable. Exactly what I was looking for. Highly recommend the sage green color!",
        avatar: "K",
      },
    ],
    related: [12, 4, 9, 10],
  },
  {
    id: 4,
    slug: "geometric-wallpaper",
    category: "Wallpaper",
    name: "Geometric Wallpaper",
    badge: "Sale",
    price: 2499,
    originalPrice: 3200,
    rating: 4,
    reviewCount: 143,
    inStock: true,
    sku: "WLP-GEO-004",
    delivery: "Free delivery by Tomorrow",
    highlights: [
      "Easy peel-and-stick application",
      "Fully removable & repositionable",
      "Water resistant surface",
      "Bold geometric patterns",
      "No tools or paste required",
    ],
    description:
      "Make a bold statement with our Geometric Wallpaper — featuring striking modern patterns that instantly transform any wall. The innovative peel-and-stick technology means no paste, no mess, and no professional help needed. Fully removable and repositionable, it's perfect for renters and those who love to refresh their interiors frequently.",
    colors: ["#1a1a1a", "#c8a84b", "#4a6fa5", "#8b5e3c"],
    colorNames: ["Black & White", "Gold & Ivory", "Navy & White", "Terracotta"],
    sizes: ["Per Roll (10m)", "2 Rolls", "5 Rolls", "Custom"],
    images: [Pro04, Pro04, Pro04, Pro04],
    specs: [
      { label: "Material", value: "Non-woven Fabric" },
      { label: "Roll Size", value: "10m × 53cm" },
      { label: "Application", value: "Peel & Stick" },
      { label: "Finish", value: "Matte / Satin" },
      { label: "Coverage", value: "5.3 sq.m per roll" },
      { label: "Removable", value: "Yes, residue-free" },
    ],
    reviews: [
      {
        id: 1,
        name: "Ishaan V.",
        rating: 4,
        date: "20 Jan 2025",
        text: "Applied it myself in 2 hours with zero experience. Looks absolutely professional. Love the gold pattern!",
        avatar: "I",
      },
      {
        id: 2,
        name: "Meera S.",
        rating: 4,
        date: "12 Mar 2025",
        text: "Great quality and the peel-stick application is so easy. Removed and reapplied twice without any damage.",
        avatar: "M",
      },
      {
        id: 3,
        name: "Suresh K.",
        rating: 4,
        date: "05 Apr 2025",
        text: "Very nice product. The patterns are sharp and printing quality is excellent. Would definitely buy again.",
        avatar: "S",
      },
    ],
    related: [1, 3, 10, 11],
  },
  {
    id: 5,
    slug: "roman-blinds",
    category: "Blinds & Curtain Tracks",
    name: "Roman Blinds",
    badge: null,
    price: 4199,
    originalPrice: 5500,
    rating: 4,
    reviewCount: 87,
    inStock: true,
    sku: "BLD-ROM-005",
    delivery: "Free delivery in 3-5 days",
    highlights: [
      "Smooth folding mechanism",
      "Customizable fabric & lining",
      "Light filtering or blackout options",
      "Easy cordless operation",
      "Custom size available",
    ],
    description:
      "Add timeless elegance to your windows with our Roman Blinds. The smooth, clean folding mechanism creates beautiful horizontal pleats when raised, adding texture and sophistication to any room. Available with light-filtering or blackout lining, and fully customizable in fabric, size, and heading style.",
    colors: ["#f0ede4", "#c8a84b", "#8b7355", "#4a4a4a"],
    colorNames: ["Cream", "Gold", "Linen", "Charcoal"],
    sizes: ["2x4 ft", "3x5 ft", "4x5 ft", "Custom"],
    images: [Pro05, Pro05, Pro05, Pro05],
    specs: [
      { label: "Operation", value: "Cordless / Cord" },
      { label: "Lining", value: "Light Filter or Blackout" },
      { label: "Default Size", value: "3 × 5 ft" },
      { label: "Mounting", value: "Inside or Outside Mount" },
      { label: "Material", value: "Woven Fabric" },
      { label: "Warranty", value: "2 Years" },
    ],
    reviews: [
      {
        id: 1,
        name: "Anita R.",
        rating: 4,
        date: "08 Feb 2025",
        text: "Clean, elegant look in my study room. The cordless option is a huge plus with kids around.",
        avatar: "A",
      },
      {
        id: 2,
        name: "Kartik M.",
        rating: 4,
        date: "25 Mar 2025",
        text: "Custom sizing was perfect. The linen color is gorgeous and the folding mechanism is very smooth.",
        avatar: "K",
      },
      {
        id: 3,
        name: "Sunita B.",
        rating: 4,
        date: "18 Apr 2025",
        text: "Good quality Roman blinds. The blackout lining works very well. Happy with the purchase.",
        avatar: "S",
      },
    ],
    related: [2, 6, 1, 4],
  },
  {
    id: 6,
    slug: "motorized-roller-blinds",
    category: "Motorized & Automation Solutions",
    name: "Motorized Roller Blinds",
    badge: "New",
    price: 14999,
    originalPrice: 18000,
    rating: 5,
    reviewCount: 62,
    inStock: true,
    sku: "MOT-RLR-006",
    delivery: "Free delivery in 5-7 days + Installation",
    highlights: [
      "App & voice control",
      "Alexa, Google Home & Apple HomeKit compatible",
      "Whisper-quiet motor",
      "Schedule automation",
      "Battery & wired options",
    ],
    description:
      "Step into the future of home automation with our Motorized Roller Blinds. Control your blinds with a tap on your phone, a voice command, or set automated schedules so your blinds adjust with the sunrise and sunset. The whisper-quiet motor ensures smooth, silent operation every time.",
    colors: ["#f5f5f0", "#1a1a1a", "#c8c8c8", "#4a6fa5"],
    colorNames: ["White", "Blackout Black", "Silver Grey", "Sky Blue"],
    sizes: ["3x5 ft", "4x6 ft", "5x7 ft", "Custom"],
    images: [Pro06, Pro06, Pro06, Pro06],
    specs: [
      { label: "Motor Type", value: "DC Brushless (Whisper-Quiet)" },
      { label: "Control", value: "App / Voice / Remote / Auto" },
      { label: "Power", value: "Wired or Rechargeable Battery" },
      { label: "Compatibility", value: "Alexa, Google Home, HomeKit" },
      { label: "Noise Level", value: "< 35 dB" },
      { label: "Warranty", value: "3 Years Motor + 2 Years Fabric" },
    ],
    reviews: [
      {
        id: 1,
        name: "Rahul G.",
        rating: 5,
        date: "15 Jan 2025",
        text: "Life-changing product! I just say 'Alexa, close the blinds' and done. The automation feature is incredible.",
        avatar: "R",
      },
      {
        id: 2,
        name: "Preethi S.",
        rating: 5,
        date: "02 Mar 2025",
        text: "Very quiet motor — doesn't disturb sleep at all. Setup was easy and the app is intuitive. 10/10!",
        avatar: "P",
      },
      {
        id: 3,
        name: "Kiran N.",
        rating: 5,
        date: "20 Apr 2025",
        text: "Premium product with premium quality. The schedule feature means I never have to manually adjust them. Love it!",
        avatar: "K",
      },
    ],
    related: [5, 2, 1, 7],
  },
  {
    id: 7,
    slug: "egyptian-cotton-bedsheet",
    category: "Bed & Bath Linens",
    name: "Egyptian Cotton Bedsheet",
    badge: "Bestseller",
    price: 2999,
    originalPrice: 4200,
    rating: 5,
    reviewCount: 389,
    inStock: true,
    sku: "BED-EGY-007",
    delivery: "Free delivery by Tomorrow",
    highlights: [
      "500 thread count",
      "100% long-staple Egyptian cotton",
      "Ultra-soft & breathable",
      "Available in King, Queen & Single",
      "Pre-washed for softness",
    ],
    description:
      "Sleep in unparalleled luxury with our 500 Thread Count Egyptian Cotton Bedsheets. Made from the world's finest long-staple cotton, these sheets grow softer with every wash. The breathable weave keeps you cool in summer and warm in winter.",
    colors: ["#f5f5f0", "#c8a84b", "#b0c8e0", "#e0b0b0"],
    colorNames: ["Crisp White", "Champagne", "Powder Blue", "Blush Pink"],
    sizes: ["Single", "Double", "Queen", "King"],
    images: [Pro07, Pro07, Pro07, Pro07],
    specs: [
      { label: "Material", value: "100% Long-Staple Egyptian Cotton" },
      { label: "Thread Count", value: "500 TC" },
      { label: "Weave", value: "Sateen" },
      { label: "Pocket Depth", value: "Up to 14 inches" },
      { label: "Care", value: "Machine Wash 40°C" },
      { label: "Includes", value: "1 Bedsheet + 2 Pillow Covers" },
    ],
    reviews: [
      {
        id: 1,
        name: "Nisha V.",
        rating: 5,
        date: "03 Jan 2025",
        text: "The softest bedsheet I've ever owned. It literally feels like sleeping on a cloud. Worth every rupee!",
        avatar: "N",
      },
      {
        id: 2,
        name: "Deepak R.",
        rating: 5,
        date: "19 Feb 2025",
        text: "Bought the king size in white — absolutely pristine quality. Has stayed perfectly soft after 10+ washes.",
        avatar: "D",
      },
      {
        id: 3,
        name: "Swati M.",
        rating: 5,
        date: "07 Apr 2025",
        text: "Gift-worthy quality. Everyone who visits asks about these sheets. Highly, highly recommend!",
        avatar: "S",
      },
    ],
    related: [8, 9, 10, 11],
  },
  {
    id: 8,
    slug: "orthopedic-memory-foam-mattress",
    category: "Mattresses",
    name: "Orthopedic Memory Foam Mattress",
    badge: "Sale",
    price: 27999,
    originalPrice: 35000,
    rating: 5,
    reviewCount: 521,
    inStock: true,
    sku: "MAT-ORT-008",
    delivery: "Free delivery & installation in 5-7 days",
    highlights: [
      "7-zone orthopedic support",
      "Cooling gel memory foam",
      "Medium-firm comfort level",
      "CertiPUR-US certified foam",
      "100-night free trial",
    ],
    description:
      "Wake up pain-free every morning with our 7-Zone Orthopedic Memory Foam Mattress. The advanced zoned support system provides targeted pressure relief for shoulders, back, hips, and legs. Backed by a 100-night free trial and 10-year warranty.",
    colors: ["#f0ede4"],
    colorNames: ["Standard White"],
    sizes: [
      "Single (72×36)",
      "Double (72×48)",
      "Queen (72×60)",
      "King (72×72)",
    ],
    images: [Pro08, Pro08, Pro08, Pro08],
    specs: [
      { label: "Thickness", value: "8 inches (20 cm)" },
      { label: "Layers", value: "Gel Memory Foam + HR Base Foam" },
      { label: "Firmness", value: "Medium-Firm (6/10)" },
      { label: "Cover", value: "Removable, Washable Knit" },
      { label: "Certifications", value: "CertiPUR-US, OEKO-TEX" },
      { label: "Warranty", value: "10 Years + 100-Night Trial" },
    ],
    reviews: [
      {
        id: 1,
        name: "Manish T.",
        rating: 5,
        date: "12 Dec 2024",
        text: "My chronic back pain has reduced significantly after switching to this mattress. Absolute game changer!",
        avatar: "M",
      },
      {
        id: 2,
        name: "Ananya S.",
        rating: 5,
        date: "30 Jan 2025",
        text: "The cooling gel actually works — I used to wake up sweaty but not anymore. Fantastic quality.",
        avatar: "A",
      },
      {
        id: 3,
        name: "Vijay K.",
        rating: 5,
        date: "22 Mar 2025",
        text: "Best investment I've made for my health. The 100-night trial gave me confidence to buy. Zero regrets.",
        avatar: "V",
      },
    ],
    related: [7, 9, 10, 11],
  },
  {
    id: 9,
    slug: "persian-hand-knotted-rug",
    category: "Rugs & Carpets",
    name: "Persian Hand-Knotted Rug",
    badge: "Trending",
    price: 17499,
    originalPrice: 22000,
    rating: 4,
    reviewCount: 93,
    inStock: true,
    sku: "RUG-PRS-009",
    delivery: "Free delivery in 5-7 days",
    highlights: [
      "100% authentic hand-knotted",
      "Pure New Zealand wool",
      "Intricate traditional patterns",
      "Anti-slip backing",
      "Multiple sizes available",
    ],
    description:
      "Own a piece of timeless artistry with our authentic Persian Hand-Knotted Rug. Each rug is individually crafted by master artisans using centuries-old techniques, with every knot tied by hand using 100% pure New Zealand wool.",
    colors: ["#8b1a1a", "#1a3a5c", "#2a5c2a", "#8b6914"],
    colorNames: ["Crimson", "Royal Blue", "Emerald", "Gold"],
    sizes: ["2×3 ft", "4×6 ft", "6×9 ft", "8×10 ft"],
    images: [Pro09, Pro09, Pro09, Pro09],
    specs: [
      { label: "Material", value: "100% Pure New Zealand Wool" },
      { label: "Construction", value: "Hand-Knotted" },
      { label: "Knot Density", value: "160 knots per sq. inch" },
      { label: "Pile Height", value: "8mm" },
      { label: "Backing", value: "Cotton canvas + Anti-slip" },
      { label: "Warranty", value: "5 Years" },
    ],
    reviews: [
      {
        id: 1,
        name: "Laleh P.",
        rating: 4,
        date: "18 Jan 2025",
        text: "A masterpiece! The craftsmanship is extraordinary. The colors are even richer in person. My living room is transformed.",
        avatar: "L",
      },
      {
        id: 2,
        name: "Suresh M.",
        rating: 4,
        date: "03 Mar 2025",
        text: "You can feel the difference between a hand-knotted rug and a machine-made one immediately. Worth every paisa.",
        avatar: "S",
      },
      {
        id: 3,
        name: "Priya H.",
        rating: 4,
        date: "25 Apr 2025",
        text: "Gorgeous rug. The wool feels very high quality and it's held up beautifully in a high-traffic area.",
        avatar: "P",
      },
    ],
    related: [11, 10, 8, 7],
  },
  {
    id: 10,
    slug: "european-oak-flooring",
    category: "Wooden Flooring",
    name: "European Oak Flooring",
    badge: "New",
    price: 699,
    originalPrice: 850,
    rating: 5,
    reviewCount: 267,
    inStock: true,
    sku: "FLR-OAK-010",
    delivery: "Free delivery + installation quote on request",
    highlights: [
      "Solid European Oak hardwood",
      "Pre-finished with UV lacquer",
      "18mm thick planks",
      "Natural wood grain texture",
      "Minimum order 200 sq.ft.",
    ],
    description:
      "Elevate your floors with the warmth and character of solid European Oak Flooring. Each plank is crafted from sustainably sourced European oak and finished with a UV-cured lacquer for durability and easy maintenance.",
    colors: ["#d4b483", "#a8834b", "#7a5c2e", "#4a3318"],
    colorNames: ["Natural Oak", "Honey Oak", "Cognac", "Espresso"],
    sizes: ["Sample", "100 sq.ft.", "200 sq.ft.", "Custom"],
    images: [Pro10, Pro10, Pro10, Pro10],
    specs: [
      { label: "Species", value: "European Oak (Quercus Robur)" },
      { label: "Thickness", value: "18mm" },
      { label: "Plank Width", value: "120mm – 190mm" },
      { label: "Plank Length", value: "600mm – 1800mm" },
      { label: "Finish", value: "UV Lacquer (Matte/Gloss)" },
      { label: "Warranty", value: "25 Years Structural" },
    ],
    reviews: [
      {
        id: 1,
        name: "Arjun B.",
        rating: 5,
        date: "08 Jan 2025",
        text: "Installed in my entire home — 800 sq.ft. The natural oak look is stunning and the quality is unbeatable.",
        avatar: "A",
      },
      {
        id: 2,
        name: "Rekha S.",
        rating: 5,
        date: "27 Feb 2025",
        text: "Got the cognac color and it pairs beautifully with our furniture. The installation team was also excellent.",
        avatar: "R",
      },
      {
        id: 3,
        name: "Tarun V.",
        rating: 5,
        date: "14 Apr 2025",
        text: "Premium product at a fair price. The pre-finished lacquer is holding up perfectly after 3 months of heavy use.",
        avatar: "T",
      },
    ],
    related: [11, 9, 8, 3],
  },
  {
    id: 11,
    slug: "wall-to-wall-wool-carpet",
    category: "Wall-to-Wall Carpets",
    name: "Wall-to-Wall Wool Carpet",
    badge: "Sale",
    price: 949,
    originalPrice: 1200,
    rating: 4,
    reviewCount: 184,
    inStock: true,
    sku: "CRP-WLW-011",
    delivery: "Free delivery + professional installation included",
    highlights: [
      "Premium 100% wool",
      "12mm dense pile height",
      "Professional installation included",
      "Hypoallergenic & fire resistant",
      "Priced per sq.ft.",
    ],
    description:
      "Create a warm, luxurious atmosphere underfoot with our Premium Wall-to-Wall Wool Carpet. The 12mm dense pile provides exceptional comfort and insulation, while the 100% wool construction ensures natural durability, stain resistance, and fire retardancy.",
    colors: ["#f0ede4", "#c8a84b", "#8b7355", "#4a4a4a"],
    colorNames: ["Cream", "Wheat", "Beige", "Charcoal"],
    sizes: ["100 sq.ft.", "300 sq.ft.", "500 sq.ft.", "Custom"],
    images: [Pro11, Pro11, Pro11, Pro11],
    specs: [
      { label: "Material", value: "100% Pure Wool" },
      { label: "Pile Height", value: "12mm" },
      { label: "Weight", value: "1800 GSM" },
      { label: "Backing", value: "Jute + Latex" },
      { label: "Installation", value: "Professional (Included)" },
      { label: "Warranty", value: "3 Years" },
    ],
    reviews: [
      {
        id: 1,
        name: "Geeta R.",
        rating: 4,
        date: "22 Jan 2025",
        text: "The wool quality is excellent and the installation team was very professional and tidy. Looks amazing!",
        avatar: "G",
      },
      {
        id: 2,
        name: "Prakash N.",
        rating: 4,
        date: "10 Mar 2025",
        text: "Very plush and warm. Perfect for the winter months. The charcoal color looks very elegant in my bedroom.",
        avatar: "P",
      },
      {
        id: 3,
        name: "Asha T.",
        rating: 4,
        date: "29 Apr 2025",
        text: "Great value including installation. The carpet is dense and comfortable. No complaints whatsoever.",
        avatar: "A",
      },
    ],
    related: [9, 10, 8, 3],
  },
  {
    id: 12,
    slug: "floral-fabric-upholstery",
    category: "Upholstery",
    name: "Floral Fabric Upholstery",
    badge: null,
    price: 7299,
    originalPrice: 9500,
    rating: 4,
    reviewCount: 71,
    inStock: true,
    sku: "UPH-FLR-012",
    delivery: "Free delivery in 3-5 days",
    highlights: [
      "Luxurious floral pattern",
      "High durability weave",
      "Suitable for chairs & headboards",
      "Fade resistant dyes",
      "40,000 Martindale rub test",
    ],
    description:
      "Bring the beauty of nature indoors with our Floral Fabric Upholstery. The intricate botanical print is rendered in rich, fade-resistant dyes on a high-durability woven base. Tested to 40,000 Martindale rubs — perfect for statement chairs, headboards, cushions, and ottomans.",
    colors: ["#e8d4c0", "#c8a84b", "#8b5e3c", "#6b8e6b"],
    colorNames: [
      "Blush Floral",
      "Gold Floral",
      "Terracotta Floral",
      "Botanical Green",
    ],
    sizes: ["Per Metre", "5 Metres", "10 Metres", "Custom"],
    images: [Pro12, Pro12, Pro12, Pro12],
    specs: [
      { label: "Material", value: "Polyester-Cotton Blend" },
      { label: "Weight", value: "350 GSM" },
      { label: "Width", value: "54 inches" },
      { label: "Martindale Rub", value: "40,000 cycles" },
      { label: "Finish", value: "Fade Resistant" },
      { label: "Warranty", value: "1 Year Fabric Warranty" },
    ],
    reviews: [
      {
        id: 1,
        name: "Sunaina K.",
        rating: 4,
        date: "16 Feb 2025",
        text: "Used for a wingback chair reupholstery — the result is stunning! The botanical green color is breathtaking.",
        avatar: "S",
      },
      {
        id: 2,
        name: "Mihir D.",
        rating: 4,
        date: "01 Apr 2025",
        text: "Excellent fabric quality. The floral print is crisp and beautiful. Very happy with the purchase.",
        avatar: "M",
      },
      {
        id: 3,
        name: "Leena P.",
        rating: 4,
        date: "18 Apr 2025",
        text: "Beautiful pattern and durable construction. Perfect for my DIY headboard project. Highly recommend!",
        avatar: "L",
      },
    ],
    related: [3, 9, 4, 10],
  },
];

function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug) || allProducts[0];
}

function discPct(price, original) {
  return Math.round(((original - price) / original) * 100);
}

const StarRating = ({ rating, size = 14 }) => (
  <div className="pds-stars">
    {[1, 2, 3, 4, 5].map((s) => (
      <span
        key={s}
        className="pds-star"
        style={{
          fontSize: size,
          color:
            s <= Math.floor(rating)
              ? "#c8a84b"
              : s - 0.5 <= rating
                ? "#c8a84b"
                : "#ddd",
          opacity: s - 0.5 <= rating && s > Math.floor(rating) ? 0.5 : 1,
        }}
      >
        ★
      </span>
    ))}
  </div>
);

function EnquiryModal({ product, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const pct = discPct(product.price, product.originalPrice);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pds-modal-overlay" onClick={onClose}>
      <div className="pds-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="pds-modal-close" onClick={onClose}>
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
          <div className="pds-modal-success">
            <div className="pds-success-icon">
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
            <button className="pds-success-btn" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="pds-modal-header">
              <span className="pds-modal-eyebrow">Enquiry Form</span>
              <h3 className="pds-modal-title">{product.name}</h3>
              <p className="pds-modal-cat">
                {product.category}&nbsp;·&nbsp;₹
                {product.price.toLocaleString("en-IN")}{" "}
                <s>₹{product.originalPrice.toLocaleString("en-IN")}</s>&nbsp;
                <span className="pds-modal-save-pill">Save {pct}%</span>
              </p>
            </div>
            <form className="pds-enq-form" onSubmit={handleSubmit}>
              <div className="pds-form-row">
                <div className="pds-form-group">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="pds-form-group">
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
              <div className="pds-form-group">
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
              <div className="pds-form-group">
                <label>Address / City</label>
                <input
                  name="address"
                  placeholder="Your address or city"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
              <div className="pds-form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={`I'm interested in ${product.name}...`}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="pds-enq-submit-btn">
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

const ProductDetailsSection = () => {
  const {slug} = useParams()
  const navigate = useNavigate();
  const product = getProductBySlug(slug);
  const relatedProducts = product.related
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean);

  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[1] || product.sizes[0],
  );
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [pincode, setPincode] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const pct = discPct(product.price, product.originalPrice);

  const checkPincode = () => {
    if (pincode.length === 6)
      setPincodeMsg("✓ Delivery available — " + product.delivery);
    else setPincodeMsg("✗ Enter a valid 6-digit pincode");
  };

  const goToProduct = (p) => navigate(`/products/${p.slug}`);

  return (
    <section className="pds-wrapper">
      <div className="pds-container">
        {/* Gallery */}
        <div className="pds-gallery">
          <div className="pds-thumbs">
            {product.images.map((img, i) => (
              <button
                key={i}
                className={`pds-thumb ${activeImg === i ? "active" : ""}`}
                onClick={() => setActiveImg(i)}
              >
                <img
                  src={img}
                  alt={`view-${i}`}
                  onError={(e) =>
                    (e.target.src = `https://placehold.co/100x100/f5f4f0/c8a84b?text=${encodeURIComponent(product.name)}`)
                  }
                />
              </button>
            ))}
          </div>
          <div className="pds-main-img-wrap">
            {product.badge && (
              <span
                className={`pds-img-badge pds-img-badge--${product.badge.toLowerCase()}`}
              >
                {product.badge}
              </span>
            )}
            <span className="pds-img-save">-{pct}%</span>
            <img
              src={product.images[activeImg]}
              alt={product.name}
              className="pds-main-img"
              onError={(e) =>
                (e.target.src = `https://placehold.co/600x600/f5f4f0/c8a84b?text=${encodeURIComponent(product.name)}`)
              }
            />
            <button
              className={`pds-wish-float ${wishlisted ? "active" : ""}`}
              onClick={() => setWishlisted(!wishlisted)}
            >
              {wishlisted ? "❤️" : "🤍"}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pds-info">
          <div className="pds-meta-row">
            <span className="pds-cat">{product.category}</span>
            <span className="pds-sku">SKU: {product.sku}</span>
          </div>
          <h1 className="pds-name">{product.name}</h1>
          <div className="pds-rating-row">
            <StarRating rating={product.rating} size={16} />
            <span className="pds-rating-num">{product.rating}</span>
            <span
              className="pds-review-count"
              onClick={() => setActiveTab("reviews")}
            >
              ({product.reviewCount} reviews)
            </span>
            <span className="pds-divider-dot">•</span>
            <span
              className={`pds-stock-inline ${product.inStock ? "in" : "out"}`}
            >
              {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
            </span>
          </div>
          {/* <div className="pds-price-block">
            <span className="pds-price">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            <span className="pds-old-price">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="pds-save-pill">
              Save ₹
              {(product.originalPrice - product.price).toLocaleString("en-IN")}
            </span>
          </div> */}
          <div className="pds-separator" />

          {/* <div className="pds-option-row">
            <span className="pds-option-label">
              Color: <strong>{product.colorNames[selectedColor]}</strong>
            </span>
            <div className="pds-color-swatches">
              {product.colors.map((color, i) => (
                <button
                  key={i}
                  className={`pds-swatch ${selectedColor === i ? "active" : ""}`}
                  style={{ background: color }}
                  onClick={() => setSelectedColor(i)}
                  title={product.colorNames[i]}
                />
              ))}
            </div>
          </div> */}

          <div className="pds-option-row">
            <span className="pds-option-label">Size:</span>
            <div className="pds-size-btns">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`pds-size-btn ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="pds-action-row">
            <div className="pds-qty-wrap">
              <button
                className="pds-qty-btn"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="pds-qty-num">{qty}</span>
              <button
                className="pds-qty-btn"
                onClick={() => setQty((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button
              className="pds-enq-action-btn"
              onClick={() => setEnquiryOpen(true)}
              disabled={!product.inStock}
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
            <button
              className="pds-buy-btn"
              onClick={() => setEnquiryOpen(true)}
              disabled={!product.inStock}
            >
              Get Quote
            </button>
          </div>
          <div className="pds-separator" />

          {/* <div className="pds-delivery-block">
            <span className="pds-delivery-icon">🚚</span>
            <div className="pds-delivery-content">
              <p className="pds-delivery-title">{product.delivery}</p>
              <div className="pds-pincode-row">
                <input
                  className="pds-pincode-input"
                  type="text"
                  maxLength={6}
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/, ""))}
                />
                <button className="pds-pincode-btn" onClick={checkPincode}>
                  Check
                </button>
              </div>
              {pincodeMsg && (
                <p
                  className={`pds-pincode-msg ${pincodeMsg.startsWith("✓") ? "ok" : "err"}`}
                >
                  {pincodeMsg}
                </p>
              )}
            </div>
          </div> */}

          <div className="pds-trust-row">
            <div className="pds-trust-item">
              <span>🔒</span>
              <span>Secure Payment</span>
            </div>
            {/* <div className="pds-trust-item">
              <span>↩️</span>
              <span>7-Day Returns</span>
            </div> */}
            <div className="pds-trust-item">
              <span>🏅</span>
              <span>Genuine Product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="pds-tabs-wrap">
        <div className="pds-tabs-container">
          <div className="pds-tabs-header">
            {["description", "specs", "reviews"].map((tab) => (
              <button
                key={tab}
                className={`pds-tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "description" && "Description"}
                {tab === "specs" && "Specifications"}
                {tab === "reviews" && `Reviews (${product.reviewCount})`}
              </button>
            ))}
          </div>
          <div className="pds-tab-content">
            {activeTab === "description" && (
              <div className="pds-desc-tab">
                <p className="pds-desc-text">{product.description}</p>
                <ul className="pds-highlights">
                  {product.highlights.map((h, i) => (
                    <li key={i} className="pds-highlight-item">
                      <span className="pds-highlight-dot" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "specs" && (
              <div className="pds-specs-tab">
                <table className="pds-specs-table">
                  <tbody>
                    {product.specs.map((spec, i) => (
                      <tr key={i} className="pds-spec-row">
                        <td className="pds-spec-label">{spec.label}</td>
                        <td className="pds-spec-value">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="pds-reviews-tab">
                <div className="pds-rating-summary">
                  <div className="pds-rating-big">
                    <span className="pds-rating-score">{product.rating}</span>
                    <StarRating rating={product.rating} size={22} />
                    <span className="pds-rating-total">
                      {product.reviewCount} reviews
                    </span>
                  </div>
                </div>
                <div className="pds-reviews-list">
                  {product.reviews.map((rev) => (
                    <div key={rev.id} className="pds-review-card">
                      <div className="pds-review-header">
                        <div className="pds-review-avatar">{rev.avatar}</div>
                        <div className="pds-review-meta">
                          <span className="pds-reviewer-name">{rev.name}</span>
                          <span className="pds-review-date">{rev.date}</span>
                        </div>
                        <StarRating rating={rev.rating} size={13} />
                      </div>
                      <p className="pds-review-text">{rev.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="pds-related-wrap">
        <div className="pds-related-container">
          <h2 className="pds-related-title">You May Also Like</h2>
          <div className="pds-related-grid">
            {relatedProducts.map((item) => {
              const rPct = discPct(item.price, item.originalPrice);
              return (
                <div
                  key={item.id}
                  className="pds-rel-card"
                  onClick={() => goToProduct(item)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="pds-rel-img-wrap">
                    {item.badge && (
                      <span
                        className={`pds-rel-badge pds-rel-badge--${item.badge.toLowerCase()}`}
                      >
                        {item.badge}
                      </span>
                    )}
                    <span className="pds-rel-save">-{rPct}%</span>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="pds-rel-img"
                      onError={(e) =>
                        (e.target.src = `https://placehold.co/300x300/f5f4f0/c8a84b?text=${encodeURIComponent(item.name)}`)
                      }
                    />
                  </div>
                  <div className="pds-rel-body">
                    <span className="pds-rel-cat">{item.category}</span>
                    <h4 className="pds-rel-name">{item.name}</h4>
                    <StarRating rating={item.rating} size={12} />
                    {/* <div className="pds-rel-price-row">
                      <span className="pds-rel-price">
                        ₹{item.price.toLocaleString("en-IN")}
                      </span>
                      <span className="pds-rel-old">
                        ₹{item.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div> */}
                    <button
                      className="pds-rel-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToProduct(item);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {enquiryOpen && (
        <EnquiryModal product={product} onClose={() => setEnquiryOpen(false)} />
      )}
    </section>
  );
};

export default ProductDetailsSection;
