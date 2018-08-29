'use strict';
var mainAppModuleName = 'main';
var mainAppmodule = angular.module('mainAppModuleName',['hello']);
angular.element(document).ready(()=>{
    angular.bootstrap(document.querySelector('#mainApp'),['mainAppModuleName'],{
        strictDi:true
    });
});
 
mainAppmodule.controller('NameController',['$scope',($scope)=>{
    $scope.yourName = 'No name';
}]);
mainAppmodule.filter('sayhello',()=>{
    return(name)=>{
        return 'Hey : '+name
    }
})