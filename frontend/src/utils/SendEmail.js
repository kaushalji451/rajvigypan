"use server"
import nodemailer from "nodemailer";
import { transporter } from "@/lib/mailer";

// Function to send email for contact form
export const sendContactEmail = async (formData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "abhishekkaushal2526@gmail.com", // Change to the admin or recipient email
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      text: `
Dear Admin,

A new message has been submitted through the Contact Form:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

Please review and take appropriate action.

Kind regards,
Website Contact Form System
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    return { success: true, info };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
};
