import Ember from 'ember';

export default Ember.Component.extend({
  value: Ember.computed('name', 'model', function(key, value) {
    if (arguments.length > 1) {
      return this.get('model').set(this.get('name'), value);
    }
    return this.get('model').get(this.get('name'));
  })
});