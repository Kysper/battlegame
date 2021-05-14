const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

require("./routes/api/auth.routes")(app);
require("./routes/api/user.routes")(app);

const corsOptions = {
  origin: "http://localhost:9000",
};

app.use(cors(corsOptions));

connectDB();

app.get("/", (req, res) => res.send("Hello World"));

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
