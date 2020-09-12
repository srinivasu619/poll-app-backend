const Poll = require("../models/poll");

const createPoll = async (pollInput) => {
  try {
    let res = await Poll.create(pollInput);
    return res;
  } catch (error) {
    console.error(error);
  }
};

const getPoll = async (id) => {
  try {
    return await Poll.findOne({
      _id: id,
    });
  } catch (error) {
    console.error(error);
  }
};

const listPolls = async (id) => {
  try {
    return await Poll.find();
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createPoll,
  getPoll,
  listPolls,
};
