"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Album_Places", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      AlbumId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Albums",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      PlaceId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Places",
          key: "id",
        },
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("Album_Places");
  },
};
