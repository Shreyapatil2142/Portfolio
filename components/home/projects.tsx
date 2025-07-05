import React, { MutableRefObject, useEffect, useRef, useState } from "react";
// import { MENULINKS, PROJECTS } from "../../constants";
import ProjectTile from "../common/project-tile";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { IDesktop, NO_MOTION_PREFERENCE_QUERY } from "pages";
import { RoughNotation } from "react-rough-notation";
import { StaticImageData } from "next/image";
// import { useOnScreen } from "@/hooks/useOnScreen";
// import { useScrollActive } from "@/hooks/useScrollActive";
import { useSectionStore } from "@/store/section";
import { projects } from "../../constants";


const ProjectsSection = ({ isDesktop }: IDesktop) => {
  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)

  const elementRef = useRef<HTMLDivElement>(null)
  // const isOnScreen = useOnScreen(elementRef)

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef)

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: true,
        onEnter: () => {
          gsap.fromTo(
            q(".qoutes-animation"),
            {
              y: "-200%",
            },
            {
              y: 0,
            }
          )
        },
      },
    })
  }, [])

  // Set Active Session
  // const projectSectionOnView = useScrollActive(sectionRef)
  const { setSection } = useSectionStore()

  // useEffect(() => {
  //   projectSectionOnView && setSection("#project")
  // }, [projectSectionOnView, setSection])

  return (
    <section
      ref={sectionRef}
      id="project"
      className="relative h-full overflow-hidden py-14 px-10 lg:px-[5%]"
    >

      <p className="section-title-sm seq">PROJECTS</p>
      <h1 className="section-heading seq mt-2">My Projects</h1>
      <h2 className="text-2xl md:max-w-3xl w-full seq max-w-sm mt-2">
        I have contributed in over 20+ projects ranging from Frontend
        development, UI/UX design, Open Source, and Motion Graphics
      </h2>

      <div className="w-full max-w-[1000px] m-auto mt-4 flex flex-col items-center gap-5">
        <div className="w-full pt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectTile key={project.id} item={project} />
          ))}
        </div>
      </div>
    </section>
  );

};

export default ProjectsSection;
