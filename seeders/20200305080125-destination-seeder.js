'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Destinations', [
      {
        name: 'Labuan bajo',
        city: "NTT",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lembang',
        city: "Bandung",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pulau Seribu',
        city: "Jakarta",
        country: "Indonesia",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Paris',
        city: "Paris",
        country: "Prancis",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Destinations', null, {});
  }
};
