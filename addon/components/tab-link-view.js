import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isActive:active:'],
  attributeBindings: ['role'],

  role: "presentation",

  isActive: Ember.computed('locale', function(){
    return (this.get('locales') || [])[0] === this.get('locale');
  }),

  href: Ember.computed('locale', function(){
    var locale = this.get('locale');
    var attribute = this.get('attribute');
    return `#${locale}-${attribute}`;
  }),

  localeClass: Ember.computed('locale', function(){
    var locale = this.get('locale');
    if(locale === 'en'){
      locale = "gb";
    }
    return `flag-icon flag-icon-${locale}`;
  })
});