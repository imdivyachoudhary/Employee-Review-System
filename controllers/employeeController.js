const User = require("../models/user");
const fs = require("fs");
const path = require("path");
const Review = require("../models/review");

module.exports.home = async (req, res) => {
  try {
    let users = await User.find();
    let pending_reviews = await Review.find({from_user: req.user.id, reviewStatus: "Pending"})
    .populate("for_user");
    let submitted_reviews = await Review.find({from_user: req.user.id, reviewStatus: "Submitted"})
    .populate("for_user");
    return res.render("employee", {
      title: "Home",
      users: users,
      pending_reviews: pending_reviews,
      submitted_reviews: submitted_reviews
    });
    
  } catch (error) {
    return res.render("employee", {
      title: "Home",
      users: [],
      pending_reviews: [],
      submitted_reviews: []
    });
  }
};
