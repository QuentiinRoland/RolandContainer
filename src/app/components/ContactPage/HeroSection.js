import React, { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
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
    <div className="relative w-full max-w-7xl">
      <div className="relative w-full h-screen max-h-[800px] flex">
        <div className="w-1/2 relative overflow-hidden">
          <img
            src="/liftingTruckGround.jpeg"
            alt="Construction truck"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="absolute bottom-8 left-8 text-white p-6 max-w-md">
              <p className="text-lg italic mb-4">
                "Travailler avec nous a été une expérience incroyable. Notre
                équipe a transformé votre vision en réalité avec créativité et
                précision."
              </p>
              <div>
                <p className="font-bold">Sarah Johnson</p>
                <p className="text-sm">CEO, DesignFlow Agency</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 p-12 bg-gray-50">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
            {message.content && (
              <div
                className={`p-4 rounded-md ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.content}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom :
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Nom"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prénom :
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Prénom"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email :
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Téléphone :
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Téléphone"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white py-3 px-6 rounded-md transition-colors`}
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
