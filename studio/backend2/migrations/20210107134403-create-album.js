"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Albums", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      avatar: {
        type: Sequelize.STRING(1000),
      },
      desc: {
        type: Sequelize.STRING(1000),
      },
      author: {
        type: Sequelize.STRING,
      },
      camera_name: {
        type: Sequelize.STRING,
      },
      camera_eyes: {
        type: Sequelize.STRING,
      },
      camera_len: {
        type: Sequelize.STRING,
      },
      camera_stopwatch: {
        type: Sequelize.STRING,
      },
      camera_iso: {
        type: Sequelize.STRING,
      },
      like: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Albums");
  },
};
