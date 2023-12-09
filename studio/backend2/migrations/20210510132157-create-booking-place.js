"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Booking_Places", {
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
    await queryInterface.dropTable("Booking_Places");
  },
};
