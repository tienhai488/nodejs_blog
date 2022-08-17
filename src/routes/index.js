const homeRouter = require('./home');
const newsRouter = require('./news');
const searchRouter = require('./search');

const InitRoute = (app) => {
    app.use('/', homeRouter);
    app.use('/news', newsRouter);
    app.use('/search', searchRouter);
};

module.exports = InitRoute;
