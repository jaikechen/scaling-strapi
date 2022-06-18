const pluginPkg = require('../../package.json');
const pluginId = pluginPkg.name.replace(
  /^strapi-plugin-toolbar-/i,
  ''
);

module.exports = pluginId;
