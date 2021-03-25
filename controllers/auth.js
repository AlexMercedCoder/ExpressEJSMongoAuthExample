const bcrypt = require("bcryptjs")
const User = require("../models/User")

const getCreate = (req, res) => {
    res.render("auth/create")
}

const createSubmit = async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    req.body.password = await bcrypt.hash(req.body.password, salt)
    const user = await User.create(req.body)
    console.log(user)
    res.redirect("/auth/login")
}

const getLogin = (req, res) => {
    res.render("auth/login")
}

const loginSubmit = async (req, res) => {
    try {
        console.count()
        const user = await User.findOne({username: req.body.username})
        if (user){
            console.count()
            console.log(user)
            const result = await bcrypt.compare(req.body.password, user.password)
            if (result){
                console.count()
                req.session.user = user.username
                res.json({message: "you are logged in"})
            } else {
                res.status(400).json({error: "Password is wrong"}) 
            }
        } else {
            res.status(400).json({error: "No User by That Name"})
        }
    } catch(error){
        res.json(error)
    }
}

const logout = (req, res) => {
    req.session.user = undefined
    res.json({message: "you have logged out"})
}

const test = (req, res) => {
    res.send("you are logged in")
}

const actions = {
    getCreate,
    getLogin,
    createSubmit,
    loginSubmit,
    logout,
    test
}

module.exports = actions