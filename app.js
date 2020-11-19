const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session')
const cookieParser = require('cookie-parser')
const auth = require('./routes/auth');
const mongoSessionStore  = require('connect-mongo');
const middleware = require('./middleware/authJwt')
const userInfo = require('./routes/userInfo')
require('dotenv').config()

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
};

mongoose.connect(process.env.MONGO_URL, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb')
});

const app = express();
const port = process.env.PORT || 5000;

const MongoStore = mongoSessionStore(session)
app.use(cookieParser())
app.use(session({
    name: 'uid',
    secret: '39082mx92m20x9',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

auth(app)
userInfo(app)

app.get('/api/getInfo', (req, res) => {
    const data = [
        { id: 1, name: 'blue gilled fire', details: 'kills you painfully' },
        { id: 2, name: 'yello stripped zebra', details: "doesn't kill you" },
    ];
    res.send(JSON.stringify(data));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
