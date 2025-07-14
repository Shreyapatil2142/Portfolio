import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
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

            <h3 className="text-[#39c4ef] text-lg leading-tight">
              {item.title}
            </h3>

            <div className=" flex items-end group gap-3">

              <a
                href={item.githubURL}
                title={`See '${item.title}' on Github`}
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen mr-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  className="scale-150 sm:scale-125 opacity-75 hover:-rotate-12 fill-white dark:fill-bglight"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </svg>
              </a>
              <a
                href={item.liveURL}
                title={`See live demo of '${item.title}'`}
                target="_blank"
                rel="noreferrer"
                className="focus-visible:outline-marrsgreen dark:focus-visible:outline-carrigreen mr-8 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 scale-125 sm:scale-100 bg-cardlight dark:bg-carddark hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full p-1 hover:-rotate-12"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

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
