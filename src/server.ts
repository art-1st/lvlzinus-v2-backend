import Koa from 'koa'
import { ApolloServer, gql } from 'apollo-server-koa'
import { Server as HTTPServer } from 'http'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

class Server {
  app: Koa

  constructor() {
    this.app = new Koa()
    this.middleware()
  }

  middleware() {
    const apollo = new ApolloServer({ typeDefs, resolvers })
    apollo.applyMiddleware({
      app: this.app
    })
  }

  listen(port: number): HTTPServer {
    const server = this.app.listen(port)
    
    return server
  }
}

export default Server