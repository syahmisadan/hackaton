var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope,$http,$location){

  $scope.i = 0;

  $scope.addMenu = function (menu){

    var myEl = angular.element(document.querySelector("#"+menu) ).val();
    if ($scope.i < 3 && myEl !== '') {
      $scope.i++;
      angular.element(col1).append("<div class='col-md-4'><div class='panel panel-warning'><div class='panel-heading'><h3 class='panel-title'>Menu " + $scope.i + "</h3></div><div class='panel-body'><div class='form-group'><label class='control-label' for='menu'>Menu Name :</label><input class='form-control input-sm' type='text' name ='menu"+ $scope.i +"' id='menu"+ $scope.i + "' value=" + myEl + "></div></div></div></div>");
      swal('Menu Added','Menu : ' + myEl + '','success');
      myEl = angular.element(document.querySelector("#"+menu) ).val('');
    } else {
      swal('Whoops mama!','Please insert menu first or menu more that 3','error');
    }
  };

  $(function(){
    w3IncludeHTML();
  });


  $scope.ajaxAdd = function(){

    var nilai = $scope.i;
    var menu = "menu";
    var menu1 = '';
    var menu2 = '';
    var menu3 = '';
    var menu1val = '';
    var menu2val = '';
    var menu3val = '';

    // Loop dapatkan id / name

    for (var i = 1; i <= nilai; i++) {
      switch (i) {
        case 1:
        menu1 = menu.concat(i);
        menu1val = angular.element(document.querySelector("#"+menu1) ).val();
          break;
        case 2:
        menu2 = menu.concat(i);
        menu2val = angular.element(document.querySelector("#"+menu2) ).val();
          break;
        case 3:
        menu3 = menu.concat(i);
        menu3val = angular.element(document.querySelector("#"+menu3) ).val();
          break;
        default:
      }
    }

    $http({
      method : "POST",
      url : './addMenu.php',
      data: {
        menu1 : menu1val,
        menu2 : menu2val,
        menu3 : menu3val
      },
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'}
    }).success(function(response){
      if(response=="Error"){
        console.log(response);
        swal({
          title: "Error Mamas!",
          text: "There is something wrong!",
          type: "error",
          confirmButtonText: "Ok"
        });
      }else{
        swal("Success!", "Menu has been inserted", "success");
        window.location.href = "./index.html";
      }
    });
  };


});
