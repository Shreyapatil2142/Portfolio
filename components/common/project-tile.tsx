import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Project } from "../../constants";


interface Props {
  item: Project
}

const ProjectTile = ({ item }: Props) => {
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectCard.current,
        start: `70% bottom`,
      },
    })

    tl.fromTo(
      projectCard.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power1.inOut",
      }
    )
  }, [projectCard])

  return (

    <div ref={projectCard}
      className=" p-6 min-h-[300px]">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">


        <div className="flex-1 overflow-hidden max-w-xl">
          {typeof item.image === "string" ? (
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
              width={400}
              height={200}
            />
          ) : (
            <Image
              src={item.image}
              alt={item.title}
              className="w-full rounded-md"
              width={400}
              height={200}
            />
          )}


          <div className="flex mt-4 justify-between space-x-3">

            <h3 className="text-[#39c4ef]  text-lg leading-tight">
              {item.title}
            </h3>

            <div className=" flex items-end group gap-3">

              {item.githubURL && (
                <a
                  href={item.githubURL}
                  title={`See '${item.title}' on Github`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    stroke="#ffffff"
                    fill="white"
                    className="opacity-75 scale-[1.0] group-hover:-rotate-12"

                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              )}

              {item.liveURL && (
                <a
                  href={item.liveURL}
                  title={`See '${item.title}' on Github`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="scale-[0.7] group-hover:translate-x-1 transition-transform duration-300"
                    width="27"
                    height="27"
                    viewBox="0 0 26 26"
                    strokeWidth="1.5"
                    stroke="#ffffff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12h14" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>

                </a>
              )}

            </div>

          </div>

          <p className="text-white mt-2 text-base leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-3">
            {item.techStacks.map((tag, i) => (
              <span
                key={i}
                className="bg-[#2c3643] text-white text-sm rounded-md hover:bg-[#39c4ef] font-normal 
                px-3 py-[4px] flex justify-center items-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>

  );
};

export default ProjectTile;
