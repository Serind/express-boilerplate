'use strict';

import supertest from 'supertest';
import app from '../../index';
import config from '../../config';

describe('Log', () => {
  const request = supertest(app.listen());

  describe('Register', () => {
    describe(`POST ${app.api_prefix}/log/register`, () => {
      test('<400> AppId is not provided', async () => {
        const res = await request
          .post(`${app.api_prefix}/log/register`)
          .expect('Content-Type', /json/)
          .expect(400);

        const spec = res.body;
        expect(spec).toHaveProperty('data');
        expect(spec).toHaveProperty('errors');
        expect(spec).toHaveProperty('message');
      });

      test('<400> username is not provided', async () => {
        await request
          .post(`${app.api_prefix}/log/register`)
          .send(`email=${config.email.valid}`)
          .send(`country_code=${config.country_code.valid}`)
          .send(`phone_number=${config.phone_number.valid}`)
          .set('AppId', config.app_id)
          .expect('Content-Type', /json/)
          .expect(400);
      });

      test('<400> email is not provided', async () => {
        await request
          .post(`${app.api_prefix}/log/register`)
          .send(`username=${config.username.valid}`)
          .send(`country_code=${config.country_code.valid}`)
          .send(`phone_number=${config.phone_number.valid}`)
          .set('AppId', config.app_id)
          .expect('Content-Type', /json/)
          .expect(400);
      });

      test('<400> country code is not provided', async () => {
        await request
          .post(`${app.api_prefix}/log/register`)
          .send(`email=${config.email.valid}`)
          .send(`username=${config.username.valid}`)
          .send(`phone_number=${config.phone_number.valid}`)
          .set('AppId', config.app_id)
          .expect('Content-Type', /json/)
          .expect(400);
      });

      test('<400> phone number is not provided', async () => {
        await request
          .post(`${app.api_prefix}/log/register`)
          .send(`email=${config.email.valid}`)
          .send(`username=${config.username.valid}`)
          .send(`country_code=${config.country_code.valid}`)
          .set('AppId', config.app_id)
          .expect('Content-Type', /json/)
          .expect(400);
      });

      test('<200> should always return success', async () => {
        await request
          .post(`${app.api_prefix}/log/register`)
          .send(`email=${config.email.valid}`)
          .send(`username=${config.username.valid}`)
          .send(`country_code=${config.country_code.valid}`)
          .send(`phone_number=${config.phone_number.valid}`)
          .set('AppId', config.app_id)
          .expect('Content-Type', /json/)
          .expect(200);
      });
    });
  });
});
