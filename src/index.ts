import { server } from "./server";

async function start() {
  try {
    await server.start();
    console.log("Server running on %s", server.info.uri);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

// Empty .then() to get rid of warnings from IDE
start().then(() => {});
