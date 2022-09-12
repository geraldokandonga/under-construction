import _ from "lodash";
let env = process.env;

let config = {
  general: {},

  development: {},

  production: {},
};

export default _.extend({}, config.general, config[env.NODE_ENV]);
