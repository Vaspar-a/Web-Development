<?php

$email = $_POST['email'];
$name = $_POST['name'];
$mobile_no = $_POST['telephone'];
$profession = $_POST['profession'];
$work_name = $_POST['workname'];

$con = mysqli_connect('127.0.0.1', 'root', '', 'asg_form') or die(mysqli_error($con));
$query = "INSERT INTO `nwt-signup` (email, name, mobileno, profession, workname) 
          VALUES('$email', '$name', '$mobile_no', '$profession', '$work_name')";
$insert_result = mysqli_query($con,$query) or die(mysqli_error($con));
echo "Inserted Successfully";

?>