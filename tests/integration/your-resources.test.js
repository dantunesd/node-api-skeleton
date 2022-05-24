const supertest = require('supertest');

const app = require('../../src/presentation/api/express-app');

describe('Your Resources Test Suite', () => {
  describe('POST /your-resource', () => {
    describe('given I try to create with a valid payload', () => {
      it('should return 201 status code', async () => {
        const result = await supertest(app)
          .post('/your-resource/')
          .send({ field: 'value' });

        expect(result.status).toEqual(201);
        expect(result.body).toHaveProperty('id');
      });
    });

    describe('given I try to create with an invalid payload', () => {
      it('should return 400 status code and the error', async () => {
        const result = await supertest(app).post('/your-resource/').send({});

        expect(result.status).toEqual(400);
        expect(result.body).toHaveProperty('status');
        expect(result.body).toHaveProperty('title');
        expect(result.body).toHaveProperty('type');
      });
    });
  });

  describe('GET /your-resource/', () => {
    describe('given I try to retrieve all', () => {
      it('should return 200 status code and the content', async () => {
        const result = await supertest(app).get('/your-resource/').send();

        expect(result.status).toEqual(200);
      });
    });
  });
});
