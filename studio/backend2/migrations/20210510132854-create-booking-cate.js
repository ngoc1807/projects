"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Booking_Cates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      BookingId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Bookings",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      CateId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cates",
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
    await queryInterface.dropTable("Booking_Cates");
  },
};
