var httpRequests = angular.module("httpReq", []);
httpRequests.controller("httpCall", ['$scope', '$http', function ($scope, $http) {
    $scope.getData = function () {
        if ($scope.getNo != "") {
            url = "http://numbersapi.com/" + $scope.getNo;
            $http.get(url).then(function (res) {
                $scope.response = res.data;
            }).catch(function (err) {
                $scope.response = err.data;
            })
        }
    }
}])