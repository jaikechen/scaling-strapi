const { getService } = require('@strapi/plugin-content-manager/server/utils');

module.exports = (plugin) => {
  const controller = plugin.controllers['collection-types'];

  // Save the original create controller action
  controller.strapiCreate = controller.create;

  // extend action create
  controller.create = async (ctx) => {
    const { model } = ctx.params;
    const { body } = ctx.request;
//    console.log(model)
 //   console.log(body)
    body.accountId = 1
  //  ctx.request.body = {...body, accountId: 1}
//    console.log(ctx.request.body)

    /*
    const A_MODEL = "api::a.a";
    const B_MODEL = "api::b.b";


    const entityManager = getService('entity-manager');

    if (model == A_MODEL ) {
      // business logic using entityManager.findOne, find...etc.
      if ( test if there is a functionnal error) {
        return ctx.badRequest("An error message");
      }
    }

     */

    // Call to the saved create controller action
    controller.strapiCreate(ctx);
  };

  return plugin;
};
