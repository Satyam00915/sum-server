const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    sum: `The sum is: ${parseInt(a) + parseInt(b)}`,
    message: "Hello vanshika Love You!!"
  });
});

app.listen(5000);
