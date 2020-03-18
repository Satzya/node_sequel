'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("MetalDetails", {
      id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      brandId: Sequelize.INTEGER(100),
      name: Sequelize.STRING(100),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MetailDetais');
  }
};
