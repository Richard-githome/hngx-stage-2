const request = require('supertest');
const app = require('../src/app');

describe('GET /api', () => {

    const slack_name = 'motunde';
    const track = 'backend';

    test('should return a 200 status code', async () => {
        const response = await request(app)
        .get(`/api?slack_name=${slack_name}&track=${track}`)
        .expect('Content-Type', /json/)
        .expect(200);
        
        expect(response.status).toBe(200);
    })
});