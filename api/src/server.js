

const express = require('express')
const app = express();
const bodyParses = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');

mongoose.connect(config.DB, { useNewUrlParser: true })
    .then(
        () => console.log('test'),
        (err) => console.log(err)
    )

const PORT = 4000;

app.use(cors());
app.use(bodyParses.urlencoded({extended: true}));
app.use(bodyParses.json())

const postRoute = require('./post.route');
app.use('/posts', postRoute);

app.listen(PORT,  function () {
    console.log('server is running 4000');
})