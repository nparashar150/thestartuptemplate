"use client";

import { Icons } from "@repo/ui/components/icons";
import { Badge } from "@repo/ui/components/ui/badge";
import { cn } from "@repo/ui/lib/utils";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import config, { Config } from "../config";
import About from "./components/About";
import Cta from "./components/Cta";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import NoSSR from "./components/NoSSR";
import Partners from "./components/Partners";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";
import LoomEmbed from "./components/LoomEmbed";

// import Features from "./components/Features"; // Uncomment this line to enable the Pricing section
// import Services from "./components/Services"; // Uncomment this line to enable the Pricing section
// import Testimonials from "./components/Testimonials"; // Uncomment this line to enable the Pricing section
// import Pricing from "./components/Pricing"; // Uncomment this line to enable the Pricing section
// import Team from "./components/Team"; // Uncomment this line to enable the Team section

const Page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [isLoading, setIsLoading] = useState(false);
  const [configState, setConfigState] = useState<Config>(config as unknown as Config);

  const getConfig = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/config?email=${email}`);
      setConfigState(response.data.content);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  useEffect(() => {
    email && getConfig();
    !email && setIsLoading(false);
  }, [email]);

  return (
    <NoSSR>
      {!isLoading ? (
        <div className={cn(email && "select-none pointer-events-none")}>
          {configState?.NAVBAR && <Navbar {...configState?.NAVBAR} />}
          {configState?.HERO && <Hero {...configState?.HERO} />}
          {configState?.PARTNERS && <Partners {...configState?.PARTNERS} />}
          <LoomEmbed />
          {configState?.ABOUT && <About {...configState?.ABOUT} />}
          {configState?.FEATURE_CARDS && <HowItWorks {...configState?.FEATURE_CARDS} />}
          {/* <Features /> */}
          {/* <Services /> */}
          {configState?.BANNER && <Cta {...configState?.BANNER} />}
          {/* <Testimonials /> */}
          {configState?.NEWSLETTER_CONFIG && <Newsletter {...configState?.NEWSLETTER_CONFIG} />}
          {configState?.FREQUENTLY_ASKED_QUESTIONS && <FAQ {...configState?.FREQUENTLY_ASKED_QUESTIONS} />}
          {configState?.FOOTER && <Footer {...configState?.FOOTER} />}
          <ScrollToTop />
          {email && <Badge className="fixed top-4 right-4 z-50">{email ? "Preview Mode" : "Edit Mode"}</Badge>}
        </div>
      ) : (
        <div className="flex gap-1 justify-center items-center h-screen">
          <Icons.spinner className="w-5 h-5 animate-spin" /> Loading config...
        </div>
      )}

      <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-6ZHLYHQDD1" />
      <Script
        id="gatg-load"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-6ZHLYHQDD1');
        `,
        }}
      />
    </NoSSR>
  );
};

export default Page;
