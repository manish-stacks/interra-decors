import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDetailsSection from "../../components/ProductDetailsSection/ProductDetailsSection";
import TrustSection from "../../components/WhyTrust/Trustsection";

const ProductDetails = () => {
  return (
    <>
      <Breadcrumb />
      <ProductDetailsSection />
      <TrustSection />
    </>
  );
};

export default ProductDetails;