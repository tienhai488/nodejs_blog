const newsRouter = require('./news');
const searchRouter = require('./search');

const InitRoute = (app) => {
    app.get('/', (req, res) => {
        return res.render('home.ejs');
    });

    app.use('/news', newsRouter);
    app.use('/search', searchRouter);
};

module.exports = InitRoute;
