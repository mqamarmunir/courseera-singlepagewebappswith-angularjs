(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('categoriesController',categoriesController);

  categoriesController.$inject=['MenuDataService','items']
  function categoriesController(MenuDataService,items) {
    debugger;
    var categories=this;
    categories.items=items;
  }
})();
