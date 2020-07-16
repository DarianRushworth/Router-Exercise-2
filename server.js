const express = require("express")
const router =require("./router")

const app = express()
const port = 4000

app.use(router)

function onListen(){
    console.log(`Listening on port: ${port}`)
}

app.listen(
    port,
    onListen
)