const Sequelize = require('sequelize');

module.exports = sequelize.define('BrandDetails', {
    id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING(100)
})