import Ember from 'ember';

export default Ember.Component.extend({
  locales: function() {
    return this.get('locales') || [];
  }.property(),

  tabLinkView: Ember.Component.extend({
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
  }),

  tabContentView: Ember.Component.extend({
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

  })

});