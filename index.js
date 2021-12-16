const express = require("express");
const app = express();
const cors = require('cors')

app.use(express.json({ extended:false }))
app.use(cors())

const port = 5000;

app.get("/", (req,res)=>{
    res.send("Welcome to Page")
})


    app.listen(port, () => {
        console.log(`Server is booming on port 5000`)
    })
