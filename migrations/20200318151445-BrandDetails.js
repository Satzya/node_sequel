'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BrandDetails', {
      id: {
        type: Sequelize.INTEGER(100),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: Sequelize.STRING(100),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BrandDetails');
  }
};
