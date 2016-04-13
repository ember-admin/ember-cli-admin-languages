import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    if(!this.get('withEditor')){
      return;
    }
    const element = this.$().find('textarea').wysihtml5();
    const editor = element.data("wysihtml5").editor;
    let name = this.get('name');
    editor.on('change', () => {
      this.set(`model.${name}`, editor.getValue());
    });

    editor.on('load', () => {
      editor.setValue(this.get(`model.${name}`));
    });
  },
  value: Ember.computed('model','name', {
    get: function() {
      return this.get(`model.${this.get('name')}`);
    },
    set: function(key, value) {
      this.set(`model.${this.get('name')}`, value);
      return value;
    }
  })
});