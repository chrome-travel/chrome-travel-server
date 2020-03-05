'use strict';

module.exports = {
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
};
