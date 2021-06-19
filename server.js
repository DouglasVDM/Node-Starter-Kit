const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Yay Node")
})

app.get("/chocolate", (req, res) => {
  res.send("Mmm Chocolate :0")
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
