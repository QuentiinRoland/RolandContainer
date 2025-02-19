import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { nom, prenom, email, telephone, entreprise, message } = req.body;

    if (!nom || !prenom || !email || !telephone || !entreprise || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "rolandcontainer@hotmail.com",
      subject: "Nouveau message du formulaire de contact",
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Prénom :</strong> ${prenom}</p>
        <p><strong>Entreprise :</strong> ${entreprise}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Erreur lors de l'envoi de l'email" });
  }
}
