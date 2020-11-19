const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        req.session.user = user;
        return res.send({ auth: true });
    });
};

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username,
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (!user) {
            return res.send({ auth: false, message: 'User Not Found' });
        }

        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid) {
            return res.send({ auth: false, message: 'Invalid password' });
        }

        req.session.user = user;
        return res.send({ auth: true });
    });
};

exports.signout = (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('uid');
        return res.send({ signOut: true });
    }
    return res.send({ signOut: false });
};
