var exec = require('child_process').exec;

module.exports = function (context) {
  var Q = context.requireCordovaModule('q');
  var deferral = new Q.defer();

  var build = exec('npm run build -- --output-path=www')

  build.on('close', function () {
    deferral.resolve();
  });

  return deferral.promise;
};
