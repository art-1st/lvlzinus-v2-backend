import * as Koa from 'koa';
import { Server } from 'http';

class AppServer {
  app: Koa

  constructor(app: Koa) {
    this.app = app
  }

  listen(port: number): Server {
    const server = this.app.listen(port);
    
    return server
  }
}

export default AppServer;