const express = require("express");
const app = express();


app.get("/", (req, res) => {
  let searchQuery = req.query.search
  res.send("Yay Node. You searched for "+ searchQuery)
})

app.get("/chocolate", (req, res) => {
  let amountQuery = req.query.amount
  res.send(`I have ${amountQuery} chocolates`)
})

app.get("/node", (req, res) => {
  res.send("Tennis Balls!")
})

app.get("/codeyourfuture", (req, res) => {
  res.send("Is an awesome Community!")
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
