import Ember from 'ember';

export default Ember.Component.extend({
  locales: ['en', 'ru', 'de', 'fr'],
  stub: function(){
    return Ember.Object.create({
      name_en: "Name",
      name_de: "Der Name",
      name_fr: "Nom",
      name_ru: "Имя",
    });
  }.property();
});