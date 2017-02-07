var myApp = angular.module('myApp', []);

myApp.controller('calculatorCtrl', function ($scope) {

    function add(x, y) {
        return x + y;
    }

    function sub(x, y) {
        return x - y;
    }

    function mul(x, y) {
        return x * y;
    }

    function div(x, y) {
        return x / y;
    }

    function calc(op, x, y) {
        return $scope.operators[op](parseInt(x, 10), parseInt(y));
    }

    $scope.operators = {
        '+': add,
        '-': sub,
        '*': mul,
        '/': div
    };
    $scope.op = '+';
    $scope.calc = calc;

});