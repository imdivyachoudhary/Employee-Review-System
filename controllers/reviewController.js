const User = require("../models/user");
const Review = require("../models/review");
const fs = require("fs");
const path = require("path");

module.exports.feedbackForm = (req, res) => {
  return res.render("feedback-form", {
    layout: false,
  });
};

module.exports.viewFeedback = (req, res) => {
  return res.render("view-feedback", {
    layout: false,
  });
};

module.exports.editFeedbackForm = (req, res) => {
    return res.render("edit-feedback", {
      layout: false,
    });
  };
  