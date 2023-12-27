const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());

//To get data from the client side we have to get data from the req.body object.
app.use(express.json()); // this allows us to access req.body in json format


app.listen(5000, () => {
    console.log("Server has started on port 5000");
});