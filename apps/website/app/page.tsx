"use client";

import { useCallback, useEffect, useState } from "react";
import config from "../config";
import About from "./components/About";
import Cta from "./components/Cta";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Partners from "./components/Partners";
import ScrollToTop from "./components/ScrollToTop";
import { useSearchParams } from "next/navigation";
import axios from "axios";

// import Features from "./components/Features"; // Uncomment this line to enable the Pricing section
// import Services from "./components/Services"; // Uncomment this line to enable the Pricing section
// import Testimonials from "./components/Testimonials"; // Uncomment this line to enable the Pricing section
// import Pricing from "./components/Pricing"; // Uncomment this line to enable the Pricing section
// import Team from "./components/Team"; // Uncomment this line to enable the Team section

const Page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [configState, setConfigState] = useState<typeof config>(config);

  const getConfig = useCallback(async () => {
    const response = await axios.get(`/api/config?email=${email}`);
    setConfigState(response.data.content);
  }, [email]);

  useEffect(() => {
    email && getConfig();
  }, [email]);

  return (
    <>
      <Navbar {...configState?.NAVBAR} />
      <Hero {...configState?.HERO} />
      <Partners {...configState?.PARTNERS} />
      <About {...configState?.ABOUT} />
      <HowItWorks {...configState?.FEATURE_CARDS} />
      {/* <Features /> */}
      {/* <Services /> */}
      <Cta {...configState?.BANNER} />
      {/* <Testimonials /> */}
      <Newsletter {...configState?.NEWSLETTER_CONFIG} />
      <FAQ {...configState?.FREQUENTLY_ASKED_QUESTIONS} />
      <Footer {...configState?.FOOTER} />
      <ScrollToTop />
    </>
  );
};

export default Page;
