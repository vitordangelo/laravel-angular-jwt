var bookWishlistAppControllers = angular.module('bookWishlistAppControllers', [
    'bookWishlistAppServices'
]);

bookWishlistAppControllers.controller('LoginController', ['$scope', '$http', function ($scope, $http) {

}]);

bookWishlistAppControllers.controller('SignupController', ['$scope', '$location', 'userService', function ($scope, $location, userService) {

    $scope.signup = function() {
        userService.signup(
            $scope.name, $scope.email, $scope.password,
            function(response){
                alert('Great! You are now signed in! Welcome, ' + $scope.name + '!');
                $location.path('/');
            },
            function(response){
                alert('Something went wrong with the signup process. Try again later.');
            }
        );
    }

    $scope.name = '';
    $scope.email = '';
    $scope.password = '';

    if(userService.checkIfLoggedIn())
        $location.path('/');

}]);

bookWishlistAppControllers.controller('MainController', ['$scope', '$http', function ($scope, $http) {

}]);
