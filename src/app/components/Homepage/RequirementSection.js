import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const RequirementsSection = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // Cela va déclencher les animations des enfants avec un délai entre chacun
        staggerChildren: 0.3,
        // L'animation du parent commence immédiatement
        delayChildren: 0.2,
      },
    },
  };

  // Variants pour chaque item (li)
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
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-orange-500 mb-4">Guide de Choix</div>
          <h2 className="text-white text-5xl font-bold mb-6">
            Êtes-vous sûr de choisir
            <br />
            le bon conteneur ?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div className="space-y-2">
            <div className="text-white text-xl mb-8">
              Les éléments à prendre en compte :
            </div>

            <motion.div
              className="space-y-1"
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
                  className="flex items-start gap-4 bg-black/50 p-4 rounded-lg backdrop-blur-sm"
                >
                  <Check className="text-green-500 w-6 h-6 flex-shrink-0" />
                  <div>
                    <div className="text-white font-medium text-lg">{item}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="pt-8">
              <div className="text-white font-medium mb-4">
                Pas sûr de ce qu'il vous faut ?
              </div>
              <p className="text-gray-400 mb-6">
                Découvrez notre fonctionnalité pour vous aidez à choisir votre
                conteneur idéal !
              </p>
              <motion.button
                className="bg-orange-500 text-white px-8 py-4 rounded hover:bg-orange-600 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.2 }}
              >
                Trouver mon conteneur
              </motion.button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-2xl"></div>
            <img
              src="/wallpaperHero.jpg"
              alt="Conteneur industriel"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementsSection;
