
import Response from '../helpers/response';
import db from '../../config/db';
import botService from '../services/bot';

/**
 * Train bot
 */

const train = async (req, res) => {
  // collect params
  // const { token, team_id, event, challenge, type } = req.body;

  // fetch data
  // try {
  //   const a = await db.queryAsync(`
  //     SELECT
  //       1
  //     FROM
  //       table_name
  //   `);
  // } catch(err) {
  //   return Response.serverError({ res });
  // }

  // publish knowledge base
  // try {
  //   await botService.publishKnowledgeBase();
  // } catch(err) {
  //   return Response.serverError({ res, data: err.response.data });
  // }

  return Response.success({ res, message: 'Received successfully' });
};

module.exports = {
  train,
};
