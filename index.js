var HyperStore = require('hyper-store');

/**
 * Create a static store for testing
 *
 * @param {Object} resources
 * @return {HyperStore}
 */

exports.Store = function(resources) {
  var Agent = {
    root: function(cb) {
      Agent.get('/', cb);
    },
    get: function(href, cb) {
      cb(null, resources[href]);
    }
  };

  return new HyperStore(Agent);
};
