'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'ArticleWriters',
      'WriterId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Writers',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }
    );
  },

  down(queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'ArticleWriters',
      'WriterId',
      null
    );
  },
};
