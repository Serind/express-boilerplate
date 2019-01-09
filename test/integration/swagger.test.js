'use strict';

import supertest from 'supertest';
import app from '../../index';

describe('Swagger', () => {
  const request = supertest(app.listen());

  describe(`GET ${app.api_prefix}/doc`, () => {
    test('<200> should always return API specification in swagger format', async () => {
      const res = await request
        .get(`${app.api_prefix}/doc`)
        .expect('Content-Type', /json/)
        .expect(200);

      const spec = res.body;
      expect(spec).toHaveProperty('info');
      expect(spec).toHaveProperty('swagger', '2.0');
      expect(spec).toHaveProperty('consumes');
      expect(spec).toHaveProperty('produces');
      expect(spec).toHaveProperty('paths');
    });
  });
});
