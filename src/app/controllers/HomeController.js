const Course = require('../../models/Course');

const getHome = (req, res) => {
    Course.find({}, function (err, courses) {
        if (!err) {
            res.json(courses);
        } else {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    });
};

module.exports = {
    getHome,
};
