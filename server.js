require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const {
  getAllAcess,
  postNumberOfAcess,
  postUser,
} = require("./database/querys");

const port = process.env.PORT;

const app = express();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGODB, {
      dbName: process.env.DBname,
    });
    console.log(`MongoDB Connected`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};


connectDB().then(() => {
 
});

let options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["css", "js", "ico", "jpg", "jpeg", "png", "svg"],
    index: ["index.html"],
  maxAge: "1m",
  redirect: false,
};

app.use("/public", express.static(__dirname + "/public",options));

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
  const count = await getAllAcess((doc) => doc);
  if (count.lengt === 0) {
    const index = 1;
    await postNumberOfAcess(index);
  } else {
    const index = count.length + 1;
    await postNumberOfAcess(index);
  }
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/", async (req, res) => {
  await postUser(req);
  res.sendFile(path.join(__dirname, "/tanx.html"));
});

// connectDB().then(() => {
 
// });
 app.listen(port, () => {
    console.log(`server is runing on port: ${port}`);
  });