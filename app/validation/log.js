import { body } from 'express-validator/check';

// local
import {
  usernameValidation,
  emailValidation,
  countryCodeValidation,
  phoneNumberValidation
} from './fields';

module.exports = (method) => {
  switch (method) {
    case 'register': {
      return [
        usernameValidation(body('username')),
        emailValidation(body('email')),
        countryCodeValidation(body('country_code')),
        phoneNumberValidation(body('phone_number'))
      ];
    }
  }
};
