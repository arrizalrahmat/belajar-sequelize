'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Articles', [
      {
        title: 'Jalan jalan ke pulau seribu',
        content:
          'Pulaunya banyak sekali sampai bingung ngitungnya.....',
        image:
          'https://img.traveltriangle.com/blog/wp-content/uploads/2018/08/Raja-Ampat-Islands-KB6592-e1535543078560.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Upacara bendera',
        content:
          'Upacara bendera di bawah laut pulau seribu. Nggak bisa nafas',
        image:
          'https://www.sportdiver.com/sites/sportdiver.com/files/styles/500_1x_/public/images/2018/08/undersea-scuba-diver.jpg?itok=8ekUmddD&fc=50,50',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  },
};
