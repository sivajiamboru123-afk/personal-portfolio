const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const messagesFile = path.join(__dirname, "messages.json");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  let messages = [];
  try {
    if (fs.existsSync(messagesFile)) {
      messages = JSON.parse(fs.readFileSync(messagesFile, "utf8"));
    }
  } catch {
    messages = [];
  }

  messages.push({
    name: String(name).slice(0, 100),
    email: String(email).slice(0, 200),
    message: String(message).slice(0, 2000),
    createdAt: new Date().toISOString()
  });

  fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
  res.status(201).json({ success: true, message: "Message saved." });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});
