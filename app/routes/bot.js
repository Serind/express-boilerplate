
import botController from '../controllers/bot';

module.exports = (app) => {
  /**
   * @swagger
   * /api/v1/receive:
   *   post:
   *     tags:
   *       - Log
   *     produces:
   *       - application/json
   *     summary: Log user registeration data
   *     parameters:
   *       - $ref: '#/parameters/app_id'
   *       - $ref: '#/parameters/username'
   *       - $ref: '#/parameters/email'
   *       - $ref: '#/parameters/country_code'
   *       - $ref: '#/parameters/phone_number'
   *     responses:
   *       200:
   *         description: Register log api response description
   */
  app.post(
    `${app.api_prefix}/train`,
    botController.train
  );
};
