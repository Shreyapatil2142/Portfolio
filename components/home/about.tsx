import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

const AboutSection = () => {
  return (

    <div className=" min-h-screen flex justify-center px-6 py-10" style={{ fontFamily: '"Poppins", sans-serif' }}>
      <main className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <section className="relative flex flex-col justify-start items-start">

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
          <h1 className="section-heading seq mt-2 mb-6">About Me</h1>

          <p className="text-lg md:max-w-3xl mb-16 seq max-w-xl mt-2">
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
              <h2 className="text-[#1DBA8B] font-semibold text-xl mb-1">
                B.E. in Information Technology
              </h2>
              <p className="italic text-white/80 mb-3 text-base">
                Pimpri Chinchwad College Of Engineering & Research | 2024 - 2025
              </p>
              <ul className="list-none space-y-2 text-white text-base">
                {[
                  'Studied computer science, software development, DevOps',
                  'Got merit in 9.4 CGPA out of 10'
                ].map((text, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#1DBA8B] mr-3"></span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[#1DBA8B] font-semibold text-xl mb-1">
                Government Polytechnic Pune
              </h2>
              <p className="italic text-white/80 text-base">
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
