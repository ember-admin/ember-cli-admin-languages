'use strict';
var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-admin-languages',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/flag-icon-css/css/flag-icon.min.css');
    app.import(app.bowerDirectory + '/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.all.min.js');
    app.import(app.bowerDirectory + '/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.css');
  },

  treeForPublic: function() {
    var icons = path.join(this.app.bowerDirectory, '/flag-icon-css/flags');
    var iconsTree = new Funnel(this.treeGenerator(icons), {
      srcDir: '/',
      destDir: '/flags'
    });

    return iconsTree;
  }
};
