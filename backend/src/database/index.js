require('dotenv').config()
const { Sequelize } = require('sequelize')

const dbPassword = process.env.DB_PASSWORD

const sequelize = new Sequelize('todolist', 'root', dbPassword, {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = sequelize