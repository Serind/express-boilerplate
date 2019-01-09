import axios from 'axios';

// local imports
import config from '../../config/';

const create = ({ baseURL = config.bot.api_base_url, tokenHeaders = {} }) => {
  // Create and configure an axios api object.

  const instance = axios.create({
    baseURL,
    timeout: 20000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      ...tokenHeaders
    }
  });

  // fetch
  const fetch = ({ method, url, data = {} }) => {
    return instance({
      method,
      url,
      data
    })
      .catch((err) => {
        throw err;
      });
  };

  return {
    fetch
  };
};

// let's return back our create method as the default.
export default {
  create
};
