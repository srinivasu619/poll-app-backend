const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getPoll(id: ID!): Poll
    listPolls: [Poll]
  }

  type Vote{
    pollOption: String!
  }

  type Poll {
    _id: ID!
    topic: String!
    pollOptions: [String]!
    votes: [Vote]
  }

  input PollInput {
    topic: String!
    pollOptions: [String]!
  }

  type Mutation {
    createPoll(pollInput: PollInput!): Poll!
    submitVote(pollId: ID!, pollOption: String!): Poll!
  }
`;

module.exports = typeDefs;
