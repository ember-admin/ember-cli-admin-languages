/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

app.import('vendor/bootstrap3-wysihtml5.js');
app.import('vendor/bootstrap3-wysihtml5.css');

var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var icons = pickFiles('bower_components/flag-icon-css/flags', {
  srcDir: '/',
  destDir: '/flags'
});
var bootstrapFonts = pickFiles('bower_components/bootstrap-sass-official/assets/fonts/bootstrap', {
    srcDir: '/',
    destDir: '/assets/bootstrap'
});
var mergeTrees = require('broccoli-merge-trees');

module.exports = mergeTrees([app.toTree(), icons, bootstrapFonts]);
