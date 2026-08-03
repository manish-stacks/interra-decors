import React from "react";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import IntroductionSection from "../../components/IntroductionSection/IntroductionSection";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import CallToAction from "../../components/CallToAction/CallToAction";
import BlogSection from "../../components/BlogSection/BlogSection";
import OurClients from "../../components/OurClients/OurClients";
import WhyChooseUs from "../../components/WhyTrust/Whychooseus";
import TrustSection from "../../components/WhyTrust/Trustsection";
const Home = () => {
  return (
    <div>
      <Hero />
      <IntroductionSection />
      {/* <Category /> */}
      <WhyChooseUs />
      <ServicesSection />
      <OurClients />
      <CallToAction />
      <TrustSection />

      {/* <BlogSection /> */}
    </div>
  );
};

export default Home;
