(function(){
  'use strict';
 //debugger;
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems',foundItems);

  function foundItems() {
    var ddo={
      templateUrl:'foundItems.html',
      scope: {
        narrowedItems:'<',
        onRemove:'&'
      },
      controller:foundItemsDirectiveController,
      controllerAs:'narrowedDirective',
      bindToController:true


    };
    return ddo;

  }
function foundItemsDirectiveController(){
  var narrowedDirective=this;
}
  NarrowItDownController.$inject=['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    var narrowed= this;

    narrowed.showNothingFoundMessage=0;
//    narrowed.filteredItems=[];

    narrowed.NarrowItDownClick=function(){
      narrowed.filteredItems=[];
      narrowed.showNothingFoundMessage=0;
      if(!narrowed.term){
        narrowed.showNothingFoundMessage=1;
        return
      }

      var promise=MenuSearchService.getAllItems();

      promise.then(function(response){
        narrowed.allItems=response.data;
        //console.log(narrowed.allItems);
        for (var i = 0; i < narrowed.allItems.menu_items.length; i++) {
          if(narrowed.allItems.menu_items[i].description.toLowerCase().indexOf(narrowed.term)>-1){
            narrowed.filteredItems.push(narrowed.allItems.menu_items[i]);
        }
      }
      if(narrowed.filteredItems.length==0){
        narrowed.showNothingFoundMessage=1;
      }

      //  console.log(narrowed.filteredItems);
        console.log("done!");
      })
      .catch(function(error){
        console.log(error);
      });

      narrowed.removeItem=function(index){
        narrowed.filteredItems.splice(index,1);
      }
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
