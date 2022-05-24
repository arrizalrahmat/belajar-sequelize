'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Writers', [
      {
        name: 'Arrizal',
        age: 20,
        company: 'tokopedia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Adrian',
        age: 20,
        company: 'shopee',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Writers', null);
  },
};
