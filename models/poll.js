const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  topic: String,
  pollOptions: [String],
});

const Poll = mongoose.model("polls", PollSchema);

module.exports = Poll;
