/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

app.import(app.bowerDirectory + '/flag-icon-css/css/flag-icon.min.css');
app.import(app.bowerDirectory + '/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.all.min.js');
app.import(app.bowerDirectory + '/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.css');
app.import('bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js');

var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var icons = pickFiles('bower_components/flag-icon-css/flags', {
  srcDir: '/',
  destDir: '/flags'
});

module.exports = mergeTrees([app.toTree(), icons]);
