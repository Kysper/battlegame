const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

app.use(express.json());


app.get("/", (req, res) => {});

app.post("/api/register", async (req, res, next) => {
  try {
    const user = req.body;
    console.log("Data recieved");
    console.log(user)
  } catch (err) {
    console.log(err);
  }
});

connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
