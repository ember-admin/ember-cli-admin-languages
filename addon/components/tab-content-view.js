import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isActive:active:'],
  attributeBindings: ['role', 'id'],
  classNames: ['tab-pane'],

  role: 'tabpanel',

  isActive: function(){
    return (this.get('locales') || [])[0] === this.get('locale');
  }.property('locale'),

  id: function(){
    return "%@-%@".fmt(this.get('locale'), this.get('attributeName'));
  }.property('locale'),

  attribute: function(){
    return '%@_%@'.fmt(this.get('attributeName'), this.get('locale'));
  }.property('attributeName', 'locale')
});