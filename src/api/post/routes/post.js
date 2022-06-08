'use strict';

/**
 * post router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::post.post',{
  config:{
    find:{
      policies:[(policyContext)=>{
        console.log(policyContext.request.header.host)
        console.log(policyContext.state.user)
      }]
    }
  }
});
