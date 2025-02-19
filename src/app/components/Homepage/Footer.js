import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 pt-32 pb-12 px-4 z-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-4">
              Roland Container
            </h3>
            <p className="text-gray-400">
              Solutions de location de containers professionnelles pour tous vos
              besoins de stockage et de transport.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">+32 477 61 55 52</li>
              <li className="text-gray-400">rolandcontainer@hotmail.com</li>
              <li className="text-gray-400">
                Chau. du Château Mondron 56, 6040 Jumet
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Roland Container. Tous droits réservés.
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
