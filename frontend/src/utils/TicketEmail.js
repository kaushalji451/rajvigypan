"use server";

import { transporter } from "@/lib/mailer";

export  const sendTicketEmail = async (formData) => {
  try {
    // Format email text for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "abhishekkaushal2526@gmail.com", // admin email
      subject: `New Ticket Booking: ${formData.fullname}`,
      text: `
Dear Admin,

A new ticket booking has been made.

Event: ${formData.event}
Full Name: ${formData.fullname}
Email: ${formData.email}
Phone: ${formData.phoneno}
Ticket Count: ${formData.ticketcnt}
Ticket Type: ${formData.tickettype}
Ticket Price: ₹${formData.ticketprice}
Total Price: ₹${formData.totalPrice}

Checkbox (Agreed): ${formData.checkbox ? "Yes" : "No"}

Kind regards,
Ticket Booking System
      `,
    };

    // Format email text for user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email, // user email
      subject: `Your Ticket Booking Confirmation`,
      text: `
Dear ${formData.fullname},

Thank you for booking your ticket!

Here are your booking details:

Event: ${formData.event}
Tickets: ${formData.ticketcnt} x ${formData.tickettype}
Price per Ticket: ₹${formData.ticketprice}
Total Paid: ₹${formData.totalPrice}

We look forward to seeing you at the event!

Kind regards,
Event Team
      `,
    };

    // Send both emails
    const [adminInfo, userInfo] = await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log("Admin Email ID:", adminInfo.messageId);
    console.log("User Email ID:", userInfo.messageId);

    return { success: true };
  } catch (error) {
    console.error("Error sending emails:", error);
    return { success: false, error };
  }
};
