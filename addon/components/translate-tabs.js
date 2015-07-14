import Ember from 'ember';

export default Ember.Component.extend({
  
  locales: Ember.computed(function() {
    return this.get('locales') || [];
  })

});
