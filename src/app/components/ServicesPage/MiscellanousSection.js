import React from "react";
import { motion } from "framer-motion";
const OtherSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Container pour limiter la largeur */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {/* Conteneur de l'image avec clip-path */}
          <div className="relative md:order-last">
            <div className="absolute inset-0 clip-diagonal ">
              <img
                src="/miscellanousWaste.jpg"
                alt="Image décorative"
                className="w-full h-full object-cover"
              />
              {/* Overlay pour assombrir légèrement l'image */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Contenu */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Tout venant</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  À faire ✓
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-black">
                    <span className="text-green-500 mr-2">•</span>
                    Utiliser max-w-7xl pour limiter la largeur
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-green-500 mr-2">•</span>
                    Ajouter mx-auto pour centrer
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-green-500 mr-2">•</span>
                    Prévoir un padding adaptatif
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-2">
                  À éviter ✗
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start text-black">
                    <span className="text-red-500 mr-2">•</span>
                    Largeur fixe en pixels
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-red-500 mr-2">•</span>
                    Oublier le responsive
                  </li>
                  <li className="flex items-start text-black">
                    <span className="text-red-500 mr-2">•</span>
                    Padding trop petit sur mobile
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Styles pour le clip-path diagonal */}
      <style jsx>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
        }
      `}</style>
    </section>
  );
};

export default OtherSection;
