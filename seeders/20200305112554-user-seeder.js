'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: "admin@admin.com",
        password: "$2y$10$c2vx8ECi5co.janV837wheR0R8e327Pv94HPMphHaL0T1/lYIVSYO",
        phone_number: "081234567890",
        gender: true,
        role: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bambank',
        email: "bambank@gmail.com",
        password: "$2y$10$ka6hXNJ1TjJL993QFRAjBeaNUWYig6x0UxnW2rzCx7vljaaJK4IUW",
        phone_number: "081234567890",
        gender: true,
        role: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'siti',
        email: "siti@gmail.com",
        password: "$2y$10$ka6hXNJ1TjJL993QFRAjBeaNUWYig6x0UxnW2rzCx7vljaaJK4IUW",
        phone_number: "081234567890",
        gender: false,
        role: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'bunga',
        email: "bunga@gmail.com",
        password: "$2y$10$ka6hXNJ1TjJL993QFRAjBeaNUWYig6x0UxnW2rzCx7vljaaJK4IUW",
        phone_number: "081234567890",
        gender: false,
        role: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
