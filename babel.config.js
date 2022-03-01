/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
