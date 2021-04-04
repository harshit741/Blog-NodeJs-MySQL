const express = require("express");
const db = require("./models");
const cors = require("cors");
const router = require('./routes');

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }))
db.conn.sync({}).then(() => {
  console.log("Drop and re-sync db.");
});
app.get("/", (req, res) => {
  res.json({ message: "Home" });
});
app.use("/api/posts", router);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});