function userInfo(app) {

    app.get('/user-info', (req, res) => {
        if (req.session.user) {
            return res.send({ user: true, userObj: { username: req.session.user.username } })
        }
        return res.send({ user: false, message: 'No user signed in'})
    })
};

module.exports = userInfo

