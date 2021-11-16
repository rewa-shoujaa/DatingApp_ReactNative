<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserInterest extends Model
{
	protected $table = "user_interests";

	public function Interest()
	{
		return $this->hasOne(User::class , 'user_id');
	}




}


?>