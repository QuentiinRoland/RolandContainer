"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DiagonalSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] rounded-lg lg:rounded-xl overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="relative order-2 lg:order-1 min-h-[300px]">
            <div className="absolute inset-0 clip-diagonal-mobile lg:clip-diagonal">
              <div className="relative w-full h-full">
                <Image
                  src="/ground.jpg"
                  alt="Image décorative"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={75}
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                  className="transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2 bg-gray-50 lg:bg-transparent">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-black">
              Terres / Terres + Inertes
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-2 sm:mb-3">
                  À faire ✓
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start text-black text-sm sm:text-base">
                    <span className="text-green-500 mr-2 text-lg">•</span>à
                    remplir par tonton ou charlie
                  </li>
                  <li className="flex items-start text-black text-sm sm:text-base">
                    <span className="text-green-500 mr-2 text-lg">•</span>à
                    remplir par tonton ou charlie
                  </li>
                  <li className="flex items-start text-black text-sm sm:text-base">
                    <span className="text-green-500 mr-2 text-lg">•</span>à
                    remplir par tonton ou charlie
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2 sm:mb-3">
                  À éviter ✗
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start text-black text-sm sm:text-base">
                    <span className="text-red-500 mr-2 text-lg">•</span>à
                    remplir par tonton ou charlie
                  </li>
                  <li className="flex items-start text-black text-sm sm:text-base">
                    <span className="text-red-500 mr-2 text-lg">•</span>à
                    remplir par tonton ou charlie
                  </li>
                  <li className="flex items-start text-black text-sm sm:text-base">
                    <span className="text-red-500 mr-2 text-lg">•</span>à
                    remplir par tonton ou charlie
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }
        .clip-diagonal-mobile {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        @media (min-width: 1024px) {
          .clip-diagonal-mobile {
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default DiagonalSection;
