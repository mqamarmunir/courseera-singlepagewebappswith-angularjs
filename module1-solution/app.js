(function(){
  'use strict';
 //debugger;
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope','$filter'];

  function LunchCheckController($scope,$filter){
    $scope.items='';
    $scope.message='';
    $scope.checkLunchItems=function () {
if($scope.items.length>0){
    //  $scope.message=$scope.items.length==0?"Please enter data first":"";

      var itemsarray=$scope.items.split(',');
      //alert(itemsarray.length);
      if(itemsarray.length>3){
          $scope.message='Too Much!';
        }
      else {
        $scope.message='Enjoy!';

      }
    }
    else {
      $scope.message='Please enter data first';
    }
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
