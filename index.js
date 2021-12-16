const express = require("express");
const app = express();
const cors = require('cors')
const db = require("./models")

const {Users} = require("./models")

app.use(express.json({ extended:false }))
app.use(cors())

const port = 5000;

app.get("/users", async(req,res)=>{
    try {
        const result = await Users.findOne()
        res.json(result)
    } catch (error) {
        res.json("Error Recieved")
    }
});

db.sequelize.sync().then((req) => {
    app.listen(port, () => {
        console.log(`Server is booming on port 5000`)
    })
})