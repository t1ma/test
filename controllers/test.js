const { matchedData } = require('express-validator');
const Controller = require('./controller');

class TestController extends Controller {
  /**
   * Constructor.
   * @param {object} config Config object.
   */
  constructor(config) {
    // Define singleton.
    if (!TestController.singleton) {
      super(config);

      TestController.singleton = this;
    }

    return TestController.singleton;
  }

  /**
   * Test.
   * @param {object} req HTTP request.
   * @param {object} res HTTP response.
   */
  test(req, res) {
    const queryData = matchedData(req, { locations: ['query'] });
    console.log('hello', queryData);

    const processPid = process.pid;
    const data = {
      processPid,
      message: 'pong'
    };

    this.responseData(res, data);
  }
}

module.exports = TestController;
