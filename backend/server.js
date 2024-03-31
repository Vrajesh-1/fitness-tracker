const express = require("express");
const cors = require("cors");
require("dotenv/config");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello to Fitness Tracker API");
});
const MONGODB_URI = "mongodb+srv://Vrajesh:admin@cluster0.pxldo8w.mongodb.net/fitness";
mongoose.connect(
  MONGODB_URI,
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log("Database connected")
);

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
