import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'


dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
const PORT = process.env.PORT 

app.use('/',(req,res) => res.send('Hey'))

app.listen(PORT, console.log(`Portfolio running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))