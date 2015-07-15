module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addBowerPackagesToProject([
      {name: "bootstrap3-wysiwyg", target: "~0.3.3"},
      {name: "flag-icon-css", target: "0.6.4"}
    ]);
  }
};
