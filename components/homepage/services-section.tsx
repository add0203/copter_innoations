"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectsData = [
  {
    id: 1,
    name: "Quad-550",
    description:
      "Weighing less than 500 g, it supports up to 16-inch propellers, ideal for lightweight operations.",
    image: "/Quad_550.jpg",
    url: "",
  },
  {
    id: 2,
    name: "FW-220",
    description:
      "With a 2.2 m wingspan and 2 hours of endurance, this model excels in large-scale mapping and surveillance tasks.",
    image: "/FW220.jpg",
    url: "",
  },
  {
    id: 3,
    name: "18 inches Quad",
    description:
      "Designed for 18-inch propellers, it offers up to 60 minutes of flight time and weighs less than 600 g.",
    image: "/18_inch_quad.jpg",

    url: "",
  },
  {
    id: 4,
    name: "FW160",
    description:
      "Featuring a 1600 mm wingspan, 90 minutes of endurance, and a 500 g payload capacity, it's built for extended missions.",
    image: "/FW160.jpg",
    url: "",
  },
];

const SpringAnimatedFeatures = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-[75%] p-4">
      <div className="mb-12 text-center">
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Product We Deliver
        </h2>
        <p className="mx-auto mt-2 max-w-[500px] text-gray-600 dark:text-gray-400">
          Explore our range of cutting-edge drone models, designed to meet
          diverse needs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ProjectsData.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", bounce: 0.7 }}
            className="mt-2 p-3 border rounded-md dark:bg-black"
          >
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.image}
                width={400}
                height={300}
                alt={project.name}
                className="mb-3 rounded"
                priority
              />
              <div className="mb-1 text-sm font-bold">{project.name}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpringAnimatedFeatures;
