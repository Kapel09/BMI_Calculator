var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "menu.htm"
    })
    .when("/BMIcalc", {
        templateUrl : "BMIcalc.htm"
    })
    .when("/BMRcalc", {
        templateUrl : "BMRcalc.htm"
    })
    .when("/BMIresult", {
        templateUrl : "BMIresult.htm"
    })
     .when("/BMRresult", {
        templateUrl : "BMRresult.htm"
    });
});





    
 