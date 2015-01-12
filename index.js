'use strict';

module.exports = {
  name: 'ember-cli-admin-languages',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/flag-icon-css/css/flag-icon.min.css');
    app.import(app.bowerDirectory + '/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.all.min.js');
    app.import(app.bowerDirectory + '/bootstrap3-wysiwyg/dist/bootstrap3-wysihtml5.css');
  }

};
