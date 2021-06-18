// use -require- to use a package -express- i want to include the library so i can use it's methods
const express = require("express");

// initialise the server by -express()- function call. it creates an -express- application for me to work on
const app = express();

// set port for server to listen to("door number")
// i use _.listen method which takes 2 arguments (port#,callback function=> do this ince server is running)  
app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});