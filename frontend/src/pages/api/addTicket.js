
import { google } from "googleapis";
import { sendTicketEmail } from "@/utils/TicketEmail";
export default async function POST(req, res) {
  console.log("got the req", req.body);
  try {
    const { fullname, email, phoneno, ticketcnt, tickettype, ticketprice, event, totalPrice, checkbox } = req.body;

    // Authenticate with Service Account
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Append data
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1", // Change if needed
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[event, fullname, email, phoneno, ticketcnt, tickettype, ticketprice, totalPrice, checkbox]],
      },
    });
    let formData = {
      fullname, email, phoneno, ticketcnt, tickettype, ticketprice, event, totalPrice, checkbox
    }
    await sendTicketEmail(formData);

    return res.status(200).json({ message: "Ticket added successfully!" });
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return res.status(500).json({ error: "Failed to add ticket" });
  }
}
