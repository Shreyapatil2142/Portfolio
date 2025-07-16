import Image from "next/image";
import React, { MutableRefObject, useEffect, useState, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Certificate } from "../../constants";


interface Props {
  item: Certificate
}

const CertiCard = ({ item }: Props) => {
  const certiCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const [willChange, setwillChange] = useState(false);

  const initRevealAnimation = (
    certiCard: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      certiCard.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    return ScrollTrigger.create({
      trigger: certiCard.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const revealAnimationRef = initRevealAnimation(certiCard);
    return revealAnimationRef.kill;
  }, [certiCard]);

  return (

    <div ref={certiCard} className="p-6 transition-transform duration-300 hover:-translate-y-1">

      <div className="max-w-7xl overflow-hidden mx-auto flex flex-col md:flex-row gap-10">

        <div className="skills-wrapper seq flex-1 overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 max-w-xl">

          <Image
            src={item.image}
            alt={item.title}
            className="w-full rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
            width={500}
            height={300}
          />

          < div className="flex mt-4 justify-center space-x-3">
            <h3 className="text-[#39c4ef] text-lg leading-tight">
              {item.title}
            </h3>
          </div>

        </div>

      </div>

    </div >
  );
};

export default CertiCard;
