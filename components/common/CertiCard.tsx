import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Certificate } from "../../constants";


interface Props {
  item: Certificate
}

const CertiCard = ({ item }: Props) => {
  const certiCard: MutableRefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: certiCard.current,
        start: `70% bottom`,
      },
    })

    tl.fromTo(
      certiCard.current,
      {
        scale: 0,
      },
      {
        scale: 1,
        ease: "power1.inOut",
      }
    )
  }, [certiCard])


  return (

    <div ref={certiCard}
      className="p-6">

      <div className="max-w-7xl overflow-hidden mx-auto flex flex-col md:flex-row gap-10">

        <div className="flex-1 overflow-hidden max-w-xl">

          {item.image.endsWith(".pdf") ? (
            <iframe
              src={item.image}
              title={item.title}
              className="max-w-full h-[200px] rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          ) : (
            <Image
              src={item.image}
              alt={item.title}
              className="w-full rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110"
              width={500}
              height={300}
            />
          )}

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
