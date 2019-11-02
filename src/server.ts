import { Server } from "hapi";

export const server = new Server({
  port: "8080",
  host: "localhost"
});

server.route([
  {
    method: "GET",
    path: "/hello",
    handler: () => ({ message: "Hello World" })
  }
]);
