const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");

const passport = require("passport");

router.get("/",(req,res)=>{return res.redirect("/user/admin/home")});

router.get("/home", passport.checkAdminAuthentication, adminController.home);
router.get("/edit-user-form", passport.checkAdminAuthentication, adminController.editUserForm);
router.get("/assign-reviewers-form", passport.checkAdminAuthentication, adminController.assignReviewersForm);
router.get("/view-reviewers", passport.checkAdminAuthentication, adminController.viewReviewers);

module.exports = router;