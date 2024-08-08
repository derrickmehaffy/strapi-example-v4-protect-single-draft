"use strict";

/**
 * `protectSingleDraft` middleware
 */

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    await next();

    // Check if ctx.response.body is there and if publishedAt is null
    if (ctx.response.body && !ctx.response.body.publishedAt) {
      return ctx.unauthorized("You can't access this entry");
    }
  };
};
