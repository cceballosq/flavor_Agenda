<?php 
class ind_controller extends appcontroller{  
  function __construct(){
    parent::__construct();
  }    

  public function index($id=null){  //imprime la informacion
  $link = new user();  
  if ($id){    //si se modifica algo pone el que se va a modificar en el formulario
    $this->view->id=$link->find($id);  //encontrar el que se va a modificar
    $this->view->user_id="/".$link['user_id']; //
  }else{
    $this->view->user_id=" ";
    $this->view->id=" ";
  }
  $this->view->links = $link->findAll();
    $this->render();   

  }
 
  public function archivo($id=null){//guarda
  	$file = new user();
    if ($id) {
      $file->find($id);
    }
  	if ($this->data) {
  		$file->prepareFromArray($this->data);
  		$file->save();
  	}
  }

  public function delete($id=null){//eliminar
    $borrar = new user();
    $datos = $borrar->borrar($id);    
    echo json_encode($datos);  
    $borrar->find($id);
    $borrar->delete();      
  }
  public function getUserData($id=null){
      //echo json_encode(array(1,2,3));
      $usrObj = new user();
      $datos = $usrObj->getUserComputers($id);      
      echo json_encode($datos);
    }

public function modificar($id=null){//eliminar
  $borrar = new user();
  $datos = $borrar->borrar($id);    
  echo json_encode($datos);  
  $borrar->find($id);
  $this->view->mod = "hola";
 
  //$borrar->find($id); crear una variable para usarla dentro en javascript
  //$borrar->delete();
  }
}
 ?>
