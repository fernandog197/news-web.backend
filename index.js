import * as dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import morgan from 'morgan'

import allRouters from './src/routes/index.js'

dotenv.config()
const app = express()

app.use(bodyParser.urlencoded({ limit:'50mb', extended: true }))
app.use(bodyParser.json({ limit:'50mb', extended: true }))
app.use(cors())
app.use(morgan('dev'))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Whit, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,DELETE')
    next()
})

app.use('/', (req, res) => {
    res.send('Conectado exitosamente! :D')
})
app.use('/api/v1/', allRouters)

const CONNECTIOM_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.5t8gdfu.mongodb.net/news-app?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose.set('strictQuery', true)
mongoose.connect(CONNECTIOM_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`)))
    .catch((err) => console.log(err))
