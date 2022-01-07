const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { addMessage, getMessage } = require("./user");

app.get("/users", async (req, res) => {
    const list = await getMessage();
    res.json(list);
});

app.post("/add-message", async (req, res) => {
    const message = req.body;
    await addMessage(message);
    res.json({ message: "added successfully" });
});

app.listen(5000, () => console.log("server started"));