import { METADATA } from "../constants";
import Head from "next/head";
import React, { useEffect, useState , useCallback} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SocialLinks from "@/components/common/SocialLinks";
import Loader from "@/components/common/Loader";
import Layout from "@/components/common/layout";
import Header from "@/components/common/header";
import ProgressIndicator from "@/components/common/progress-indicator";
import Cursor from "@/components/common/cursor";
import HeroSection from "@/components/home/hero";
import ProjectsSection from "@/components/home/projects";
import SkillsSection from "@/components/home/skills";
import Contact from "@/components/home/Contact";
import Footer from "@/components/common/footer";
import TimelineSection from "@/components/home/timeline";
import AboutSection from "@/components/home/AboutSection";

const DEBOUNCE_TIME = 100;

export const isSmallScreen = (): boolean => document.body.clientWidth < 767;
export const NO_MOTION_PREFERENCE_QUERY =
  "(prefers-reduced-motion: no-preference)";

export interface IDesktop {
  isDesktop: boolean;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isDesktop, setisDesktop] = useState(true);

  let timer: NodeJS.Timeout = null;

  const debouncedDimensionCalculator = useCallback(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const isDesktopResult =
        typeof window.orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;

      window.history.scrollRestoration = "manual";

      setisDesktop(isDesktopResult);
    }, DEBOUNCE_TIME);
  },[]);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    debouncedDimensionCalculator();

    window.addEventListener("resize", debouncedDimensionCalculator);
    return () =>
      window.removeEventListener("resize", debouncedDimensionCalculator);
  }, [timer,debouncedDimensionCalculator]);

  const renderBackdrop = (): React.ReactNode => (
    <div className="fixed top-0 left-0 h-screen w-screen bg-gray-900 -z-1"></div>
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Head>
            <image>{METADATA.img}</image>
            <title>{METADATA.title}</title>
          </Head>
          <Layout>
            <Header />
            <ProgressIndicator />
            <Cursor isDesktop={isDesktop} />
            <main className="flex-col flex">
              {renderBackdrop()}
              <HeroSection />
              <AboutSection />
              <ProjectsSection />
              <SkillsSection />
              <TimelineSection isDesktop={isDesktop} />
              <SocialLinks />
              <Contact />
              <Footer />
            </main>
          </Layout>
        </>
      )}
    </>
  );
}
