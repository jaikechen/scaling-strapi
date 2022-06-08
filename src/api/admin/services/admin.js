'use strict';

/**
 * admin service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admin.admin');
