const express = require("express");
const app = express();


app.get("/", (req, res) => {
  let searchQuery = req.query.search
  res.send("Yay Node. You searched for "+ searchQuery)
})

app.get("/chocolate", (req, res) => {
  let amount = req.query.amount
  res.send(`I have ${amount} chocolates`)
})

app.get("/multiply", (req, res) => {
  let value1 = req.query.value1
  let value2 = req.query.value2
  res.send(`${value1 * value2}`)
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
