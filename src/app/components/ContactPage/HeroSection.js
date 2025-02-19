import React, { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", content: "" });

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          content: "Message envoyé avec succès !",
        });
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          telephone: "",
          entreprise: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Une erreur est survenue");
      }
    } catch (error) {
      setMessage({
        type: "error",
        content: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
          <img
            src="/liftingTruckGround.jpeg"
            alt="Construction truck"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="hidden lg:block absolute bottom-8 left-8 text-white p-6 max-w-md">
              <p className="text-lg italic mb-4">
                "Travailler avec RolandContainer a été une expérience
                incroyable. Nous avons reçu notre conteneur rapidement et
                efficacement ! "
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm">CEO, DesignFlow Agency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-12">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            {message.content && (
              <div
                className={`p-4 rounded-md text-sm ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.content}
              </div>
            )}

            <h2 className="text-2xl text-black mb-2 font-semibold">
              Une question sur un conteneur ? Ou une demande particulière ?{" "}
              Contactez Nous !
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prénom
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entreprise
              </label>
              <input
                type="text"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-md text-white transition-colors ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
