<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;

use App\Models\User;
use JWTAuth;
use Auth;


class AuthController extends Controller{
	
	function login(Request $request){
		$data = $request->only("email", "password");

		try{
			if(!$token = JWTAuth::attempt($data)){
				throw "Invalid Credentials";
			}
		}catch(JWTException $e){
			return json_encode(["error" => "Error occured"]);
		}
		
		$user = Auth::user();
		$user->token = $token;
		return json_encode($user);
		
		
	}

}

?>