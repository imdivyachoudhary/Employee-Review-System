const User = require("../models/user");
const fs = require("fs");
const path = require("path");

module.exports.signIn = (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.role == "admin") return res.redirect("/user/admin/home");
    else return res.redirect("/user/employee/home");
  }
  return res.render("sign-in", {
    title: "Sign In",
  });
};

module.exports.loginUser = (req, res) => {
  req.flash("success", "Logged In Successfully");
  if (req.user.role == "admin") return res.redirect("/user/admin/home");
  else return res.redirect("/user/employee/home");
};

module.exports.signUp = (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.role == "admin") return res.redirect("/user/admin/home");
    else return res.redirect("/user/employee/home");
  }
  return res.render("sign-up", {
    title: "Sign Up",
  });
};

module.exports.createUser = (req, res) => {
  if (req.body.password != req.body.confirm_password) {
    req.flash("warning", "Password and Confirm Password not Same");
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (error, user) {
    if (error) {
      console.log(error);
      req.flash("error", "User Could not be Created");
      return res.redirect("back");
    }
    if (!user) {
      User.create(req.body, function (error, user) {
        if (error) {
          console.log(error);
          req.flash("error", "User Could not be Created");
          return res.redirect("back");
        } else {
          req.flash("success", "User Signed Up Successfully");
          return res.redirect("/user/sign-in");
        }
      });
    } else {
      req.flash("warning", "User already exists with this Email");
      return res.redirect("back");
    }
  });
};

module.exports.signOut = (req, res) => {
  req.logout(function (error) {
    if (error) {
      // return next(error);
      console.log(error);
      req.flash("error", "User could not be Signed Out");
      return res.redirect("back");
    }
    req.flash("success", "You have Logged Out");
    return res.redirect("/user/sign-in");
  });
};

module.exports.user = (req, res) => {
  return res.render("user", {
    title: "Profile",
  });
};

module.exports.profile = (req, res) => {
  return res.render("profile", {
    layout: false,
  });
};

module.exports.update = async (req, res) => {
  // console.log(req.body);
  try {
    if (req.user.id == req.params.id) {
      let user = await User.findById(req.params.id);

      if (req.body.name) user.name = req.body.name;
      if (req.body.email) user.email = req.body.email;
      await user.save();

      // return res.render("profile", {
      //   layout: false,
      //   user: user
      // });
      req.flash("success", "User Profile Updated Successfully");
      return res.redirect("back");
    } else {
      // return res.render("profile", {
      //   layout: false,
      // });
      req.flash("warning", "Unauthorized Action");
      return res.redirect("back");
    }
  } catch (error) {
    console.log(error);
    req.flash("error", "User Profile could not be Updated");
    return res.redirect("back");
  }
};

module.exports.home = (req, res) => {
  return res.render("home", {
    title: "Home",
  });
};
