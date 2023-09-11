const request = require("supertest");
const app = require("../app");
const { mongoConnect, mongoDisconnect } = require("../services/mongoConnect");

beforeAll(async () => {
  await mongoConnect();
});

afterAll(async ()=>{
  await mongoDisconnect()
})


describe("Testing the CRUD operations", () => {

  describe("GET /api", () => {
    test("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("GET /api/:user_id", () => {
    const user_id = +"";
    test("should return a 200 status code", async () => {
      const response = await request(app)
        .get(`/api/${user_id}`)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.status).toBe(200);
    });
  });

  describe("GET /api", () => {
    test("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api")
        .expect("Content-Type", /json/)
        .expect(200);

      expect(response.status).toBe(200);
    });
  });
});
