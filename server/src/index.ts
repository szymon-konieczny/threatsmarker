import 'reflect-metadata';
import dotenv from 'dotenv';
import Container, { Service } from 'typedi';

import { Server } from './server';

@Service()
export class App {
  constructor(private readonly server: Server) { }

  public init() {
    dotenv.config();
    this.server.init();
  }
}

const app = Container.get(App);
app.init();
