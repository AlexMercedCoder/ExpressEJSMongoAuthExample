///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const AuthController = require("../controllers/auth.js")
const auth = require("../auth")

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
///////////////////////////////
// Router Routes
////////////////////////////////

// CREATE PAGE
router.get("/create", AuthController.getCreate)

// CREATE SUBMIT
router.post("/create", AuthController.createSubmit)

// LOGIN PAGE
router.get("/login", AuthController.getLogin)

// LOGIN SUBMIT
router.post("/login", AuthController.loginSubmit)

// LOGOUT
router.get("/logout", AuthController.logout)

// TEST
router.get("/test", auth, AuthController.test)
///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router