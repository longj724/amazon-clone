const auth = require('../middleware/authJwt');
const controller = require('../controllers/auth');

function authentication(app) {
    app.post(
        '/auth/signup',
        (req, res, next) => {
            auth.checkDuplicateUsername(req, res, next);
            next()
        },
        (req, res) => {
            console.log('calling sign up')
            controller.signup(req, res);
        }
    );

    app.post('/auth/signin', (req, res) => {
        controller.signin(req, res);
    });

    app.get('/auth/signout', (req, res) => {
        controller.signout(req, res);
    });
}

module.exports = authentication;
