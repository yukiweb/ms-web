var mysupport = angular.module("mysupport");
mysupport.controller("logMngt", ["$scope", "$http", function ($scope, $http) {
    //获取当前时间：$filter('date')(new Date().getTime(),'yyyy-MM-dd')
    //初始化，右边区域的高度固定
    $scope.init = function () {
        $scope.draw();
    };
    $scope.draw = function () {
        var mainHeight = $(window).height() - $('[ui-view=header]').height() - $('[ui-view=footer]').height();
        $('[ui-view=right]').css('max-height', mainHeight - 15);
    };
    $http.get('mysupport/sds/findLoggerInfo', {
        params: {
            //  "appId": $stateParams.businessId
            "userId": null,
            "appId": "app_201804290535310195",//这个值应该是输入框的值
            "start": "2018-05-01 00:00:01",//这个值应该是输入框的值
            "end": "2018-05-10 23:59:59"//这个值应该是输入框的值
        }
    })
        .then(function (resp, status, headers, config) {
            if (resp && resp.data) {
                $scope.app = resp.data;
            }
        }, function (resp) {

        })
    $scope.isMoveUp = true;
    $scope.isMoveDown = !$scope.isMoveUp;
    $scope.isShowDetail = false;
    $scope.changeMoveClass = function () {
        $scope.isMoveUp = !$scope.isMoveUp;
        $scope.isMoveDown = !$scope.isMoveUp;
        $scope.isShowDetail = !$scope.isShowDetail;
        console.log($scope.isMoveUp);
        console.log($scope.isMoveDown);
    }
}
]);
mysupport.controller('dateStart', ["$scope", "$http", function ($scope, $http) {
    $scope.$on('select', function (e, newName) {
        var html = ''
        for (var i = 0; i < newName.length; i++) {
            if (i < 2) {
                html += newName[i] + "-";
            } else {
                html += newName[i];
            }
        }
        $scope.starts = html;
        if (newName.length == 3) {
            $scope.isShowStart = !$scope.isShowStart;
        }
    })
}]);
mysupport.controller('dateEnd', ["$scope", "$http", function ($scope, $http) {
    $scope.$on('select', function (e, newName) {
        var html = ''
        for (var i = 0; i < newName.length; i++) {
            if (i < 2) {
                html += newName[i] + "-";
            } else {
                html += newName[i];
            }
        }
        $scope.ends = html;
        if (newName.length == 3) {
            $scope.isShowEnd = !$scope.isShowEnd;
        }
    })
}]);
