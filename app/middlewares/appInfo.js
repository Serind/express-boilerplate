
import AppInfoModal from '../models/appInfo';
import Response from '../helpers/response';

const appIdValidation = async (req, res, next) => {
  // is appId valid
  const appId = req.headers.appid;

  try {
    // get app by apid
    const app = await AppInfoModal.findByAppId(appId);
    if (!app) { return Response.badRequest({ res, message: 'Invalid AppId' }); }
  } catch(err) {
    return Response.serverError({ res });
  }

  next();
};

module.exports = {
  appIdValidation
};
