const express = require('express');
const Router = express.Router();

const HomeController = require('../app/controllers/HomeController');

Router.use('/', HomeController.getHome);

module.exports = Router;
