import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Variants pour les animations de texte dans le hero
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

  // Variants pour les cartes d'info
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

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] rounded-md overflow-hidden"
        style={{
          backgroundImage: "url('/TruckWallpaper.jpeg')",
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>

        <div className="relative z-10 h-full flex items-end pb-16 pl-8 text-white mx-auto max-w-7xl">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Let's Talk About Your Dream Home
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-6"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What does your dream home look like? Cozy and charming, spacious
              and modern, or something entirely different?
            </motion.p>
            <motion.button
              className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition"
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8 text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Your Guide to Finding Your Dream Home
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
            {/* Cards with staggered animation */}
            {[
              {
                icon: "💬",
                title: "Online Enquiry",
                description:
                  "The quickest and easiest way to reach us! Fill out our secure online form and tell us about your dream home.",
                action: "Get in Touch",
              },
              {
                icon: "📞",
                title: "Call Us",
                description:
                  "Speak to a real estate expert today! Our friendly team is available by phone to answer your questions.",
                action: "Call Us",
              },
              {
                icon: "✉️",
                title: "Write to Us",
                description:
                  "Take your time and share your details. Send us an email at contact@dreamhouse.io with your questions.",
                action: "Write to Us",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // Délai progressif pour chaque carte
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="text-blue-600 font-semibold hover:underline">
                  {card.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
