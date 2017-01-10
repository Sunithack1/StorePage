var app = angular.module('storeApp', []);
app.controller('storeController', function($scope, $http){
    $http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').success(function(response){
        $scope.storeData = response;
    });
    
    $scope.sortingOptions = {
    	Name: "name",
    	Price: "msrpInCents",
    	Date: "createdAt"
    };

    $scope.priceOptions = [
    {

    	name: "less than $20",
    	value: 2000
    },
    {
    		name: "less than $40",
    		value: 4000

    }
    ];
   
    $scope.selectedOption = $scope.priceOptions[1].value; 

});

