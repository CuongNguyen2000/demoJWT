const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const authRoute = require('./routes/auth')
const cookie = require("cookie-parser")
const cookieParser = require('cookie-parser')



const port = process.env.PORT || 3000

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use(cors({
    origin: "http://localhost:8080",
    credentials: true
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,credentials");
    next();
})


app.use('/login', authRoute)



app.listen(port, () => {
    console.log('Server is running in port 3000')
})

