const express = require('express')

const server = express()
server.use(express.json())

server.get('/', (req, res)=>{
    res.json({message: 'fuck me Jerry'})
})



modual.exports = server