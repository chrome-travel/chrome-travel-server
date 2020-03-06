'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Destinations', [
      {
        name: 'Pantai Kuta',
        city: "Kuta",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Farmhouse',
        city: "Lembang",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Legian',
        city: "Legian Bali",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Safari',
        city: "Bogor",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pantai Losari',
        city: "Makassar",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ancol',
        city: "Jakarta Utara",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Destinations', null, {});
  }
};
