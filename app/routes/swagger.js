
module.exports = (app) => {
  /**
   * @swagger
   * /api/v1/doc:
   *   get:
   *     description: Get Swagger API documentation
   *     tags:
   *       - Swagger
   *     summary: Get Swagger API documentation
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: Describe Swagger API documentation
   */
  app.get(`${app.api_prefix}/doc`, async (req, res) => {
    res.send(require('../spec'));
  });
};
