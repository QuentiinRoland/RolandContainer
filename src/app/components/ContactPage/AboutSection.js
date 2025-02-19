"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AboutSection = () => {
  const router = useRouter();
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cards = [
    {
      icon: "💬",
      title: "Demande en Ligne",
      description:
        "Rapide et efficace ! Remplissez notre formulaire en ligne et décrivez vos besoins en containers.",
      action: "Faire une demande",
      type: "link",
      href: "/contact",
    },
    {
      icon: "📞",
      title: "Appelez-nous",
      description:
        "Échangez avec nos experts ! Notre équipe est à votre écoute pour vous conseiller sur la meilleure solution.",
      action: "Nous appeler",
      type: "tel",
      href: "tel:+32477615552",
    },
    {
      icon: "✉️",
      title: "Écrivez-nous",
      description:
        "Prenez le temps de détailler votre projet. Envoyez-nous un email à rolandcontainer@hotmail.com",
      action: "Nous écrire",
      type: "email",
      href: "mailto:rolandcontainer@hotmail.com",
    },
  ];

  const handleCardClick = (card) => {
    if (card.type === "link") {
      router.push(card.href);
    } else if (card.type === "tel" || card.type === "email") {
      window.location.href = card.href;
    }
  };

  return (
    <div>
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/TruckWallpaper.jpeg"
            alt="Camion Roland Container"
            fill
            priority
            quality={65}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
            <div className="max-w-3xl">
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Des Solutions Adaptées à Vos Besoins
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 text-gray-200"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Quel que soit votre projet, nous avons le container qu'il vous
                faut. Location courte ou longue durée, nous nous adaptons à vos
                exigences.
              </motion.p>
              <motion.button
                onClick={() => router.push("/contact")}
                className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold 
                         rounded-md hover:bg-gray-200 transition-colors duration-300
                         text-sm sm:text-base"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
              >
                Contactez-nous
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Comment Pouvons-Nous Vous Aider ?
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg 
                         transition-all duration-300 cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                onClick={() => handleCardClick(card)}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {card.description}
                </p>
                {card.type === "tel" || card.type === "email" ? (
                  <a
                    href={card.href}
                    className="text-blue-600 font-semibold hover:underline text-sm sm:text-base"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {card.action}
                  </a>
                ) : (
                  <button
                    className="text-blue-600 font-semibold hover:underline text-sm sm:text-base"
                    onClick={() => router.push(card.href)}
                  >
                    {card.action}
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
