"use strict";

/**
 * test router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::test.test", {
  config: {
    findOne: {
      middlewares: ["api::test.protect-single-draft"],
    },
  },
});
