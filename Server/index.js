const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 3000;

const db  = require("./config/db.js")

app.use(cors())
app.use(express.json())

// Queries
app.get("/users", (req, res)=>{
    db.query("SELECT * FROM User",(err, result)=>{
        if (err){
            return res.json(err);
        }
        return res.json(result)
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
