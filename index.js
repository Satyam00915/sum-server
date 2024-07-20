const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Shreya This is Satyam From My laptop!!!!!");
});

app.listen(5000);
