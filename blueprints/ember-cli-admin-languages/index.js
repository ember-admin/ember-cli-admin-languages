module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addBowerPackageToProject('flag-icon-css');
    return this.addBowerPackageToProject('bootstrap3-wysiwyg');
  }
};