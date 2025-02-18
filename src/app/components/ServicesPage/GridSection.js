import React from "react";
import { motion } from "framer-motion";

const GridFlexSections = () => {
  const sections = [
    {
      id: 1,
      title: "Eternit",
      image: "/metalsFragment.jpg",
      content: {
        toDo: [
          "Utiliser des images optimisées",
          "Maintenir un ratio d'aspect",
          "Adapter le contenu",
        ],
        toAvoid: [
          "Surcharger la section",
          "Négliger les espaces",
          "Oublier l'accessibilité",
        ],
      },
    },
    {
      id: 2,
      title: "Déchêt verts",
      image: "greenWaste.jpeg",
      content: {
        toDo: [
          "Structurer le contenu clairement",
          "Utiliser des contrastes adaptés",
          "Prévoir des états de hover",
        ],
        toAvoid: [
          "Textes trop longs",
          "Couleurs non contrastées",
          "Éléments non cliquables",
        ],
      },
    },
    {
      id: 3,
      title: "Bois",
      image: "/woodWaste.jpeg",
      content: {
        toDo: [
          "Optimiser les performances",
          "Gérer les cas d'erreur",
          "Documenter le code",
        ],
        toAvoid: [
          "Code non maintenu",
          "Absence de tests",
          "Documentation obsolète",
        ],
      },
    },
    {
      id: 4,
      title: "Inertes",
      image: "brickFragment.jpeg",
      content: {
        toDo: [
          "Prévoir le dark mode",
          "Implementer les animations",
          "Tester sur tous les navigateurs",
        ],
        toAvoid: [
          "Animations trop lourdes",
          "Oublier certains navigateurs",
          "Négliger la performance",
        ],
      },
    },
    {
      id: 5,
      title: "Plâtres",
      image: "platrePicture.jpg",
      content: {
        toDo: [
          "Prévoir le dark mode",
          "Implementer les animations",
          "Tester sur tous les navigateurs",
        ],
        toAvoid: [
          "Animations trop lourdes",
          "Oublier certains navigateurs",
          "Négliger la performance",
        ],
      },
    },
    {
      id: 6,
      title: "Gyproc",
      image: "gyprocPicture.jpg",
      content: {
        toDo: [
          "Prévoir le dark mode",
          "Implementer les animations",
          "Tester sur tous les navigateurs",
        ],
        toAvoid: [
          "Animations trop lourdes",
          "Oublier certains navigateurs",
          "Négliger la performance",
        ],
      },
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3, // Ajoute un délai qui augmente pour chaque carte
              }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl 
                     transition-shadow duration-300 h-full"
            >
              <div
                className={`flex flex-col h-full ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2">
                  <div
                    className={`absolute inset-0 ${
                      index % 2 === 0
                        ? "[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]"
                        : "[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
                    }`}
                  >
                    <img
                      src={section.image}
                      alt={`Image ${section.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  {/* Spacer div pour maintenir le ratio */}
                  <div className="pb-[66.67%]" />
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <h2 className="text-xl font-bold mb-4 text-black">
                    {section.title}
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-green-600 mb-2">
                        À faire ✓
                      </h3>
                      <ul className="space-y-1">
                        {section.content.toDo.map((item, idx) => (
                          <li key={idx} className="flex items-start text-black">
                            <span className="text-green-500 mr-2 ">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-2">
                        À éviter ✗
                      </h3>
                      <ul className="space-y-1">
                        {section.content.toAvoid.map((item, idx) => (
                          <li key={idx} className="flex items-start text-black">
                            <span className="text-red-500 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridFlexSections;
