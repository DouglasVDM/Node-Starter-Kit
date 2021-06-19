# Node-Starter-Kit

## Multipe Query Parameters
I want to detect and read multiple parameters.

Here is how I send multiple query parameters to "multiply" endpoint.

  [http://localhost:3000/multiply?value1=2&value2=10](http://localhost:3000/multiply?value1=2&value2=10)
  


Below, I have one parameter called "value1" and another "value2".
Here's how I do it in Node:
```
app.get("/multiply", (req, res) => {
  let value1 = req.query.value1
  let value2 = req.query.value2
  res.send(`${value1 * value2}`)
})
