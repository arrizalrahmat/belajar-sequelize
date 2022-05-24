const express = require('express');
const Controller = require('./controllers/controller');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/articles', Controller.getAllArticles);
app.get('/articles/:id', Controller.getOneArticle);
app.get('/articlewriters', Controller.getAllArticleWriters);
app.post('/articlewriters', Controller.createArticleWriter);
app.put('/writers/:id', Controller.updateWriter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
