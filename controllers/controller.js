const {
  Article,
  ArticleWriter,
  Writer,
} = require('../models');
const Sequelize = require('sequelize');
const { iLike } = Sequelize.Op;

class Controller {
  static getAllArticles(req, res) {
    const { articleId, searchQuery } = req.query;
    let options = {};

    if (articleId) {
      options.id = articleId;
    }

    if (searchQuery) {
      options.title = {
        [iLike]: `%${searchQuery}%`,
      };
    }

    console.log(options);

    Article.findAll({
      where: options,
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => console.log(err));
  }

  static getOneArticle(req, res) {}

  static createArticleWriter(req, res) {
    const { articleId, writerId } = req.body;

    ArticleWriter.create({
      ArticleId: articleId,
      WriterId: writerId,
      date: new Date().toISOString(),
    })
      .then((data) => res.send(data))
      .catch((err) => console.log(err));
  }

  static getAllArticleWriters(req, res) {
    ArticleWriter.findAll({
      include: [Writer, Article],
    })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }

  static updateWriter(req, res) {
    const { id } = req.params;
    const { name, age, company } = req.body;

    Writer.update(
      { name, age, company },
      {
        where: {
          id,
        },
      }
    )
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  }
}

module.exports = Controller;
