const request = require("supertest");
const app = require("../app");
const { mongoConnect, mongoDisconnect } = require("../services/mongoConnect");
const allHTTPRequest = require("../controllers/person.controller");
// jest.mock("../models/person.model");
// const {
//   httpGetPersonData,
//   httpGetSinglePersonData,
//   httpAddPersonData,
//   httpUpdatePersonData,
//   httpDeletePersonData,
// } = require("../controllers/person.controller");

beforeAll(async () => {
  await mongoConnect();
});

afterAll(async ()=>{
  await mongoDisconnect();
})


describe("Testing the CRUD operations", () => {

  //This is testing for all GET API....
  describe("GET /api", () => {
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get("/api")
        .expect("Content-Type", /json/)
        .expect(200);

        expect(response.statusCode).toBe(200);
    });

    it("should return a 500 status code", async () => {
      jest.spyOn(allHTTPRequest, 'httpGetPersonData').mockImplementation(() => {
        const err = new Error ("Internal server error" );
        err.statusCode = 500;
        throw err;
      });
      const response = await request(app)
        .get("/api")
        .expect("Content-Type", /json/)
        .expect(500);
    });
  });

  //This is testing for a single GET API....
  describe("GET /api/:user_id", () => {
    const user_id = 2;
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .get(`/api/${user_id}`)
        .expect("Content-Type", /json/)
        .expect(200);

        expect(response.statusCode).toBe(200);
    });

    // it("should return a 500 status code", async () => {
    //   const response = await request(app)
    //     .get(`/api/${user_id}`)
    //     .expect(response.statusCode).toBe(500)
    // });
  });


  //This is testing for POST API....
  describe("POST /api", () => {
    it("should return a 201 status code", async () => {
      const response = await request(app)
        .post("/api")
        .send({
          user_id: 1,
          name: "John Doe",
        })
        .expect("Content-Type", /json/)
        .expect(201);

        expect(response.statusCode).toBe(201);
      });

      // it("should return a 400 status code", async () => {
      //   const response = await request(app)
      //     .post("/api")
      //     .send({
      //       user_id: 1,
      //     })
      //     .expect(response.statusCode).toBe(400);
      // });

      // it("should return a 500 status code", async () => {
      //   const response = await request(app)
      //     .post("/api")
      //     .send({
      //       user_id: 1,
      //       name: "John Doe",
      //     })
      //     .expect(response.statusCode).toBe(500);
      // });
    });


  //This is testing for PATCH API....
  describe("PATCH /api/:user_id", () => {
    const user_id = 1;
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .patch(`/api/${user_id}`)
        .send({
          user_id: 1,
          name: "Jane Doe",
        })
        .expect("Content-Type", /json/)
        .expect(200);

        expect(response.statusCode).toBe(200);
    });

    // it("should return a 400 status code", async () => {
    //   const response = await request(app)
    //     .patch(`/api/${user_id}`)
    //     .send({
    //       user_id: 1,
    //     })
    //     .expect(response.statusCode).toBe(400);
    // });

    // it("should return a 500 status code", async () => {
    //   const response = await request(app)
    //     .patch(`/api/${user_id}`)
    //     .send({
    //       user_id: 1,
    //       name: "Jane Doe",
    //     })
    //     .expect(response.statusCode).toBe(500);
    // });
  });


  //This is testing for DELETE API....
  describe("DELETE /api/:user_id", () => {
    const user_id = 1;
    it("should return a 200 status code", async () => {
      const response = await request(app)
        .delete(`/api/${user_id}`)
        .expect(200);

        expect(response.statusCode).toBe(200);
    });

    // it("should return a 400 status code", async () => {
    //   const response = await request(app)
    //     .delete(`/api/${user_id}`)
    //     .expect(response.statusCode).toBe(400);
    // });
  });
});
