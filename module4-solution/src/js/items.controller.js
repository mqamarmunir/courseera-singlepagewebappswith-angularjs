(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('itemsController',itemsController);

  itemsController.$inject=['MenuDataService','catItems']
  function itemsController(MenuDataService,catItems) {
    var categoryItems=this;
    categoryItems.items=catItems.menu_items;
  }
})();
