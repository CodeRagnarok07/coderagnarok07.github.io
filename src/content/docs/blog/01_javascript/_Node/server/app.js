import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type": "text/html"})

    const template = fs.readFileSync("./index.html")
    res.end(template)
})

const PORT = 3000
server.listen(PORT, ()=>{
    console.log("http://localhost:"+ PORT )
})