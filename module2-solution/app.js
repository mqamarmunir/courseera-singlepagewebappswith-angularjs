(function(){
  'use strict';
 //debugger;
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject=['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var tbc=this;



    tbc.toBuyList=[{name:"Cookies",quantity:10},{name:"Cookies",quantity:10},{name:"Cookies",quantity:10},{name:"Cookies",quantity:10},{name:"Cookies",quantity:10},{name:"Cookies",quantity:10}];

    tbc.addItemToBoughtList=function(index){
      //debugger;
      ShoppingListCheckOffService.addToAlreadyBoughtList(tbc.toBuyList[index].name,tbc.toBuyList[index].quantity);
      tbc.toBuyList.splice(index,1);

    }




  }


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
  var abc=this;

  abc.alreadyBoughtList=ShoppingListCheckOffService.getItems();
// console.log(abc.alreadyBoughtList.length);


  }


function ShoppingListCheckOffService() {
  var service=this;
  var alreadyBoughtItemsList=[];
  service.addToAlreadyBoughtList=function(itemName,quantity){
    var item={name:itemName,quantity:quantity};
    alreadyBoughtItemsList.push(item);
  }
  service.removeFromAlreadyBoughtItemList=function(index){
    alreadyBoughtItemsList.splice(index,1);
    }
  service.getItems=function(){
    return alreadyBoughtItemsList;
  }

}

})();

// (function () {
// 'use strict';
//
// angular.module('LunchCheck', [])
//
// .controller('LunchCheckController', function ($scope) {
//   $scope.name = "Qamar";
//   $scope.totalValue = 0;
//
//   $scope.displayNumeric = function () {
//     var totalNameValue = calculatNumericForString($scope.name);
//     $scope.totalValue = totalNameValue;
//   };
//
//
//   function calculatNumericForString(string) {
//     var totalStringValue = 0;
//     for (var i = 0; i < string.length; i++) {
//       totalStringValue += string.charCodeAt(i);
//     }
//
//     return totalStringValue;
//   }
//
// });
//
//
// })();
