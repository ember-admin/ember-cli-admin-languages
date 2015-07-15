import Ember from 'ember';

export default Ember.Component.extend({
  
  assertRunner: Ember.on('didInsertElement', function() {
    Ember.assert('Locales has not to be empty', !Ember.isEmpty(this.get('locales')));
  }),

  currentLocale: Ember.computed({
    get() {
      if (!this._locale) {
        this._locale = this.get('locales')[0];
      }
      return this._locale;
    },
    set(_, val) {
      this._locale = val;
      return this._locale;
    }
  }),

  actions: {
    setActive(locale) {
      this.set('currentLocale', locale);
    }
  }
});
