const jwt = require('jsonwebtoken')
const config = require('../auth.config')
const User = require('../models/User')

checkDuplicateUsername = (req, res, next) => {
    User.findOne({
        username: req.body.username,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
        }

        if (user) {
            res.send({ auth: false, message: 'Username already in use' });
        }
    });
};

checkSignedIn = (req, res, next) => {
    if (req.session.user_id) {
        User.findOne({
            _id: req.session.user_id
        }).exec((err, user) => {
            console.log('user is', user)
            if (user) {
                req.user = user
                console.log('req.user is', req.user)
            }
        });
    }
    next()
}
module.exports = {
  checkDuplicateUsername,
  checkSignedIn
}
