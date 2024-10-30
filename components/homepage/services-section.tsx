"use client";
import { TITLE_TAILWIND_CLASS } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsData = [
  {
    id: 1,
    name: "Quad-550",
    description:
      "Weighing less than 500 g, it supports up to 16-inch propellers, ideal for lightweight operations.",
    image: "/18_inch_quad.jpg",

    url: "",
  },
  {
    id: 2,
    name: "FW-220",
    description:
      "With a 2.2 m wingspan and 2 hours of endurance, this model excels in large-scale mapping and surveillance tasks.",
    image: "/FW160_2.jpg",

    url: "",
  },
  {
    id: 3,
    name: "18 inches Quad",
    description:
      "Designed for 18-inch propellers, it offers up to 60 minutes of flight time and weighs less than 600 g.",
    image: "/Quad_550.jpg",

    url: "",
  },
  {
    id: 4,
    name: "FW160",
    description:
      "Featuring a 1600 mm wingspan, 90 minutes of endurance, and a 500 g payload capacity, it's built for extended missions.",
    image: "/FW160_2.jpg",

    url: "",
  },
];

const SpringAnimatedFeatures = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[75%]">
      <div className="flex flex-col mb-[3rem]">
        <h2
          className={`${TITLE_TAILWIND_CLASS} mt-2 font-semibold tracking-tight dark:text-white text-gray-900 text-center`}
        >
          Product We Deliver
        </h2>
        <p className="mx-auto max-w-[500px] text-gray-600 dark:text-gray-400 text-center mt-2">
          Explore our range of cutting-edge drone models, designed to meet
          diverse needs.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-3">
        {" "}
        {/* Added p-6 for padding */}
        {ProjectsData.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-2 text-left border p-3 rounded-md dark:bg-black"
            >
              <Link
                href={project?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  width={400}
                  height={300}
                  alt={project.name}
                  className="mb-3 rounded"
                  style={{ width: "400px", height: "300px" }} // Optional to ensure explicit size
                  priority // Optional: For faster loading if needed
                />
                <div className="mb-1 text-sm font-bold ">{project.name}</div>
                <div className="max-w-[250px] text-sm font-normal text-gray-600 dark:text-gray-400">
                  {project.description}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SpringAnimatedFeatures;
