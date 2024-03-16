<?php


use IMSGlobal\LTI\ToolProvider\DataConnector;

error_reporting(E_ALL);
require_once('module_tp.php');


  session_name(SESSION_NAME);
  session_start();
  $_SESSION = array();
  session_destroy();


  $db = NULL;

  $data_connector = DataConnector\DataConnector::getDataConnector();
  $tool = new ModuleToolProvider($data_connector);


  $tool->setParameterConstraint('oauth_consumer_key', TRUE, 50, array('basic-lti-launch-request', 'ContentItemSelectionRequest', 'DashboardRequest'));
  $tool->setParameterConstraint('resource_link_id', TRUE, 50, array('basic-lti-launch-request'));
  $tool->setParameterConstraint('user_id', TRUE, 50, array('basic-lti-launch-request'));
  $tool->setParameterConstraint('roles', TRUE, NULL, array('basic-lti-launch-request'));

  $tool->handleRequest();
?>

