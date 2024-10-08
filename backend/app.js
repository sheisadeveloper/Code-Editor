require('dotenv').config();
const express = require('express')
const userRouter = require("./routes/userRouter")
// const codeRouter = require("./routes/codeRouter")
const app = express()
const port = process.env.PORT || 8000
const cors = require("cors")
const cookieParser = require("cookie-parser")
const path = require("path")
const mongoose = require('./config/mongoose-connection')

const corsOptions = {
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Your frontend URL
    credentials: true, // Allow credentials (cookies) to be sent
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // For handling preflight requests
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


app.use("/", userRouter)
// app.use("/user", codeRouter)

app.get('/', (req, res) => res.send('Hello Worldd!'))
app.listen(8000, () => console.log(`Example app listening on port 10000`))
