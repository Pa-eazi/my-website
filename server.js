require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
.connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Default route 
app.get("/", (req, res) => {
    res.send("Hello, Node.js with MongoDB!"); 
});

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));