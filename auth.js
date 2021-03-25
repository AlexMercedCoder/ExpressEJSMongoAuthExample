module.exports = (req, res, next) => {
    if (req.session.user){
        next()
    } else {
        res.json({message: "Not Logged in"})
    }
}