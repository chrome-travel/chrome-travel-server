'use strict';

module.exports = {
<<<<<<< HEAD
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Destinations', [{
			name: 'Sungai Ciliwung',
			city: 'Jakarta',
			country: 'Indonesia',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Ubud',
			city: 'Bali',
			country: 'Indonesia',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Destinations', null, {});
	}
=======
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
>>>>>>> 46f4e21f2501b56f323829de9fe2c5c10b8e8b7d
};
