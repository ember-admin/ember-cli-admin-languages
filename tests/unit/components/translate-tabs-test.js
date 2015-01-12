import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('translate-tabs', 'TranslateTabsComponent', {
  needs: [
    'component:admin-input',
    'component:wysihtml-field',
    'template:components/admin-input',
    'template:components/wysihtml-field'
  ]
});

var model = Ember.Object.create({
  name_en: "Name",
  name_de: "Der Name",
  name_fr: "Nom",
  name_ru: "Имя",
});

var locales = ['en', 'ru', 'de', 'fr'];

test('it renders tabs', function() {
  expect(2);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
  });

  this.append();

  equal(component.$().find('.nav li').length, 4);
  equal(component.$().find('.tab-content .tab-pane').length, 4);
});

test('it shows model values', function() {
  expect(4);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
  });

  this.append();

  equal(component.$().find('input:nth(0)').val(), "Name");
  equal(component.$().find('input:nth(1)').val(), "Имя");
  equal(component.$().find('input:nth(2)').val(), "Der Name");
  equal(component.$().find('input:nth(3)').val(), "Nom");
});

test('it renders textarea', function() {
  expect(1);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
    component.set('isTextArea', true);
  });

  this.append();

  equal(component.$().find('textarea').length, 4);
});


test('it renders with editor', function() {
  expect(1);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
    component.set('isTextArea', true);
    component.set('withEditor', true);
  });

  this.append();

  equal(component.$().find('.wysihtml5-toolbar').length, 4);
});