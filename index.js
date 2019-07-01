const Router = require('./router');

module.exports = (async () => {
  const router = new Router();
  await router.init();

  return router.listen;
})();
