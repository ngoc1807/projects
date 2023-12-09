"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Blogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      authorId: {
        type: Sequelize.INTEGER,
      },
      parentId: {
        type: Sequelize.INTEGER,
      },

      title: {
        type: Sequelize.STRING(500),
      },
      slug: {
        type: Sequelize.STRING(500),
      },

      summary: {
        type: Sequelize.TEXT,
      },

      content: {
        type: Sequelize.TEXT,
      },

      published: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },

      image: {
        type: Sequelize.STRING(1000),
      },

      like: {
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
    await queryInterface.dropTable("Blogs");
  },
};
