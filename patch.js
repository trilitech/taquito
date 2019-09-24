const fs = require('fs');
const angularWebpackConfig =
  './node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js';

if (fs.existsSync(angularWebpackConfig)) {
  // Patch Angular webpack config to include necessary core Node modules in a bundle
  fs.readFile(angularWebpackConfig, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/node: false/g, 'node: {crypto: true, stream: true}');

    fs.writeFile(angularWebpackConfig, result, 'utf8', function(err) {
      if (err) return console.log(err);
    });
  });
}
