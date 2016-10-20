'use strict';

var app = angular.module("dropdownApp", []);

app.run(function($rootScope) {
   angular.element(document).on("click", function(e) {
      $rootScope.$broadcast("documentClicked", angular.element(e.target));
   });
});

app.controller("dropdownCtrl", function($scope, $http) {
    
   var urlJson = '../api/heroes.json';
   $scope.listVisible = false;

   var angleDown = document.getElementById("dropdown-icon");

   $http.get(urlJson).then(function(response) {
      $scope.heroesData = response.data.heroes;
   });

   $scope.select = function(hero) {
      $scope.selected = hero;
   };

   $scope.isSelected = function(hero) {
      return hero === $scope.selected;
   };

   $scope.show = function() {
        angleDown.style.transform = "rotate(180deg)";
        $scope.listVisible = true;
   };

   $scope.$on("documentClicked", function(inner, target) {
      if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0) {
         $scope.$apply(function() {
            angleDown.style.transform = "rotate(0deg)";
            $scope.listVisible = false;
         });
      }
   });

   $scope.$watch("selected", function() {
      $scope.isPlaceholder = $scope.selected === undefined;
      $scope.display = $scope.selected;
   });

});