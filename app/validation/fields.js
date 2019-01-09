import config from '../../config';

/**
 * username validation rules
 */
export const usernameValidation = (param) => {
  return param
    .exists()
    .withMessage('username is not provided')
    .isLength({ min: config.validation.username.min })
    .withMessage(`username should be of atleast ${config.validation.username.min} characters`);
};

/**
 * password validation rules
 */
export const passwordValidation = (param) => {
  return param
    .exists()
    .withMessage('password is not provided')
    .isLength({ min: config.validation.password.min })
    .withMessage(`password should be of atleast ${config.validation.password.min} characters`);
};

/**
 * email validation rules
 */
export const emailValidation = (param) => {
  return param
    .exists()
    .withMessage('email is not provided')
    .isEmail()
    .withMessage('Invalid email');
};

/**
 * country_code validation rules
 */
export const countryCodeValidation = (param) => {
  return param
    .exists()
    .withMessage('country_code is not provided')
    .isInt()
    .withMessage('country_code should be number')
    .isLength({ min: config.validation.country_code.min })
    .withMessage(`country_code should be of atleast ${config.validation.country_code.min} characters`);
};

/**
 * phone_number validation rules
 */
export const phoneNumberValidation = (param) => {
  return param
    .exists()
    .withMessage('phone_number is not provided')
    .isInt()
    .withMessage('Invalid phone_number');
};

/**
 * client_id validation rules
 */
export const clientIdValidation = (param) => {
  return param
    .exists()
    .withMessage('client_id is not provided');
};

/**
 * otp_code validation rules
 */
export const otpCodeValidation = (param) => {
  return param
    .exists()
    .withMessage('otp_code is not provided')
    .isInt()
    .withMessage('otp_code should be number')
    .isLength({ min: config.validation.otp_code.min, max: config.validation.otp_code.max })
    .withMessage(`otp_code should be of length ${config.validation.otp_code.min} characters`);
};

/**
 * one time token validation rules
 */
export const oneTimeTokenValidation = (param) => {
  return param
    .exists()
    .withMessage('one_time_token is not provided')
    .isLength({ min: config.validation.one_time_token.min, max: config.validation.one_time_token.max })
    .withMessage('Invalid one_time_token length');
};
