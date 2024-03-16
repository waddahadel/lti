<?php

use IMSGlobal\LTI\ToolProvider;
use IMSGlobal\LTI\ToolProvider\DataConnector;

require_once('module_tp.php');


session_name("Globus");
session_start();
$tp = $_SESSION['tp'];



if(isset($_GET['action']))
{
    if($_GET['action'] == 'getName'){
        $name = $_SESSION['name'];
        echo $name;
    } else if($_GET['action'] == 'getStatus'){
        $tp->getStatus();
    }  else if($_GET['action'] == 'setStatus' && isset($_GET['status'])){
        $tp->setStatus($_GET['status']);
    } else if($_GET['action'] == 'checkLogin'){
        if(isset($_SESSION['tp'])){
            http_response_code(200);
        } else {
            http_response_code(401);
        }

    }
}
