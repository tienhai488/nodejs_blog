const getNews = (req, res) => {
    return res.render('news.ejs');
};
const getDetailNews = (req, res) => {
    return res.send('Welcome to detail news page!');
};

module.exports = {
    getNews,
    getDetailNews,
};
