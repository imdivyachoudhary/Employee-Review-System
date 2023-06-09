const User = require("../models/user");
const fs = require("fs");
const path = require("path");

module.exports.home = (req, res) => {
  return res.render("admin", {
    title: "Home",
  });
};

module.exports.editUserForm = (req, res) => {
  return res.render("edit-user", {
    layout: false,
  });
};

module.exports.assignReviewersForm = (req, res) => {
  return res.render("assign-reviewers-form", {
    layout: false,
  });
};

module.exports.viewReviewers = (req, res) => {
  return res.render("view-reviewers", {
    title: "Employee Feedback",
  });
};
