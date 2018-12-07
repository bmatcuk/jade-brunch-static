var JadeBrunchStatic, _, jade;

jade = require('jade');

_ = {
  merge: require('lodash.merge')
};

JadeBrunchStatic = (function() {
  class JadeBrunchStatic {
    constructor(config1) {
      var ref, ref1;
      this.config = config1;
      if ((ref = this.config) != null ? ref.fileMatch : void 0) {
        this.handles = this.config.fileMatch;
        delete this.config.fileMatch;
      }
      if ((ref1 = this.config) != null ? ref1.fileTransform : void 0) {
        this.transformPath = this.config.fileTransform;
        delete this.config.fileTransform;
      }
    }

    transformPath(filename) {
      return filename.replace(/\.static\.jade$/, '.html');
    }

    compile(data, filename, options, callback) {
      var opts, template;
      opts = _.merge({}, this.config, options != null ? options.jade : void 0);
      template = jade.compile(data, opts);
      return callback(null, template());
    }

  };

  JadeBrunchStatic.prototype.handles = /\.static\.jade$/;

  return JadeBrunchStatic;

}).call(this);

module.exports = function(config) {
  return new JadeBrunchStatic(config);
};

