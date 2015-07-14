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
    let locale = this.get('locale');
    let attributeName = this.get('attributeName');
    return `${locale}-${attributeName}`;
  }),

  attribute: Ember.computed('attributeName', 'locale', function(){
    let locale = this.get('locale');
    let attributeName = this.get('attributeName');
    return `${attributeName}_${locale}`;
  })
});