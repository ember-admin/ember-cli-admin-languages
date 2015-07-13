import Ember from 'ember';

export default Ember.Component.extend({

  classNameBindings: ['isActive:active:'],
  attributeBindings: ['role', 'id'],
  classNames: ['tab-pane'],

  role: 'tabpanel',

  isActive: Ember.computed('locale', function(){
    return (this.get('locales') || [])[0] === this.get('locale');
  }),

  id: Ember.computed('locale', function(){
    return "%@-%@".fmt(this.get('locale'), this.get('attributeName'));
  }),

  attribute: Ember.computed('attributeName', 'locale', function(){
    return '%@_%@'.fmt(this.get('attributeName'), this.get('locale'));
  })

});