var mysupport = angular.module("mysupport");
mysupport.controller("logMngt", ["$scope", "$http", function($scope, $http) {
        //获取当前时间：$filter('date')(new Date().getTime(),'yyyy-MM-dd')
        //初始化，右边区域的高度固定
        $scope.init=function(){
            $scope.draw();
        };
        $scope.draw = function() {
            var mainHeight = $(window).height() - $('[ui-view=header]').height() - $('[ui-view=footer]').height();
            $('[ui-view=right]').css('max-height', mainHeight - 15);
        };
    $scope.$on('select',function(e,newName){
        // console.log(newName)
        var html = ''
        // for(item in newName){
        //    html+=newName[item]+"-";
        // }
        for(var i = 0;i<newName.length;i++){
            if(i<2){
                html+=newName[i]+"-";
            }else{
                html+=newName[i];
            }
        }
        $('.myStartDate').val(html);
    })
    }
]);
mysupport.controller('dateStart',["$scope","$http",function ($scope,$http) {
    $scope.$on('select',function(e,newName){
        // console.log(newName)
        var html = ''
        // for(item in newName){
        //    html+=newName[item]+"-";
        // }
        for(var i = 0;i<newName.length;i++){
            if(i<2){
                html+=newName[i]+"-";
            }else{
                html+=newName[i];
            }
        }
        $('.myStartDate').val(html);
    })
}]);
mysupport.controller('dateEnd',["$scope","$http",function ($scope,$http) {
    $scope.$on('select',function(e,newName){
        // console.log(newName)
        var html = ''
        // for(item in newName){
        //    html+=newName[item]+"-";
        // }
        for(var i = 0;i<newName.length;i++){
            if(i<2){
                html+=newName[i]+"-";
            }else{
                html+=newName[i];
            }
        }
        $('.myEndDate').val(html);
    })
}]);
//日历时间
mysupport.directive('datepicker', function(){
    return {
        restrict: 'EAC',
        controller: 'DatePickerCtl',
        templateUrl: 'datepicker/datepicker.html',
        scope: {
            'value': '='
        },
        link: function(scope){
            scope.$watch('value', function(oldVal, newVal){
                console.log('value = ' + $scope.value);
            });
        },
        controller:function(){


        }
    };
});
