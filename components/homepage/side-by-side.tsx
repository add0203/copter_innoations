import { OrbitingCirclesComponent } from "./orbiting-circles";

import { User, ShieldCheck, Rocket } from "lucide-react";

const features = [
  {
    name: "Customer-Centric Solutions",
    description:
      "Tailored drone frames for filmmaking, enterprises, and racing enthusiasts to meet diverse application needs.",
    icon: User, // Customer-related icon
  },
  {
    name: "Uncompromising Quality & Craftsmanship",
    description:
      "Precision-built frames tested for durability and reliability to excel under real-world conditions.",
    icon: ShieldCheck, // Quality-related icon
  },
  {
    name: "Performance-Driven Innovation",
    description:
      "Lightweight, agile designs for racing and robust frames for professionals, ensuring easy assembly and maintenance.",
    icon: Rocket, // Innovation-related icon
  },
];

export default function SideBySide() {
  return (
    <div className="overflow-hidden ">
      <div className=" max-w-7xl px-6 lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <div className="w-full gap-2 border-b pb-3">
                <h1
                  className="mt-2 font-semibold tracking-tight text-gray-900 dark:text-white
                  text-2xl sm:text-2xl md:text-3xl lg:text-4xl "
                >
                  Crafting Excellence
                </h1>
                <div className="flex gap-3 w-full">
                  <p className="text-gray-600 dark:text-gray-400 ">
                    with Copter Innovations
                  </p>
                </div>
              </div>

              <dl className="mt-10 max-w-xl space-y-8 leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline dark:text-gray-400">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <OrbitingCirclesComponent />
        </div>
      </div>
    </div>
  );
}
