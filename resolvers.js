const {
  createPoll,
  getPoll,
  listPolls,
  submitVote
} = require("./repositories/pollRepository");
const resolvers = {
  Query: {
    getPoll: async (_, args) => {
      return await getPoll(args.id);
    },
    listPolls: async () => {
      return await listPolls();
    },
  },
  Mutation: {
    createPoll: async (_, args) => {
      return await createPoll(args.pollInput);
    },
    submitVote: async (_, {pollId, pollOption}, context) => {
      return await submitVote({pollId, pollOption, ipAddress: context.ipAddress});
    }
  },
};

module.exports = resolvers;
