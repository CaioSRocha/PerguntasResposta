const Sequelize = require('sequelize'); 

const connection = new Sequelize('guiaperguntas', 'root', 'caio123',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;