(function(){
    var myApp = angular.module('myApp',[]);
    
   
    
    var MainController = function($scope,$http){
        
         $scope.leave = function() {
         
       // }
        
        //$( "#user" ).focusout(function() {
        var url = 'https://graph.facebook.com/'+$scope.username;
        console.log(url);
        $scope.image = 'https://graph.facebook.com/'+$scope.username+'/picture?height=200&type=normal&width=200';
        console.log($scope.image);
        $http.get(url).
          success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(data);
            $scope.message = 'Mr. '+data.name;
            $scope.gender = data.gender;
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
  });
        
       /*
        $.getJSON(url, function(data,err) {
            //console.log(err);
             $scope.message = 'Hello '+data.name;
             console.log($scope.message);
             
          });
          */
         }  
    //});
        
    }
    
    myApp.controller('MainController',['$scope','$http', MainController]);
    //myApp.controller('MainController',MainController);
})();