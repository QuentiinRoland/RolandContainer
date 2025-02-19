"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OtherSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="relative md:order-last h-[400px] md:h-full">
            <div className="absolute inset-0 clip-diagonal">
              <div className="relative w-full h-full">
                <Image
                  src="/miscellanousWaste.jpg"
                  alt="Image décorative"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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

          <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
            <h2 className="text-3xl font-bold mb-6 text-black">Tout venant</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  À faire ✓
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-black">
                    <span className="text-green-500 mr-2">•</span>à remplir par
                    tonton ou charlie
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-green-500 mr-2">•</span>à remplir par
                    tonton ou charlie
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-green-500 mr-2">•</span>à remplir par
                    tonton ou charlie
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  À éviter ✗
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-black">
                    <span className="text-red-500 mr-2">•</span>à remplir par
                    tonton ou charlie
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-red-500 mr-2">•</span>à remplir par
                    tonton ou charlie
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-red-500 mr-2">•</span>à remplir par
                    tonton ou charlie
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

        @media (max-width: 768px) {
          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </section>
  );
};

export default OtherSection;
