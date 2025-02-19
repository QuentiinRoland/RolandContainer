import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const RequirementsSection = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleSolutionsClick = () => {
    router.push("/services");
  };

  return (
    <div className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="text-orange-500 mb-3 sm:mb-4 text-sm sm:text-base">
            Guide de Choix
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Êtes-vous sûr de choisir
            <br className="hidden sm:block" />
            le bon conteneur ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
            Louer un conteneur, c'est aussi respecter certaines règles
            importantes :
            <span className="text-white font-medium">
              {" "}
              type de déchets, durée de location, emplacement réglementé
            </span>
            . Ne vous inquiétez pas,{" "}
            <span className="text-white font-medium">
              notre équipe est là pour vous guider
            </span>{" "}
            et vous aider à faire le choix parfait selon vos besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-white text-lg sm:text-xl mb-4 sm:mb-6">
              Les éléments à prendre en compte :
            </div>

            <motion.div
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Type de conteneur adapté à vos déchets",
                "Taille idéale selon votre projet",
                "Conformité aux normes locales et environnementales",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3 sm:gap-4 bg-black/50 p-3 sm:p-4 rounded-lg backdrop-blur-sm"
                >
                  <Check className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-medium text-base sm:text-lg">
                      {item}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="pt-6 sm:pt-8">
              <div className="text-white font-medium mb-3 sm:mb-4 text-base sm:text-lg">
                Pas sûr de ce qu'il vous faut ?
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                Découvrez notre fonctionnalité pour vous aidez à choisir votre
                conteneur idéal !
              </p>
              <motion.button
                className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded 
                          hover:bg-orange-600 transition-colors text-sm sm:text-base
                          w-full sm:w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                onClick={handleSolutionsClick}
              >
                Trouver mon conteneur
              </motion.button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-lg sm:rounded-2xl"></div>
            <img
              src="/wallpaperHero.jpg"
              alt="Conteneur industriel"
              className="w-full h-full object-cover rounded-lg sm:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;
