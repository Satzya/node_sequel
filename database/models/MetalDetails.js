const Sequelize = require('sequelize');
const sequelize = require('./../connections/sqlConnect');
module.exports = sequelize.define('MetalDetails', {
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    brandId: Sequelize.INTEGER(100),
    name: Sequelize.STRING(100)
})