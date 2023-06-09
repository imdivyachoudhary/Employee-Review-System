const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");

const passport = require("passport");

router.get("/",(req,res)=>{return res.redirect("/user/employee/home")});

router.get("/home", passport.checkEmployeeAuthentication, employeeController.home);

module.exports = router;