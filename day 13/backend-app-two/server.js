// import express module
const express = require('express')
// initialize app with express function
const app = express()
//define port
const port = 3000

/*
API 1
http method = get
url = /api-1
request = {}
response = "this is my first api"
*/
app.get('/api-1',(request,response) => {
    response.send('this is my first api')})

//api-2
app.get('/api-2',(resquest,response) => {
    response.send('my test api is working')
})



//api-3
app.get('/test-api-3',(request,response) => {
    response.send('my test api is working fine')
})

//----api-4-----
app.get('/homepage-admin',(request,response) => {
    response.send("this is website homepage ")
})



// -----api-5------


//start server [node server.js]
app.listen(port, () =>{
    console.log('my server is started at port' + port);
})