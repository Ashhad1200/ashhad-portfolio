"use client";
import React from "react";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { TypewriterEffectSmoothDemo } from "./intro";
import { NavbarDemo } from "./navBar";
import { About } from "./about";

export function MainPage() {
    return (
        <TracingBeam className="">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                
                <NavbarDemo />
                <TypewriterEffectSmoothDemo />
                <About/>

            </div>
        </TracingBeam>
    );
}


