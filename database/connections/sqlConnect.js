const Sequelize = require('sequelize');
const sequelize = new Sequelize('WareHouse', 'root', 'root', {
    host: '127.0.0.1',
    dialect: 'mysql',
})

module.exports = sequelize
global.exports = sequelize