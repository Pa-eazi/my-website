const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

// Directly use the connection string
const uri = "mongodb+srv://ezekielsunday12356:KLN3jH3ykYZvq4M7@paeazi.jp3tj.mongodb.net/?retryWrites=true&w=majority&tls=Paeazi";

const client = new MongoClient(uri, {
    tls: true,
    tlsAllowInvalidCertificates: true, // Bypass certificate validation (only for debugging) 
});

async function connectDB() {
    try {
        console.log("Attempting to connect to MongoDB...");
        await client.connect();
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
    }
}

connectDB();
app.get("/test-db", async (req, res) => {
    try {
        await client.db().admin().ping();
        res.send("MongoDB is connected!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        res.status(500).send("MongoDB connection failed.");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});