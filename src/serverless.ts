import { APIGatewayEvent, Context } from 'aws-lambda'
import * as serverless from 'serverless-http'
import Server from './server'

const server = new Server()

export const handler = (
  event: APIGatewayEvent,
  context: Context
) => {
  return serverless(server.app)(event, context)
}