const express = require('express');
const Router = express.Router();

const SearchController = require('../app/controllers/SearchController');

Router.use('/:slug', SearchController.getDetailSearch);
Router.use('/', SearchController.getSearch);

module.exports = Router;
