import { APIGatewayEvent, Context } from 'aws-lambda';
import serverless from 'serverless-http';
import Server from './server';

const server = new Server()
const handler = (
  event: APIGatewayEvent,
  context: Context
) => {
  return serverless(server.app)(event, context)
}

export default handler