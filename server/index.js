const express = require("express");
const { google } = require("googleapis");

const app = express();
// app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.render("index");
});

app.post("/", async (req, res) => {
  const { name, email, phoneno, date, time } = req.body;
  console.log(name, email, phoneno,date,time)
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1VKm8WHsx3cbuEZR_qBccdZLewUicHd1iMHuHeaDd1Xo";

  // Get metadata about spreadsheet
  const metaData = await googleSheets.spreadsheets.get({
    auth,
    spreadsheetId,
  });

  // Read rows from spreadsheet
  const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Sheet1!A:E",
  });

  // Write row(s) to spreadsheet
  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name,email, phoneno, date, time]],
    },
  });

  res.send("Successfully submitted! Thank you!");
});

const PORT =8080
app.listen(PORT, (req, res) => console.log("running on 8000"));