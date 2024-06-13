const Sequelize = require('sequelize');


const dbName = "professor";
const dbUser = "root";
const dbHost = "127.0.0.1";
const dbPassword = '';


const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: "mysql",
    host: dbHost,
});


module.exports = sequelize;