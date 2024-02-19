import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

export function About() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          About
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
        <div className="flex flex-wrap justify-center mt-4">
          <div className="max-w-sm mx-4 mb-8">
            <ul>
              <li className="flex items-center">
                <i className="far fa-calendar-alt mr-2"></i>
                <span>19.03.1988</span>
              </li>
              <li className="flex items-center">
                <i className="fa-brands fa-whatsapp mr-2"></i>
                <span>987-654-321</span>
              </li>
            </ul>
          </div>
          <div className="max-w-sm mx-4 mb-8">
            <ul>
              <li className="flex items-center">
                <i className="fa-solid fa-at mr-2"></i>
                <span>example@email.com</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-location-dot mr-2"></i>
                <span>New York, United States</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
