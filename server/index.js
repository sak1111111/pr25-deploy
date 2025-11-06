const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: [process.env.CLIENT_URL, "http://localhost:3000"],
  credentials: true
}));
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Backend is working! Deploy success!" });
});

// API routes
app.get("/api/data", (req, res) => {
  res.json({ 
    data: ["item1", "item2", "item3"],
    timestamp: new Date().toISOString()
  });
});

app.post("/api/users", (req, res) => {
  res.json({ 
    message: "User created successfully",
    user: req.body 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV}`);
});