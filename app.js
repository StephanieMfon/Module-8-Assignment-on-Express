const express = require("express");
const logger = require("morgan");
const port = 3000;

const app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());

// get request controller
app.post("/users", (req, res) => {
  const user = req.body;
  res.status(200).json({
    status: "success",
    data: {
      user: user,
    },
  });
});

// setting up server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
