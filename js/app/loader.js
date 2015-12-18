var loaderGFW = {

  urls: {
    header: 'https://cdn.rawgit.com/simbiotica/gfw_assets/8c83bac911bb0379a4c7f54bb2e7fc057dec7f32/src/header.html',
    footer: 'https://cdn.rawgit.com/simbiotica/gfw_assets/8c83bac911bb0379a4c7f54bb2e7fc057dec7f32/src/footer.html',
    css: 'https://cdn.rawgit.com/simbiotica/gfw_assets/8c83bac911bb0379a4c7f54bb2e7fc057dec7f32/css/build/minified/global.css',
  },

  urls_dev: {
    header: 'http://localhost:8000/src/header.html',
    footer: 'http://localhost:8000/src/footer.html',
    css: 'http://localhost:8000/css/build/global.css',
  },

  init: function() {
    // Setters
    this.setElements();
    this.setParams({
      current: this.$script.data('current'),
    });
    this.setPromises()
    
    // Get data
    this.getData();
    
  },

  // Setters
  setElements: function() {
    this.$script = $('#loader-gfw');
    this.$head   = $('head');
    this.$header = $('#headerGfw');
    this.$footer = $('#footerGfw');
  },

  setParams: function(obj) {
    this.params = $.extend({}, this.params, obj)
  },

  setPromises: function() {
    this.promises = [];
    $.each(this.urls, function(k,v){
      var deferred = new $.Deferred();
      $.ajax({
        url: v,
        success: function(data) {
          deferred.resolve(data);
        }
      });
      this.promises.push(deferred.promise());
    }.bind(this));
  },

  // Getters
  getData: function() {
    this.$header.hide(0);
    this.$footer.hide(0);
    $.when.apply(null, this.promises).then(function(){
      var args = Array.prototype.slice.call(arguments);
      this.setParams({
        header: args[0],
        footer: args[1],
        css: args[2],
      })
      this.printData();
      appGFW.init(this.params);
    }.bind(this));
  },

  // Print
  printData: function() {
    this.$head.append('<style>'+this.params.css+'</style>');
    this.$header.html(this.params.header).show(0);
    this.$footer.html(this.params.footer).show(0);
  },
}

$(document).ready(function(){
  loaderGFW.init();
})