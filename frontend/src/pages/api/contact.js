// /pages/api/contact.js
import { sendContactEmail } from "../../utils/SendEmail";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { firstName, lastName, email, phone, message } = req.body; // ✅ req.body is already parsed by Next.js

    console.log("data", firstName, lastName, email, phone, message);

    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const response = await sendContactEmail({ firstName, lastName, email, phone, message });

    if (response.success) {
      return res.status(200).json({ message: "Email sent successfully" });
    } else {
      return res.status(500).json({ message: "Error sending email", error: response.error });
    }
  } catch (error) {
    console.error("Error in contact API:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
}
