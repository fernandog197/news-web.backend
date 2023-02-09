import * as dotenv from 'dotenv'

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

//Security packages 
import cors from 'cors'
import helmet from 'helmet'
import xss from 'xss-clean'
import rateLimiter from 'express-rate-limit'

import morgan from 'morgan'

import allRouters from './src/routes/index.js'

dotenv.config()
const app = express()

app.set('trust proxy', 1)
app.use(rateLimiter({
  windowMs: 15*60*1000,
  max: 100,
}))
app.use(bodyParser.urlencoded({ limit:'50mb', extended: true }))
app.use(bodyParser.json({ limit:'50mb', extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(xss())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Whit, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,DELETE')
    next()
})

app.use('/', allRouters)

const PORT = process.env.PORT || 5000

mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
    .catch((err) => console.log(err))