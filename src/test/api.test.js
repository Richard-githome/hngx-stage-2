const request = require('supertest');
const app = require('../app');
const { mongoConnect , mongoDisconnect } = require('../services/mongoConnect');

beforeAll(async()=> await mongoConnect());

afterAll(async()=> await mongoDisconnect());

describe('Testing the CRUD Operations', ()=>{

    describe('POST /api', ()=>{
      test('should return a 201 status code', async()=>{
        const response = await request(app).post('/api')
        .send({name: "Uche"})
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
      const user_id = 1;
      test('should return a 200 status code', async()=>{
        const response = await request(app).get(`/api/${user_id}`)
        .expect(200);
      });
    });

    describe('UPDATE | PATCH /api/user_id', ()=>{
      const user_id = 1;
      test('should return a 200 status code', async()=>{
        const response = await request(app).patch(`/api/${user_id}`)
        .send({ name: "Ebuka" })
        .expect(200);
      });
    });

    describe('DELETE /api/user_id', ()=>{
      const user_id = 1;
      test('should return a 200 status code', async()=>{
        const response = await request(app).delete(`/api/${user_id}`)
        .expect(200);
      });
    });

})