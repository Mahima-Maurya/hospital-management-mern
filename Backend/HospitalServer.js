const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./Routers/HospitalRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/hospitalDB")
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/api", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
