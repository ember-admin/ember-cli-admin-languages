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

  isActive: Ember.computed('locale', 'currentLocale', function(){
    return this.get('locale') === this.get('currentLocale');
  }),

  id: Ember.computed('locale', function(){
    return this.getLocalName(false);
  }),

  attribute: Ember.computed('attributeName', 'locale', function(){
    return this.getLocalName(true);
  })
});
