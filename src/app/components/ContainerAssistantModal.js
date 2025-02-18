import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; // Import de useRouter

const ContainerAssistantModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const router = useRouter(); // Initialisation du router

  const handleRedirect = () => {
    router.push("/contact");
  };

  // Questions du quiz
  const questions = [
    {
      question: "Quel type de déchets avez-vous ?",
      options: ["Gravats", "Bois", "Plastique", "Mélange"],
      key: "type",
    },
    {
      question: "Quelle est la quantité approximative ?",
      options: ["1-2m³", "5m³", "10m³", "Plus de 15m³"],
      key: "volume",
    },
    {
      question: "Avez-vous des objets lourds ou encombrants ?",
      options: ["Oui", "Non"],
      key: "encombrant",
    },
  ];

  // Fonction pour déterminer la recommandation
  const getRecommendation = () => {
    if (answers.type === "Gravats" && answers.volume === "1-2m³") {
      return "Container 6m³ pour Gravats";
    }
    if (answers.volume === "Plus de 15m³") {
      return "Container 30m³ pour Déchets volumineux";
    }
    if (answers.encombrant === "Oui") {
      return "Container 20m³ avec grande ouverture";
    }
    return "Container standard 10m³";
  };

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [questions[step].key]: option });

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Affiche la recommandation
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-xl font-bold mb-4">
              {step < questions.length
                ? questions[step].question
                : "Votre container recommandé"}
            </h2>

            <div className="space-y-4">
              {step < questions.length ? (
                questions[step].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </button>
                ))
              ) : (
                <div>
                  <p className="text-lg font-semibold text-green-600 mb-4">
                    🎉 {getRecommendation()}
                  </p>
                  <button
                    className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition mb-4"
                    onClick={onClose}
                  >
                    Fermer
                  </button>
                  <button
                    className="w-full py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
                    onClick={handleRedirect}
                  >
                    Réserver un devis
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContainerAssistantModal;
