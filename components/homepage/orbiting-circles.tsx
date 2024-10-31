import OrbitingCircles from "@/components/magicui/orbiting-circles";
import Image from "next/image";

// Define the props interface for the Icon component
interface IconProps {
  src: string; // URL of the image
  alt: string; // Alt text for the image
  width: number; // Width of the image
  height: number; // Height of the image
}

// Icon Component
const Icon = ({ src, alt, width, height }: IconProps) => (
  <Image
    src={src}
    alt={alt}
    width={width} // Explicit width
    height={height} // Explicit height
    style={{
      width: `${width}px`,
      height: `${height}px`,
      objectFit: "contain", // Preserve aspect ratio
    }}
    priority // Optional: Prioritize loading if needed
  />
);

// Define the Icons object with functional components
const Icons = {
  drone: () => (
    <Icon
      src="/cop_1.png"
      alt="Drone Icon"
      width={100} // Set the appropriate width
      height={100} // Set the appropriate height
    />
  ),
  droneCamera: () => (
    <Icon
      src="/cop_2.png"
      alt="Drone Camera Icon"
      width={100} // Set the appropriate width
      height={100} // Set the appropriate height
    />
  ),
  droneDelivery: () => (
    <Icon
      src="/cop_3.png"
      alt="Drone Delivery Icon"
      width={100} // Set the appropriate width
      height={100} // Set the appropriate height
    />
  ),
  droneFlight: () => (
    <Icon
      src="/cop_4.png"
      alt="Drone Flight Icon"
      width={100} // Set the appropriate width
      height={100} // Set the appropriate height
    />
  ),
};

export function OrbitingCirclesComponent() {
  return (
    <div className="relative flex h-[500px] w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/80 bg-clip-text text-center text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Copter Innovations
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.drone />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.droneCamera />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Icons.droneDelivery />
      </OrbitingCircles>
      <OrbitingCircles
        className="border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Icons.droneFlight />
      </OrbitingCircles>
    </div>
  );
}
