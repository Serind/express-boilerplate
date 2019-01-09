/**
 * Module dependencies.
 */

import Api from './api';

// local imports
import config from '../../config/';

/**
 * Update knowledge base
 */
const updateKnowledgeBase = ({ body }) => {
  return Api.create({
    tokenHeaders: {
      'Ocp-Apim-Subscription-Key': config.bot.subscription_key
    }
  }).fetch({
    method: 'PATCH',
    url: `/knowledgebases/${config.bot.kbid}`,
    data: JSON.stringify(body)
  });
};

module.exports = {
  updateKnowledgeBase,
};
