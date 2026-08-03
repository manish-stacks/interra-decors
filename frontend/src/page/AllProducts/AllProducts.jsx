import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AllProductsSection from "../../components/AllProductsSection/AllProductsSection";
import { useSearchParams } from "react-router-dom";
import TrustSection from "../../components/WhyTrust/Trustsection";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <>
      <Breadcrumb />
      <AllProductsSection category={category} />
      <TrustSection />
    </>
  );
};

export default AllProducts;