module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    var self = this;
    return this.addBowerPackageToProject('flag-icon-css').then(function(){
      self.addBowerPackageToProject('bootstrap3-wysiwyg');
    });
  }
};