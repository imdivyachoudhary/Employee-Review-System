const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/reviewController");

const passport = require("passport");

router.get("/feedback-form", passport.checkAuthentication, reviewController.feedbackForm);
router.get("/view-feedback", passport.checkAuthentication, reviewController.viewFeedback);
router.get("/edit-feedback-form", passport.checkAuthentication, reviewController.editFeedbackForm);

module.exports = router;