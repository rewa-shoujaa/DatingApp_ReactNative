<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserHobby extends Model
{
	protected $table = "user_hobbies";

	public function Hobby()
	{
		return $this->hasOne(User::class , 'user_id');
	}



}


?>