const express = require('express');
const Router = express.Router();

const NewsController = require('../app/controllers/NewsController');

Router.use('/:slug', NewsController.getDetailNews);
Router.use('/', NewsController.getNews);

module.exports = Router;
