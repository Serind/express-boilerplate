
export default class ResponseUtil {
  static async send({ res, status, ...args }) {
    let json = {
      ...args
    };

    res.status(status).json(json);
  }

  static async custom({ res, status = 200, ...args }) {
    this.send({ res, status, ...args });
  }

  static async success({ res, data = null, errors = [], message = 'The request was successful.' }) {
    this.send({ res, data, message, errors, status: 200 });
  }

  static async created({ res, data = null, errors = [], message = 'The resource was created.' }) {
    this.send({ res, data, message, errors, status: 201 });
  }

  static async badRequest({ res, data = null, errors = [], message = 'You provided incorrect or invalid parameters.' }) {
    this.send({ res, data, message, errors, status: 400 });
  }

  static async unauthorized({ res, data = null, errors = [], message = 'You are not authorized to access this resource.' }) {
    this.send({ res, data, message, errors, status: 401 });
  }

  static async overQuota({ res, data = null, errors = [], message = 'You have exceeded your API quota.' }) {
    this.send({ res, data, message, errors, status: 402 });
  }

  static async notFound({ res, data = null, errors = [], message = 'This resource does not exist.' }) {
    this.send({ res, data, message, errors, status: 404 });
  }

  static async serverError({ res, data = null, errors = [], message = 'Something went wrong. Please try again.' }) {
    this.send({ res, data, message, errors, status: 500 });
  }
}
