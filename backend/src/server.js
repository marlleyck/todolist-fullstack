const express = require('express')
const cors = require('cors')

const authController = require('./controllers/authController')
const connection = require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(authController)

connection.sync()
.then(() => {
	app.listen(3000, () => console.log('Server is running...'))
})
.catch((e) => console.log(e))