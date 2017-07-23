//Hello There friend, I need your help. Please write out the functionallity to get, write, update, and delete data. I know some of the routes have been written out. 
//Deleting and Updating should be by ID and after, I should be showing the get page. mainCtrl should also be empty. 
//To give you a hint, you have to make HTTP calls and I believe Angular has a module for that...I don't remember. 
//Please do not adjust the names of the controllers and the angular module. 


angular.module("examApp.controllers", ["$http"])
    .controller("mainCtrl", function($scope){})

    .controller("getCtrl", function(){

    })
    .controller("postCtrl", function($scope, $http){
    
        $scope.submitForm = function(data){


        
        var $scope.data = {

            name: data.name,
            age: data.age,
            job: data.job
        }

        $http.post('/posting', $scope.data)

        .then(function(data){

            console.log(data)
        })


        
        

    })
    .controller("updateCtrl", function($scope){

          $http.put('/update', $scope.data)

        .then(function(data){

            console.log(data)
        })

    })