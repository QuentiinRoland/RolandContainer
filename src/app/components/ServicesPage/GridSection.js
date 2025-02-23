"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const GridFlexSections = () => {
  const sections = [
    {
      id: 4,
      title: "Classe 3 - Inertes",
      image: "/brickFragment.jpeg",
      content: {
        toDo: [
          "Gravats, briques, pierres",
          "Béton, ciment",
          "Faïence (lavabos, WC, vaisselle)",
          "Terre cuite, porcelaine, céramique, grès (carrelages)",
        ],
        toAvoid: [
          "Plâtre (Ytong, …) : à recycler avec les déchets plâtre/Ytong/béton cellulaire",
          "Amiante-ciment : à recycler avec les déchets amiante",
          "Litières d’animaux : à recycler avec les déchets ménager",
          "Terres",
          "Miroir : à recycler avec les déchets tout venant",
          "Vitrage : à recycler avec les déchets verre",
        ],
      },
    },

    {
      id: 2,
      title: "Déchêt verts",
      image: "/greenWaste.jpeg",
      content: {
        toDo: [
          "Tonte pelouses",
          "Branchages",
          "Fleurs fanées",
          "Écorces",
          "Feuilles mortes",
          "Ecorces et copeaux non traités",
        ],
        toAvoid: [
          "Déchets organiques (épluchures, restes repas, fruits & légumes…) : à recycler dans les déchets alimentaires ",
          "Déchets d’élevage d’animaux : à recycler dans les déchets alimentaires",
          "Planches : à recycler dans les déchets bois",
          "Poteaux : à recycler dans les déchets bois",
          "Tuteurs : à recycler dans les déchets bois",
        ],
      },
    },
    {
      id: 1,
      title: "Terres",
      image: "/metalsFragment.jpg",
      content: {
        toDo: ["Uniquement de la terre non polluée."],
        toAvoid: ["Tout poids dépassé sera Facturé chargement 12 T maximum."],
      },
    },

    {
      id: 5,
      title: "Plâtres - Gyproc",
      image: "/platrePicture.jpg",
      content: {
        toDo: [
          "Blocs de plâtre",
          "Plaques de plâtre standards",
          "Plaques de plâtre pour plafond",
        ],
        toAvoid: [
          "Rails de montage en métal/PVC/aluminium",
          "Plâtre mélangé à du bois et plastique",
          "Plâtre mélangé à du crin",
          "Plâtre renforcé avec de la cellulose",
          "Plâtre renforcé avec de la fibre de verre",
          "Plâtre renforcé avec du polystyrène",
        ],
      },
    },
    {
      id: 3,
      title: "Bois",
      image: "/woodWaste.jpeg",
      content: {
        toDo: [
          "Vieux meubles",
          "Portes & châssis (sans vitre)",
          "Palettes, poutres, planches (non pourries)",
          "Aggloméré, contreplaqués, stratifiés",
          "Meuble rotin, fonds de meubles cartonnés",
          "Mélaminés, MDF",
        ],
        toAvoid: [
          "Quincaillerie : à recycler avec les déchets tout venant",
          "Vitrage : à recycler avec les déchets verre",
          "Bois brulé ou traités (imprégnés de roofing, bitume, carbonyle,…) : à recycler avec les déchets tout venant",
          "Billes de chemin de fer : à recycler avec les déchets tout venant",
          "Bois d’élagages, pourris : à recycler avec les déchets vert",
          "Pas de souches",
        ],
      },
    },
    {
      id: 6,
      title: "Tout venant",
      image: "/miscellanousWaste.jpg",
      content: {
        toDo: [
          "Tous les déchets non dangereux qui ne peuvent être recyclés dans les autres flux de déchets. Les matières recyclables, comme le papier, le carton, le bois, le verre, doivent être triées séparément selon les règles de tri en vigueur.",
        ],
        toAvoid: [
          "Les produits dangereux (récipients sous pression comme les bonbonnes de gaz et les aérosols)",
          "Les substances dangereuses chimiques ou toxiques",
          "Les appareils électriques et électroniques",
          "Pneus",
          "Poubelles ménagères",
          "Amiantes",
          "Peintures",
          "Plâtre",
          "Gyoroc",
          "Liquides et produits pulvérulents (matière poudreuse)",
        ],
      },
    },
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                        transition-all duration-300 h-full"
            >
              <div
                className={`flex flex-col h-full ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="relative w-full lg:w-1/2">
                  <div
                    className={`relative w-full h-full ${
                      index % 2 === 0 ? "clip-path-left" : "clip-path-right"
                    }`}
                  >
                    <div className="aspect-w-16 aspect-h-9 lg:aspect-h-12">
                      <Image
                        src={section.image}
                        alt={`Illustration ${section.title}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={75}
                        priority={index < 2}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRseHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/2wBDARAVFRUZFRkbHRodKiImKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                  <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black">
                    {section.title}
                  </h2>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-green-600 mb-2">
                        À faire ✓
                      </h3>
                      <ul className="space-y-1.5">
                        {section.content.toDo.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm sm:text-base text-gray-800"
                          >
                            <span className="text-green-500 mr-2 text-base">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-red-600 mb-2">
                        À éviter ✗
                      </h3>
                      <ul className="space-y-1.5">
                        {section.content.toAvoid.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm sm:text-base text-gray-800"
                          >
                            <span className="text-red-500 mr-2 text-base">
                              •
                            </span>
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

      <style jsx>{`
        .clip-path-left {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }
        .clip-path-right {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        @media (min-width: 1024px) {
          .clip-path-left {
            clip-path: polygon(0 0, 100% 0, 85% 100%, 0 100%);
          }
          .clip-path-right {
            clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </div>
  );
};

export default GridFlexSections;
