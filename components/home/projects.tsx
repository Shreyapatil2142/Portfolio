import React, { useEffect, useRef, useState } from "react";
import ProjectTile from "../common/project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects, certificates, MENULINKS } from "../../constants";
import CertiCard from "../common/CertiCard";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  gsap.registerPlugin(ScrollTrigger)
  const sectionRef = useRef(null);
  const targetSection = useRef<HTMLDivElement | null>(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "90% bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(targetSection);

    return revealAnimationRef.kill;
  }, [targetSection]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className="relative h-full overflow-hidden py-12 px-10 lg:px-[5%]"
    >

      <section ref={targetSection} className="flex flex-col items-center justify-center mt-0 text-center">
        <p className="section-title-sm seq skills-wrapper opacity-100">PROJECTS</p>
        <h1 className="section-heading seq mt-2 opacity-100">My Projects</h1>
        <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2 opacity-100">
          I have contributed in over 20+ projects ranging from Frontend
          development, UI/UX design, Open Source, and Machine learning
        </h2>

        <div className="flex flex-wrap justify-center mt-7 gap-3 mb-6">
          {["Projects", "Certificates"].map((tab) => (
           <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-base transition ${activeTab === tab
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
            >
              { tab }
            </button>
          ))}
    </div>
      </section >

      <div className="w-full max-w-[1000px] m-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {activeTab === "Projects" &&
          projects.map((project) => (
            <ProjectTile key={project.id} item={project} />
          ))}
      </div>
      <div className="w-full max-w-[1000px] mt-4 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {activeTab === "Certificates" && 
          certificates.map((item) => (
          <CertiCard key={item.id} item={item} />
        ))}
      </div>

    </section >
  );

};

export default ProjectsSection;
