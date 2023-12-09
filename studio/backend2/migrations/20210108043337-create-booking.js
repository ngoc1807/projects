"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },

      desc: {
        type: Sequelize.TEXT,
      },
      duration: {
        type: Sequelize.INTEGER,
      },

      people: {
        type: Sequelize.INTEGER,
      },
      clothes: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      image: {
        type: Sequelize.STRING(1000),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      sale: {
        type: Sequelize.INTEGER,
      },
      photographer: {
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Bookings");
  },
};
