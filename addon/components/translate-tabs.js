import Ember from 'ember';
import linkView from 'ember-cli-admin-languages/components/tab-link-view';
import contentView from 'ember-cli-admin-languages/components/tab-content-view';

export default Ember.Component.extend({
  
  locales: Ember.computed(function() {
    return this.get('locales') || [];
  })

});
