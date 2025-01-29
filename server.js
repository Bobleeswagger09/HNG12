const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
// load env variables
dotenv.config();
// Enable Cors (Allows public access)
app.use(cors());

app.get("/api/info", (req, res) => {
  res.json({
    slack_email: process.env.Email,
    current_datetime: new Date().toISOString(),
    github_url: process.env.GITHUB_URL,
  });
});

// Define port
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, () => {
  console.log(`✅ Public API running on http://localhost:${PORT}`);
});
