"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "This",
    },
    {
      text: "Is",
    },
    {
      text: "Me",
    },

    {
      text: "Syed Ashhad.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (

    <div className="h-[58rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
      </div>

    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl sm:text-base  ">
      Crafting Digital Experiences, One Line of Code at a Time: Elevating Ideas to Innovation
      </p>
      <TypewriterEffectSmooth words={words} />
      
    </div>
  </div>
  );
}
