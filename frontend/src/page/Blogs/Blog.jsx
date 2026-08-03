import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import BlogSection from "../../components/BlogSection/BlogSection";
import TrustSection from "../../components/WhyTrust/Trustsection";

const Blog = () => {
  return (
    <>
      <Breadcrumb />
      <BlogSection />
      <TrustSection />
    </>
  );
};

export default Blog;