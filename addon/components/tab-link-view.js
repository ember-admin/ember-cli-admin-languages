import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isActive:active:'],
  attributeBindings: ['role'],

  role: "presentation",

  isActive: Ember.computed('locale', 'currentLocale', function(){
    return this.get('locale') === this.get('currentLocale');
  }),

  localeClass: Ember.computed('locale', function(){
    let locale = this.get('locale');
    if(locale === 'en'){
      locale = "gb";
    }
    return `flag-icon flag-icon-${locale}`;
  }),

  click() {
    this.sendAction('action', this.get('locale'));
  },
});
