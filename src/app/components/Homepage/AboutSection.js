import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const AboutSection = () => {
  const router = useRouter();

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleSolutionsClick = () => {
    router.push("/services");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
        <div className="order-1 lg:order-1">
          <motion.h2
            className="text-3xl sm:text-4xl text-black font-semibold"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A propos de Roland Container
          </motion.h2>

          <motion.p
            className="text-black mt-6 sm:mt-8 text-base sm:text-lg"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Depuis plus de 40 ans, notre entreprise familiale met son
            savoir-faire et son expérience au service de la location de
            conteneurs pour particuliers et professionnels. Que ce soit pour vos
            chantiers de construction, vos travaux de rénovation ou la gestion
            de vos déchets, nous proposons des solutions sur mesure adaptées à
            vos besoins.
          </motion.p>

          <motion.button
            className="mt-8 bg-orange-500 px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-white text-sm sm:text-base"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSolutionsClick}
          >
            Nos services
          </motion.button>
        </div>

        {/* Images Section */}
        <div className="order-2 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            className="col-span-2 sm:col-span-1"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/earthworks.jpeg"
              alt="Earthworks"
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          <div className="grid grid-rows-2 gap-4">
            <motion.div
              className="col-span-2 sm:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-black text-white px-4 py-4 rounded-lg">
                <p className="text-lg sm:text-xl text-center font-extralight">
                  <motion.strong
                    className="text-2xl sm:text-3xl font-bold block sm:inline"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.7,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    + 40 ans
                  </motion.strong>
                  <br className="sm:hidden" />
                  d'expérience
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              <div className="absolute bg-gray-100 w-full sm:w-[90%] h-[90%] shadow-sm rounded-md" />
              <img
                src="/RolandContainer.png"
                alt="Roland Container Logo"
                className="relative w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
