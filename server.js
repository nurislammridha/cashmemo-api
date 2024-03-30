const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
//Connect Database//git
connectDB();
//Initial middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API Running1"));
//Define Routes
//cors policy
app.use(cors());
app.options("*", cors());
app.use("/api/v1/product", require("./routes/api/productInfo"));
app.use("/api/v1/client", require("./routes/api/clientInfo"));
app.use("/api/v1/sell", require("./routes/api/sellInfo"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servet started on port ${PORT}`));
