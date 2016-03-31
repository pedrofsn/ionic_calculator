angular.module('starter')
.controller('CalculatorController', function CalculatorController($scope, calculator) {
   $scope.display = "";
	
   $scope.clear = function () {
       $scope.display = "";
   };
 
   $scope.clicked = function (label) {
       $scope.display = $scope.display + label;
   };
 
   $scope.equals = function () {
        var equation = $scope.display;
        var result = calculator.calculate(equation);
        $scope.display = result;
		navigator.vibrate(500);
   }; 
})

.factory('calculator', function() {
    var calculate = function(equation) {
        var parser = new Epsilon.ExpressionParser(equation);
        return parser.evaluate();
    };
 
    return {
        calculate: calculate
    };
})

.directive('ngButton', function() {
  return {
    restrict: 'E',
	scope: {
	  label : '@'
    },
	templateUrl: 'templates/button.html'
  }
});