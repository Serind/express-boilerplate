import config from '../../config';

const generateString = (length = config.one_time_token.chars) => {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let response = new Date().getTime()
    .toString();
  const toGenerate = length - response.length;

  for (let i = 0; i < toGenerate; i++) {
    response += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return response;
};

// generate one time token
const generateOneTimeToken = () => {
  return generateString();
};

module.exports = {
  generateOneTimeToken
};
