const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
// load env variables
dotenv.config();
// Enable Cors (Allows public access)
app.use(cors());
app.use(express.json());

app.get("/api/info", (req, res) => {
  res.json({
    email: process.env.EMAIL,
    current_datetime: new Date().toISOString(),
    github_url: process.env.GITHUB_URL,
  });
});

app.get("/", (req, res) => {
  res.redirect("/api/info");
});
// handle 404
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    meessage: "The requested resource was not found.",
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: "Internal Server Error",
    message: "Something went wrong, please try again later.",
  });
});

// Define port
const PORT = process.env.PORT || 5000;

// start server
app.listen(PORT, () => {
  console.log(`Public API running on http://localhost:${PORT}`);
});
