app.factory("Data", function (){
	return {bmiValue: "none", bmrValue: "none", details: ""}
});

app.controller('myCtrl', function($scope, $http, $location, Data) {
    $scope.weight;
    $scope.height;
    $scope.years;
    $scope.genre = true;
    $scope.bmiValue = Data.bmiValue;
    $scope.bmrValue = Data.bmrValue;
    $scope.myData = Data.details.bmi;
    var resultNumber;
    
    $scope.$on('$routeChangeSuccess', function() { 
        $(document).ready(function(){
        $(".page1").fadeIn(2000);
        $(".BMI").fadeIn(1500, function(){
            $('.BMIinfo').slideDown(1000);
        });
        $(".BMR").fadeIn(1500, function(){
             $('.BMRinfo').slideDown(1000);
        });
        $(".results").slideDown(1000);            
        });
        });
    
    $scope.bmiCalculate = function(){
        var bmi = ($scope.weight/($scope.height * $scope.height))*10000;
        Data.bmiValue = bmi.toPrecision(4);
        
        if(Data.bmiValue < 18.5){
            resultNumber = 0;
        }
        if(Data.bmiValue >= 18.5 && Data.bmiValue < 25){
            resultNumber = 1;
        }
        if(Data.bmiValue >= 25 && Data.bmiValue < 30){
            resultNumber = 2;
        }
        if(Data.bmiValue >= 30 && Data.bmiValue < 40){
            resultNumber = 3;
        }
        if(Data.bmiValue >= 40){
             resultNumber = 4;
        }
        
        $http.get("details.php").then(function(response){
            Data.details = response.data.records[resultNumber];
        });
        $location.path('/BMIresult');   
    }
    
      $scope.bmrCalculate = function(){
        if($scope.genre == true){
            var bmr = (10 * $scope.weight) + (6.25 * $scope.height) - (5 * $scope.years) + 5;
        }
        else if($scope.genre == false){
            var bmr = (10 * $scope.weight) + (6.25 * $scope.height) - (5 * $scope.years) - 161;
        }
        Data.bmrValue = bmr.toPrecision(4);
        $location.path('/BMRresult');
    }
    
    
    
});