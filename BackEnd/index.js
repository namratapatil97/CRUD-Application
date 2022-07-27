const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 5000;

const conn = require("./db");

conn.connection.on("connected" , (err) => {
    if(err){
        console.error(err);
    }
    else{
        console.log("Connected to MongoDB");
    }
});

app.use(cors());
app.use(express.json());
app.use("/user",require("./routes/user"))



// 1 . 

// app.get("/", (req , res) => {
//     console.log("We got a request");

//     res.send("Hello");
// });



// app.get('/details?name=yash', (req , res) => {
//    const fname = req.query.name;
//    res.send(`Hello World! ${fname}`);
// });


// app.get("/products/:Id/:name", (req , res) => {
//     const productId = req.params.Id;
//     const fname = req.params.name;

//     res.send(`${productId} and ${fname}`);

//     console.log(productId);
//     console.log(fname);
// })


// For create a Express Server 
app.listen(PORT, () => {
    console.log("Server is Start");
});