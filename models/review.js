const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    from_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    for_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reviewStatus: {
      type: String,
      required: true,
      enum: ["pending", "submitted"],
      default: "submitted"
    },

    feedback: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
