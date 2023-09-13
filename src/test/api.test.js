const request = require('supertest');
const app = require('../app');
const { mongoConnect , mongoDisconnect } = require('../services/mongoConnect');

beforeAll(async()=> await mongoConnect());

afterAll(async()=> await mongoDisconnect());

describe('Testing the CRUD Operations', ()=>{
//Tests for error handling are yet to be added. Please consider or notice me if it is very needed at this stage of this internship.
//I'm very open to learning.

    describe('POST /api', ()=>{
      test('should return a 201 status code', async()=>{
        const response = await request(app).post('/api')
        .send({id: 2, name: "Uche"})
        .expect(201);
      })
    })

    describe('GET /api', ()=>{
        test('should return a 200 status code', async()=>{
            const response = await request(app).get('/api')
            .expect(200);
        });
    });

    describe('GET /api/user_id', ()=>{
      const user_id = 2;
      test('should return a 200 status code', async()=>{
        const response = await request(app).get(`/api/${user_id}`)
        .expect(200);
      });
    });

    describe('UPDATE | PATCH /api/user_id', ()=>{
      const user_id = 2;
      test('should return a 200 status code', async()=>{
        const response = await request(app).patch(`/api/${user_id}`)
        .send({ name: "Ebuka" })
        .expect(200);
      });
    });

    describe('DELETE /api/user_id', ()=>{
      const user_id = 2;
      test('should return a 200 status code', async()=>{
        const response = await request(app).delete(`/api/${user_id}`)
        .expect(200);
      });
    });

    //Tests for error handling are yet to be added. Please consider or notice me if it is very needed at this stage of this internship.
    //I'm very open to learning.
})