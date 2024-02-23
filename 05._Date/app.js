const express = require("express");

const app = express();

// UTC
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st)
console.log(Date.now());

// Local time (in my case right now and here CEST GMT+0100)
console.log(Date());

// assignment       create a route with the endpoint /month 
// assignment       that returns the current month



const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));