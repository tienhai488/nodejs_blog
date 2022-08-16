const path = require('path');
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const route = require('./routes');

const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/view'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
