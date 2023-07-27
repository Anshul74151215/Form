const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
const form = require("./models/Form");
const formRoutes = require("./routes/formRoutes");
// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://Anshul_ojha:Luhsna@atlascluster.ekt7t1o.mongodb.net/Form_B",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Routes
app.use("/api", formRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});