const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  tweet: String,
  tweetPhoto: String,
  likes: Number,
  comments: Number,
  tweetedBy: String,
});

const tweetModel = mongoose.model("tweets", tweetSchema);

module.exports = tweetModel;
