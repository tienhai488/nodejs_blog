const getSearch = (req, res) => {
    return res.render('search.ejs');
};

const getDetailSearch = (req, res) => {
    return res.send('Welcome to detail search!');
};

module.exports = {
    getSearch,
    getDetailSearch,
};
