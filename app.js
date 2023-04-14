const express = require("express");
const logger = require("morgan");
const port = 3000;

const app = express();

// view engine setup

app.use(logger("dev"));
app.use(express.json());

//request handler that adds a user user object to the request
app.get("/users/:name/:age/:sex", (req, res) => {
  const user = req.params;
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

// setting up server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
