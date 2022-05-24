'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleWriter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ArticleWriter.belongsTo(models.Article);
      ArticleWriter.belongsTo(models.Writer);
    }
  }
  ArticleWriter.init(
    {
      date: DataTypes.STRING,
      ArticleId: DataTypes.INTEGER,
      WriterId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'ArticleWriter',
    }
  );
  return ArticleWriter;
};
