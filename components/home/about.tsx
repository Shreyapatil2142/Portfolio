import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { MENULINKS } from "../../constants";

const AboutSection = () => {
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);
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
      start: "100px bottom",
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

    <div id={MENULINKS[1].ref} ref={targetSection} className=" min-h-screen flex justify-center px-6 py-10">
      <main className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <section className="relative flex flex-col skills-wrapper justify-start items-start">

          <Image
            src="/about/aboutus.png"
            alt="Shreya Patil"
            className="rounded-lg w-full max-w-md object-cover"
            width={300}
            height={300}
          />
        </section>

        {/* Right Section */}
        <section className="flex flex-col justify-start">
          <p className="section-title-sm seq skills-wrapper">ABOUT</p>
          <h1 className="section-heading seq mt-2 mb-6 skills-wrapper">About Me</h1>

          <p className="text-lg md:max-w-3xl mb-10 seq max-w-xl mt-2">
            I’m a passionate and curious engineering student with a strong interest in web development,
            programming, and emerging technologies. I enjoy solving real-world problems, building
            user-friendly applications, and continuously improving my skills through hands-on projects,
            coding challenges, and creative exploration. Always eager to learn, collaborate, and make
            meaningful contributions through technology, my education has also played a critical role
            in providing a strong foundation for my career.
          </p>
          <p className="text-lg max-w-xl mb-6">
            Here is my educational background.
          </p>

          {/* Education Section */}
          <div className="max-w-xl space-y-6">
            <div>
              <h3 className="text-[#39c4ef] skills-wrapper text-lg font-sans leading-normal mb-1">
                B.E. in Information Technology
              </h3>
              <p className="italic text-white/80 mb-3 leading-relaxed text-base">
                Pimpri Chinchwad College Of Engineering & Research | 2024 - 2025
              </p>
              <ul className="list-none space-y-2 text-white skills-wrapper font-sans text-base">
                {[
                  'Studying machine learning, software development, DevOps',
                  'Got merit in 9.4 CGPA out of 10'
                ].map((text, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#39c4ef] mr-3"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[#39c4ef] text-lg skills-wrapper font-sans leading-normal mb-1">
                Government Polytechnic Pune
              </h3>
              <p className="italic text-white/80 mb-3 leading-relaxed text-base">
                Information Technology | 2021 - 2024
              </p>
            </div>
         
          </div>
        </section>
      </main>
    </div>

    // </section>
  );
};

export default AboutSection;
