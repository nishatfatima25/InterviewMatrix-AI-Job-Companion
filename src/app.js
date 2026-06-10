const express = require("express")

const app = express()

app.use(express.json())

//it requires all the routes here
const authRouter = require("./routes/auth.routes")

//then all the routes will be used here
app.use("/api/auth", authRouter)
module.exports = app 