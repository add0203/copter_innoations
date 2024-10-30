import { ArrowRight, Cannabis } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BorderBeam } from "../magicui/border-beam";
import { Button } from "../ui/button";
import { TITLE_TAILWIND_CLASS } from "@/utils/constants";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center leading-6 mt-[3rem]"
      aria-label="Copter innovation"
    >
      <Image
        src="/copter_innovation.png"
        alt="Logo"
        width={100}
        height={100}
        className="rounded-sm"
        priority // Optional: Ensures the image loads quickly if it’s above the fold
        style={{ width: "70px", height: "70px" }} // Ensures correct dimensions
      />

      <h1
        className={`${TITLE_TAILWIND_CLASS} mt-4 scroll-m-20 font-semibold tracking-tight text-center max-w-[1120px] bg-gradient-to-b dark:text-white`}
      >
        Copter Innovations
      </h1>
      <p className="mx-auto max-w-[700px] text-gray-500 text-center mt-2 dark:text-gray-400">
        At Copter Innovations, we manufacture precision-engineered drone frames
        for Multi-copters, Fixed Wing, and Hybrid VTOLs. Founded on a passion
        for aerial technology, we aim to redefine the drone manufacturing
        landscape with innovative solutions tailored to our clients&apos; needs.
      </p>
      <div className="flex justify-center items-center gap-3">
        <Link
          href="/contact"
          className="mt-5"
          aria-label="Join Discord (opens in a new tab)"
        >
          <Button
            variant="outline"
            className="flex gap-1 animate-buttonheartbeat rounded-md
             hover:bg-gray-500 text-sm font-semibold
             text-black dark:text-white
             bg-white dark:bg-gray-800
             hover:bg-gray-300 hover:dark:bg-gray-600 hover:text-gray-900"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
        </Link>
      </div>
      <div>
        <div className="relative flex max-w-6xl justify-center overflow-hidden mt-7">
          <div className="relative rounded-xl">
            <video
              width={1100}
              height={550}
              autoPlay
              muted
              loop
              className="block rounded-[inherit] border object-contain shadow-lg"
            >
              <source src="/videos/hero-section1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </section>
  );
}
