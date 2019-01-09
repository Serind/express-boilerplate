import cron from 'node-cron';

// local
import config from '../../config';
import OneTimeTokenModal from '../models/oneTimeToken';

const deleteOneTimeTokens = async () => {
  // delete expired tokens
  try {
    await OneTimeTokenModal.deleteExpiredTokens();
  } catch(err) {
    throw err;
  }
};

cron.schedule('0 1 * * *', deleteOneTimeTokens, {
  scheduled: true,
  timezone: config.timezone
});
