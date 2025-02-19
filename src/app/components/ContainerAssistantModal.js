import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const ContainerAssistantModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const questions = [
    {
      question: "Type de déchets ?",
      options: [
        "Eternit",
        "Déchets verts",
        "Bois",
        "Inertes",
        "Plâtres",
        "Gyproc",
        "Terres",
        "Tout venant",
      ],
      key: "type",
    },
    {
      question: "Quantité estimée ?",
      options: [
        "Petit volume (1-5m³)",
        "Moyen volume (5-10m³)",
        "Grand volume (10-20m³)",
        "Très grand volume (20m³+)",
      ],
      key: "volume",
    },
  ];

  const getContainerSpecs = (type, volume) => {
    let containerSize;
    switch (volume) {
      case "Petit volume (1-5m³)":
        containerSize = "5m³";
        break;
      case "Moyen volume (5-10m³)":
        containerSize = "10m³";
        break;
      case "Grand volume (10-20m³)":
        containerSize = "20m³";
        break;
      case "Très grand volume (20m³+)":
        containerSize = "30m³";
        break;
      default:
        containerSize = "10m³";
    }

    return {
      container: `Container ${containerSize}`,
      category: type,
      weightLimit: "Poids selon type",
      details: "Conteneur adapté à vos besoins",
    };
  };

  const getRecommendation = () => {
    const { type, volume } = answers;
    if (!type || !volume)
      return {
        container: "Container standard",
        category: "À déterminer",
        weightLimit: "À déterminer",
        details: "Nous vous conseillons sur place",
      };

    return getContainerSpecs(type, volume);
  };

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [questions[step].key]: option });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-md w-full"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-6">
                {step < questions.length
                  ? questions[step].question
                  : "Notre recommandation"}
              </h2>

              <div className="space-y-3">
                {step < questions.length ? (
                  questions[step].options.map((option, index) => (
                    <button
                      key={index}
                      className="w-full p-3 bg-white border-2 border-blue-500 text-blue-500 
                               rounded-lg hover:bg-blue-50 transition"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  ))
                ) : (
                  <div>
                    <div className="bg-green-50 p-4 rounded-lg mb-4 space-y-2">
                      <h3 className="text-lg font-bold text-green-700">
                        {getRecommendation().container}
                      </h3>
                      <div className="space-y-2 text-green-600">
                        <p>
                          <span className="font-semibold">Catégorie : </span>
                          {getRecommendation().category}
                        </p>
                      </div>
                    </div>

                    <button
                      className="w-full p-3 bg-green-500 text-white rounded-lg 
                               hover:bg-green-600 transition mb-3"
                      onClick={() => router.push("/contact")}
                    >
                      Demander un devis
                    </button>

                    <button
                      className="w-full p-3 bg-gray-200 text-gray-700 rounded-lg 
                               hover:bg-gray-300 transition"
                      onClick={onClose}
                    >
                      Fermer
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContainerAssistantModal;
