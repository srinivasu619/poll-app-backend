const mongoose = require("mongoose");
const VoteSchema = require("./vote")

const Schema = mongoose.Schema;

const PollSchema = new Schema({
  topic: String,
  pollOptions: [String],
  votes: [{
    pollOption: String,
    ipAddress: String
  }]
});

const Poll = mongoose.model("polls", PollSchema);

module.exports = Poll;
