import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isActive:active:'],
  attributeBindings: ['role', 'id'],
  classNames: ['tab-pane'],
  role: 'tabpanel',

  getLocalName: function(reverse){
    let locale = this.get('locale');
    let attributeName = this.get('attributeName');
    return (reverse) ? `${attributeName}_${locale}` : `${locale}-${attributeName}`;
  },

  isActive: Ember.computed('locale', function(){
    return (this.get('locales') || [])[0] === this.get('locale');
  }),

  id: Ember.computed('locale', function(){
    return this.getLocalName(false);
  }),

  attribute: Ember.computed('attributeName', 'locale', function(){
    return this.getLocalName(true);
  })
});