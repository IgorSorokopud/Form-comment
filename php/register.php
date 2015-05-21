<?php

$response = array(
    'status' => '1',
    'errors'=> array(
        'email'=>'email already exists',
        'name'=>'street has incorrect value',
        'phone'=>'phone has incorrect value',
    ),
);

echo json_encode($response);