const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');

const resolvers = require('./resolvers/index');

const typeDefs = importSchema('./types/schema.gql'); // or .gql or glob pattern like **/*.graphql

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
