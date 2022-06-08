'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('list')
      .service('myService')
      .getWelcomeMessage();
  },
};
