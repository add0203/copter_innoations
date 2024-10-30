"use client"; // Ensure this is at the top for Next.js client-side components

import { TITLE_TAILWIND_CLASS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Features() {
  const articles = [
    { id: 1, image: "/gallery_1.jpg" },
    { id: 2, image: "/gallery_2.jpg" },
    { id: 3, image: "/gallery_3.jpg" },
    { id: 4, image: "/gallery_4.jpg" },
    { id: 5, image: "/gallery_5.jpg" },
    { id: 7, image: "/gallery_7.jpg" },
    { id: 8, image: "/gallery_8.jpg" },
    { id: 9, image: "/gallery_9.jpg" },
    { id: 11, image: "/gallery_11.jpg" },
    { id: 12, image: "/gallery_12.jpg" },
    { id: 6, image: "/gallery_6.jpg" },
    { id: 13, image: "/gallery_13.jpg" },
    { id: 14, image: "/gallery_14.jpg" },
    { id: 10, image: "/gallery_10.jpg" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center p-3 w-full text-center">
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex gap-3 justify-center items-center w-full">
            <h1
              className={`${TITLE_TAILWIND_CLASS} text-center mt-2 font-semibold tracking-tight dark:text-white text-gray-900`}
            >
              Gallery
            </h1>
          </div>
          <div className="flex gap-3 justify-center items-center w-full border-b pb-7">
            <p className="text-gray-600 dark:text-gray-400">
              Empowering Your Operations with State-of-the-Art Drone Designs.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {articles.map((article, index) => (
          <Link href={"/"} key={article.id}>
            <motion.article
              className={`p-3 dark:bg-black ${
                index % 2 === 0 ? "row-span-2" : "row-span-1"
              }`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={article.image}
                alt={`Gallery image ${article.id}`}
                className="rounded-md border bg-muted transition-colors"
                width={500}
                height={300}
                style={{ width: "100%", height: "auto" }} // Ensure responsive behavior
                priority // Optional: For fast loading
              />
            </motion.article>
          </Link>
        ))}
      </div>
    </div>
  );
}
