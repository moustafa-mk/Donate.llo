<?php
	require_once 'config.php';
    require_once 'connect.php';

    $db = connect(DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWD);
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $name = mysqli_real_escape_string($db, $_POST['name']);
    $expDate = mysqli_real_escape_string($db, $_POST['expiry_date']);
    $desc = mysqli_real_escape_string($db, $_POST['description']);
    $remaining_amount = $_POST['remaining_amount'];
    $required_amount = $_POST['required_amount']);
	$donateToID = 0;
	
	$insert = "INSERT INTO donate_to VALUES ('$email', '$donateToID++', '$required_amount', '$remaining_amount', '$expDate', '$name', '$desc')";

	$done = $db->query($insert);

	if($done){
		header("");
		exit;
	}else{
		echo "Error while adding new organization.";
	}