var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope){

  $scope.i = 0;

  $scope.addMenu = function (menu){

    var myEl = angular.element(document.querySelector("#"+menu) ).val();
    var mod = angular.element(document.querySelector("#"+myModal) ).modal('hide');

    if ($scope.i < 3) {
      $scope.i++;
      angular.element(col1).append("<div class='col-md-4'><div class='panel panel-warning'><div class='panel-heading'><h3 class='panel-title'>Menu " + $scope.i + "</h3></div><div class='panel-body'><div class='form-group'><label class='control-label' for='menu'>Menu Name :</label><input class='form-control input-sm' type='text' id='menu' value=" + myEl + "></div></div></div></div>");
      myEl = angular.element(document.querySelector("#"+menu) ).val('');
    } else {
      //
    }
  };

  $(function(){
    w3IncludeHTML();
  });
});
