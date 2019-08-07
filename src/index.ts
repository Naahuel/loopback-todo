import { LoopbackTodoApplication } from './application';
import { ApplicationConfig } from '@loopback/core';

export { LoopbackTodoApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new LoopbackTodoApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);

  return app;
}
