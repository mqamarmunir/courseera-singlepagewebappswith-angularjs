(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('categoriesController',categoriesController);

  categoriesController.$inject=['MenuDataService','items']
  function categoriesController(MenuDataService,items) {
    var categories=this;
    categories.items=items;
  }
})();
