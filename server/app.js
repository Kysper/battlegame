const  express = require("express")
const connectDB = require("./config/db.js")
const cors = require("cors")

const app = express();

const corsOptions = {
  origin: "http://localhost:9000",
};

app.use(cors(corsOptions));

connectDB();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
