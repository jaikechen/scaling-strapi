'use strict';

/**
 * admin router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::admin.admin');
