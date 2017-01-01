(function(){
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider,$urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  .state('categoriesList',{
    url:'/cat-list',
    templateUrl:'src/templates/categories.template.html',
    controller:'categoriesController as categories',
    resolve:{
      items:['MenuDataService',function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }


  })
  .state('categoryitems',{
    url:'/cat-items/{shortName}',
    templateUrl:'src/templates/items.template.html',
    controller:'itemsController as categoryItems',
    resolve:{
      catItems:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  })

  }
})();
