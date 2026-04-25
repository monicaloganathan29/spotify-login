const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "spotify@gmail.com" && password === "12345") {
    res.json({ message: "Spotify login successful" });
  } else {
    res.status(400).json({ message: "Invalid email or password" });
  }
});

app.listen(5000, () => {
  console.log("Spotify backend running on port 5000");
});