'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      middle: {
        type: Sequelize.STRING
      },
      licenseType: {
        type: Sequelize.STRING
      },
      licenseNo: {
        type: Sequelize.STRING
      },
      nameOnLicense: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      issueDate: {
        type: Sequelize.STRING
      },
      expDate: {
        type: Sequelize.STRING
      },
      compactStatus: {
        type: Sequelize.STRING
      },
      discipline: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('People');
  }
};