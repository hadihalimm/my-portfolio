import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";

const words = [
  "Hello,",
  "Halo,",
  "Bonjour,",
  "Konnichiwa,",
  "Assalaamu'alaikum,",
];

const Hero = () => {
  return (
    <div className="flex flex-col pb-20 pt-36">
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-white bg-dot-black/[0.1] dark:bg-black dark:bg-dot-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <FlipWords
          words={words}
          className="pb-1 pt-10 text-lg font-semibold md:pb-4 md:text-3xl"
        />
        <TextGenerateEffect
          words="I'm Hadi"
          className="pb-1 text-4xl font-bold md:text-6xl"
        />
        <TextGenerateEffect
          words="Welcome to my space."
          className="pb-20 font-medium tracking-wider md:text-3xl md:tracking-widest"
        />
      </div>
    </div>
  );
};

export default Hero;
