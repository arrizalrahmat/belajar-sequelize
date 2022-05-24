'use strict';

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'ArticleWriters',
      'ArticleId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Articles',
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
      'ArticleId',
      null
    );
  },
};
