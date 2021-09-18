const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv").config();
const connectDatabase = require("./connectDatabase");
const mongoose = require("mongoose");
const userData = require("./Model/userData");
const deleteDatabase = require("./deleteDatabase");
const taxData = require("./Model/taxData");

//Middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

//Database Connection
connectDatabase();

//deleteDatabase();

//Requests
app.post("/user", async (req, res) => {
  const data = await new userData(req.body);

  data
    .save()
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log(err));
});

app.post("/data", async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  try {
    const user = await userData.findOne({ email });

    if (!user) {
      res.json({ redirect: "/invalid" });
    } else if (user.email === email) {
      if (user.password === pass) {
        res.json({ redirect: "/tax" });
      } else {
        res.json({ redirect: "/invalid" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/data", (req, res) => {
  res.json({
    name: "Mahavir Vaishnav",
    role: "Developer",
  });
});

app.post("/taxdata", (req, res) => {
  const data = new taxData(req.body);
  console.log(req.body);
  data
    .save()
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Connected To PORT ${PORT}`);
});
