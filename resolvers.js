const {
  createPoll,
  getPoll,
  listPolls,
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
  },
};

module.exports = resolvers;
