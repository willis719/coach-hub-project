function checkAuth(req, res, next) {
    const { coach } =req.session;
    if (!coach) {
        return res.status(401).json({
            error: 'Not logged in'
        })
    } else {
        next();
    }
}

module.exports = checkAuth