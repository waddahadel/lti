<?php

  use IMSGlobal\LTI\ToolProvider;
  use IMSGlobal\LTI\ToolProvider\DataConnector;

  require_once('lib.php');


  class ModuleToolProvider extends ToolProvider\ToolProvider {

    function __construct($data_connector) {

      parent::__construct($data_connector);

    }

    function getStatus(){
      $resource_link = $this->resourceLink;

      $lti_outcomeRead = new ToolProvider\Outcome();
      $resource_link->doOutcomesService(ToolProvider\ResourceLink::EXT_READ, $lti_outcomeRead, $this->user);

      $progress = $lti_outcomeRead->getValue();
      if(empty($progress)){
        echo 0;
      } else {
        echo $progress;
      }
    }

    function setStatus($value){
      $resource_link = $this->resourceLink;
      $lti_outcome = new ToolProvider\Outcome(strval($value));
      $resource_link->doOutcomesService(ToolProvider\ResourceLink::EXT_WRITE, $lti_outcome, $this->user);
    }

    function onLaunch() {
      $name = $this->user->fullname;
      session_name("Globus");
      session_start();

      $_SESSION['name'] = $name;
      $_SESSION['tp'] = $this;

      // Redirect to module
      $this->redirectUrl = 'https://www.meine-globus-lernwelt.de/Modules/VisionMarke/module/index.html';

      //local DEV redirect
      //$this->redirectUrl = './module/index.html';

    }

    function onError() {

    }

  }

?>
