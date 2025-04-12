import express from "express"
import { prismaclient } from "db/clients"

const app = express()
app.use(express.json())

app.get("/user",(req,res)=>{
    console.log("bc");
    
    prismaclient.user.findMany()
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

app.post("/user",(req,res)=>{
    const {username,password} = req.body;

    if (!username && !password) {
        res.json('no user')
        return
    }

    prismaclient.user.create({
        data:{
            username,
            password
        }
    })
    .then(user => {
        res.status(201).json(user)
    })
})


app.listen(8080)
