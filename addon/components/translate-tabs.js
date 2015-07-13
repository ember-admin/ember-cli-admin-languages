import Ember from 'ember';

export default Ember.Component.extend({
  locales: function() {
    return this.get('locales') || [];
  }.property()
});