import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlight - Acternity */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background - Aceternity */}
      <div className="absolute flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:100px_100px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-black-100" />
      </div>

      {/* Text Content */}
      <div className="relative flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic web magic with next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-6xl lg:text-7xl"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Siddharth, a passionate web developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
