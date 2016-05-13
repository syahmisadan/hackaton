<?php
include('./connect.php');


$data = json_decode( file_get_contents('php://input') );
$menu1 = $data->menu1;
$menu2 = $data->menu2;
$menu3 = $data->menu3;

// tukar kepada session
$key = 123;
$count = 0;

if ($menu1 != '') {
  $sqlm = "INSERT INTO Lauk (`lauk_key`,`lauk_lauk`,`lauk_undi`) VALUES ('$key' , '$menu1' , 0)";
  $resultm=mysqli_query($link,$sqlm);
  $count++;
}

if ($menu2 != '') {
  $sqln = "INSERT INTO Lauk (`lauk_key`,`lauk_lauk`,`lauk_undi`) VALUES ('$key' , '$menu2' , 0)";
  $resultn=mysqli_query($link,$sqln);
  $count++;
}

if ($menu3 != '') {
  $sqlo = "INSERT INTO Lauk (`lauk_key`,`lauk_lauk`,`lauk_undi`) VALUES ('$key' , '$menu3' , 0)";
  $resulto=mysqli_query($link,$sqlo);
  $count++;
}

if ($count !== 0){
  // Insert success
  echo $count;
} else {
  // Error
  echo "Error";
}

 ?>
