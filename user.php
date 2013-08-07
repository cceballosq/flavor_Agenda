<?php

class user extends models
{
  public function getUserComputers($user_id = null){
		$where = "";
		if(!is_null($user_id)){
			$where .= " WHERE user_id = $user_id;";
		}
		$sql = "
			SELECT *
			FROM users ORDER BY user_id DESC 
		";
		return $this->findAllBySQL($sql);
	}

	public function borrar($user_id){
		$where = "";
		if(!is_null($user_id)){
			$where .= " WHERE user_id = $user_id;";
		}		
		$sql = "
			SELECT * 
			FROM users WHERE user_id='".$user_id."' 
		";
		return $this->findAllBySQL($sql);
	}
}

?>
