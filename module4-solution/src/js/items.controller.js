(function(){
  'use strict';

  angular.module('MenuApp')
  .controller('itemsController',itemsController);

  itemsController.$inject=['MenuDataService','catItems']
  function itemsController(MenuDataService,catItems) {
    debugger;
    var categoryItems=this;
    categoryItems.items=catItems;
  }
})();
