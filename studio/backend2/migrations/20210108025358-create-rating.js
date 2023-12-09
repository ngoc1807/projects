"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Ratings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      CommentId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Comments",
          key: "id",
        },
      },

      onePoint: {
        type: Sequelize.INTEGER,
      },
      twoPoint: {
        type: Sequelize.INTEGER,
      },
      therePoint: {
        type: Sequelize.INTEGER,
      },
      fourPoint: {
        type: Sequelize.INTEGER,
      },
      fivePoint: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Ratings");
  },
};
