import { server } from "../server";

describe("GET /hello", () => {
  it("returns a friendly greeting", async () => {
    const response = await server.inject("/hello");
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual({ message: "Hello World" });
  });
});
