const HTTP_STATUS_CODE_OK = 200;

class Controller {
  /**
   * Constructor.
   */
  constructor() {}

  /**
   * Response data.
   * @param {object} res HTTP response.
   * @param {object} [data] Data response.
   * @param {number} [httpStatusCode] HTTP status code.
   */
  responseData(res, data = {}, httpStatusCode = HTTP_STATUS_CODE_OK) {
    const responseObject = { data };

    // Log.
    console.log('HTTP response', responseObject);

    res.status(httpStatusCode).send(responseObject);
  }
}

module.exports = Controller;
