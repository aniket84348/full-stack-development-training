// import express package
import express from 'express'

// create app variable
const app = express()

// define port number
const port = 3000

// define request parsing
app.use(express.json())

// API Section start
app.get('/test', (req, res) => {
    res.send('api is up')
})

// status code handling
app.get('/read-user', (req, res) => {
// we fetch user from database

    let user = null
    // let user = {
    //     'name': 'aniket',
    //     'age': 19
    // }

    res.send('workding')

    // if ( user === null)
    // res.status(404).send('data not found')
    // else
    // res.status(200).send(user.name)
})

// API Section end

// Start server
app.listen(port, () => {
    console.log(`server started at port ${port}`)
})