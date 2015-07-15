import Ember from 'ember';

export default Ember.Controller.extend({
  locales: Ember.A(['en', 'ru', 'de', 'fr']),
  stub: Ember.computed(function(){
    return Ember.Object.create({
      name_en: "Name",
      name_de: "Der Name",
      name_fr: "Nom",
      name_ru: "Имя",
    });
  })
});
