const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/demo_blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connect db success!');
    } catch (error) {
        console.log('--------Error--------');
        console.log(error);
    }
};

module.exports = {
    connectDB,
};
