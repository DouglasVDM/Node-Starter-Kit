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

app.get("/multiply", (req, res) => {
  let value1Query = req.query.value1
  let value2Query = req.query.value2
  res.send(`${value1Query * value2Query}`)
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
