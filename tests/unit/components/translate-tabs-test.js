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
    'template:components/wysihtml-field',
    'component:tab-content-view',
    'component:tab-link-view',
    'template:components/tab-content-view',
    'template:components/tab-link-view'
  ]
});

var model = Ember.Object.create({
  name_en: "Name",
  name_de: "Der Name",
  name_fr: "Nom",
  name_ru: "Имя",
});

var locales = Ember.A(['en', 'ru', 'de', 'fr']);

test('it renders tabs', function(assert) {
  assert.expect(2);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
  });

  this.render();

  assert.equal(component.$().find('.nav li').length, 4);
  assert.equal(component.$().find('.tab-content .tab-pane').length, 4);
});

test('it shows icons', function(assert) {
  assert.expect(4);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
  });

  this.render();

  assert.equal(component.$().find('.nav li span:nth(0)').attr('class'), 'flag-icon flag-icon-gb');
  assert.equal(component.$().find('.nav li span:nth(1)').attr('class'), 'flag-icon flag-icon-ru');
  assert.equal(component.$().find('.nav li span:nth(2)').attr('class'), 'flag-icon flag-icon-de');
  assert.equal(component.$().find('.nav li span:nth(3)').attr('class'), 'flag-icon flag-icon-fr');
});

test('it shows model values', function(assert) {
  assert.expect(4);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
  });

  this.render();

  assert.equal(component.$().find('input:nth(0)').val(), "Name");
  assert.equal(component.$().find('input:nth(1)').val(), "Имя");
  assert.equal(component.$().find('input:nth(2)').val(), "Der Name");
  assert.equal(component.$().find('input:nth(3)').val(), "Nom");
});

test('it renders textarea', function(assert) {
  assert.expect(1);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
    component.set('isTextArea', true);
  });

  this.render();

  assert.equal(component.$().find('textarea').length, 4);
});


test('it renders with editor', function(assert) {
  assert.expect(1);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
    component.set('isTextArea', true);
    component.set('withEditor', true);
  });

  this.render();

  assert.equal(component.$().find('.wysihtml5-toolbar').length, 4);
});

test('it switches tabs', function(assert) {
  assert.expect(5);

  var component = this.subject();

  Ember.run(function(){
    component.set('model', model);
    component.set('locales', locales);
    component.set('attribute', 'name');
    component.set('isTextArea', true);
    component.set('withEditor', true);
  });

  this.render();

  assert.equal(component.$().find('.nav li:first').hasClass('active'), true);
  assert.equal(component.$().find('.tab-pane.active textarea').val(), "Name");

  component.$().find('.nav li a:last').click();

  assert.equal(component.$().find('.nav li:first').hasClass('active'), false);
  assert.equal(component.$().find('.nav li:last').hasClass('active'), true);
  assert.equal(component.$().find('.tab-pane.active textarea').val(), "Nom");
});
