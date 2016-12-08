(function(){
  'use strict';
 //debugger;
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject=['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrowed= this;

    narrowed.NarrowItDownClick=function(){
      var promise=MenuSearchService.getAllItems();
      narrowed.filteredItems=[];
      promise.then(function(response){
        narrowed.allItems=response.data;
        //console.log(narrowed.allItems);
        for (var i = 0; i < narrowed.allItems.menu_items.length; i++) {
          if(narrowed.allItems.menu_items[i].description.toLowerCase().indexOf(narrowed.term)>-1){
            narrowed.filteredItems.push(narrowed.allItems.menu_items[i]);
        }
      }

      //  console.log(narrowed.filteredItems);
        console.log("done!");
      })
      .catch(function(error){
        console.log(error);
      });
    }






  }

  MenuSearchService.$inject=["$http","ApiBasePath"];
  function MenuSearchService($http,ApiBasePath) {
    var service=this;
    service.getAllItems=function(){
      var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
    };

  }



})();
