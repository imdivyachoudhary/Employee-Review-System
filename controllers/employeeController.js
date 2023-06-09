const User = require("../models/user");
const fs = require("fs");
const path = require("path");

module.exports.home = (req, res) => {
  return res.render("employee", {
    title: "Home",
  });
};
