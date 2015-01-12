'use strict';

module.exports = {
  name: 'ember-cli-admin-languages',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/flag-icon-css/css/flag-icon.min.css');
  }

};
