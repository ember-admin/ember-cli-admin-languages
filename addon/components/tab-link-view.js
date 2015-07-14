import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['isActive:active:'],
  attributeBindings: ['role'],

  role: "presentation",

  isActive: function(){
    return (this.get('locales') || [])[0] === this.get('locale');
  }.property('locale'),

  href: function(){
    return "#%@-%@".fmt(this.get('locale'), this.get('attribute'));
  }.property('locale'),

  localeClass: function(){
    var locale = this.get('locale');
    if(locale === 'en'){
      locale = "gb";
    }
    return 'flag-icon flag-icon-%@'.fmt(locale);
  }.property('locale')
});