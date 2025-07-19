import React, { useEffect, useCallback, memo, useMemo } from "react";
import {Code, Sparkles} from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MENULINKS } from "../../constants";
import Image from "next/image";

const ProfileImage = memo(() => ( 
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:b- cfck">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <Image
            src="/about/aboutus.png"
            alt="Profile"
            fill
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));


const AboutSection = memo(() => {

  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();  
  }, []);

  return (
    <div 
      className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
     id={MENULINKS[1].ref}
    >

      <div className="w-full mx-auto pt-2 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">

            {/* Heading */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-left">
                <span className="text-transparent bg-clip-text section-heading">
                  About Me
                </span>
              </h2>

              <p
                className="mt-2 text-gray-400 max-w-2xl text-left text-base sm:text-lg flex items-center gap-2"
                data-aos="zoom-in-up"
                data-aos-duration="800"
              >
                <Sparkles className="w-5 h-5 text-purple-400" />
                Transforming ideas into digital experiences
                <Sparkles className="w-5 h-5 text-purple-400" />
              </p>
            </div>

            {/* About para */}
            <p
              className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              I&apos;m a passionate and curious engineering student with a strong interest in web development , programming, and emerging technologies. I enjoy solving real-world problems, building user-friendly applications, and continuously improving my skills through hands-on projects, coding challenges, and creative exploration. Always eager to learn, collaborate, and make meaningful contributions through technology.</p>

            {/* Quote Section */}
            <div
              className="relative bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#a855f7]/5 border border-gradient-to-r border-[#6366f1]/30 rounded-2xl p-4 my-6 backdrop-blur-md shadow-2xl overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="1700"
            >
              {/* Floating orbs background */}
              <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-2 w-12 h-12 bg-gradient-to-r from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-lg"></div>

              {/* Quote icon */}
              <div className="absolute top-3 left-4 text-[#6366f1] opacity-30">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <blockquote className="text-gray-300 text-center lg:text-left italic font-medium text-sm relative z-10 pl-6">
                &quot;Leveraging AI as a professional tool, not a replacement.&quot;
              </blockquote>
            </div>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
              <a href="#projects" className="w-full lg:w-auto">
                <button
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#6366f1]/50 text-[#39c4ef] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 "
                >
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>

          <ProfileImage />
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes spin-slower {
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 8s linear infinite;
        }
      `}</style>
    </div>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;