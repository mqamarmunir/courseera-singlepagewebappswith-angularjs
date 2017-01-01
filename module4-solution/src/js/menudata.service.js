(function(){
  'use strict'

  angular.module('data')
  .service('MenuDataService',MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject=['$http','$q'];
  function MenuDataService($http,$q) {
    var service=this;

 // Pre-populate a no cookie list
 // items.push({
 //   name: "Sugar",
 //   quantity: "2 bags",
 //   description: "Sugar used for baking delicious umm... baked goods."
 // });
 // items.push({
 //   name: "flour",
 //   quantity: "1 bags",
 //   description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
 // });
 // items.push({
 //   name: "Chocolate Chips",
 //   quantity: "3 bags",
 //   description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
 // });


    service.getAllCategories=function(){
      var deferred = $q.defer();

      // var deferred = $q.defer();
      //
      //     // Wait 2 seconds before returning
      //     $timeout(function () {
      //       // deferred.reject(items);
      //       deferred.resolve(items);
      //     }, 800);
      //
      //     return deferred.promise;
      debugger;
      $http.get("https://davids-restaurant.herokuapp.com/categories.json")
      .success(function(data){
        deferred.resolve(data);
      }).error(function(msg,code){
        console.log(msg);
      });


    //   var response = $http({
    //   method: "GET",
    //   url: (ApiBasePath + "/categories.json")
    // });
    // console.log(response);
    return deferred.promise;
    };

    service.getItemsForCategory=function(shortName){
      debugger;
      var deferred = $q.defer();

      $http.get("https://davids-restaurant.herokuapp.com/menu_items.json?cateory="+shortName)
      .success(function(data){
        deferred.resolve(data);
      }).error(function(msg,code){
        console.log(msg);
      });


    return deferred.promise;
    };


  }
})();
