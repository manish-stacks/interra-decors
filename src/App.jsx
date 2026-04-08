import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import AboutUs from "./page/About/AboutUs";
import Blog from "./page/Blogs/Blog";
import Contact from "./page/Contact/ContactUs";
import OurServices from "./page/OurServices/OurServices";
import AllProducts from "./page/AllProducts/AllProducts";
import ProductDetails from "./page/ProductDetails/ProductDetails";
import Checkout from "./page/Checkout/Checkout";
import Projects from "./page/ProjectsPage/ProjectsPage";
import Meeting from "./page/Meeting/Meeting";
import Team from "./page/OurTeam/OurTeam";
import WorkProcess from "./page/WorkProcess/WorkProcessPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/our-projects" element={<Projects />} />
          <Route path="/work-process" element={<WorkProcess />} />
          <Route path="/book-a-meeting" element={<Meeting />} />
          <Route path="/our-team" element={<Team/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
