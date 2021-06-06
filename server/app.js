const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const app = express();
// const User = require("./Models/User.model")
app.use(cors());
app.use(express.json());

//Import Routes 
const authRouter = require('./routes/auth')


app.use('/api', authRouter)


app.get("/", (req, res) => {});



connectDB();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
