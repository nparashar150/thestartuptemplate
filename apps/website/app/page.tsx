"use client";

import About from "./components/About";
import Cta from "./components/Cta";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import ScrollToTop from "./components/ScrollToTop";
import Partners from "./components/Partners";
// import Features from "./components/Features"; // Uncomment this line to enable the Pricing section
// import Services from "./components/Services"; // Uncomment this line to enable the Pricing section
// import Testimonials from "./components/Testimonials"; // Uncomment this line to enable the Pricing section
// import Pricing from "./components/Pricing"; // Uncomment this line to enable the Pricing section
// import Team from "./components/Team"; // Uncomment this line to enable the Team section

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <HowItWorks />
      {/* <Features /> */}
      {/* <Services /> */}
      <Cta />
      {/* <Testimonials /> */}
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Page;
