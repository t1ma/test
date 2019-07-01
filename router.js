const express = require('express');
const bodyParser = require('body-parser');
const { query } = require('express-validator');
const TestController = require('./controllers/test');

class Router {
  /**
   * Constructor.
   */
  constructor() {
    if (!Router.singleton) {
      Router.singleton = this;
    }

    return Router.singleton;
  }

  /**
   * Init.
   */
  async init() {
    const app = express();

    app.use(bodyParser.json());

    this.initRoutes(app);

    await this.listen(app);
  }

  /**
   * Init routes.
   * @private
   * @param {object} app Express app.
   */
  initRoutes(app) {
    const testController = new TestController();

    app.get(
      '/test',
      [
        query('page')
          .optional()
          .isInt()
          .toInt()
      ],
      testController.test.bind(testController)
    );
  }

  /**
   * Listen.
   * @private
   * @param {object} app Express app.
   */
  async listen(app) {
    return new Promise(resolve => {
      const hostname = '0.0.0.0';
      const port = '3000';
      this.listen = app.listen(port, hostname, () => {
        console.log(`Server listening started at "${hostname}:${port}".`);
        resolve();
      });
    });
  }
}

module.exports = Router;
