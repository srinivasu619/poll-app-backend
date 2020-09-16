const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VoteSchema = new Schema({
  pollOption: String,
  ipAddress: String,
});


module.exports = VoteSchema;
