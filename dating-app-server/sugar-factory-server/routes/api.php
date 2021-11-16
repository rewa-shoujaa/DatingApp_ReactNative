<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\AuthController;

/* |-------------------------------------------------------------------------- | API Routes |-------------------------------------------------------------------------- | | Here is where you can register API routes for your application. These | routes are loaded by the RouteServiceProvider within a group which | is assigned the "api" middleware group. Enjoy building your API! | */

Route::get('/highlighted', [UserController::class , 'highlighted'])->name('api:highlighted');
Route::post('/login', [AuthController::class , 'login'])->name('api:login');
Route::post('register', [UserController::class , 'register'])->name('api:register');

Route::group(['middleware' => 'auth.jwt'], function () {
	Route::get('/search/{keyword}', [UserController::class , 'search'])->name('api:search');
	Route::get('/test', [UserController::class , 'test'])->name('api:test');
	Route::post('/logout', [AuthController::class , 'logout'])->name('api:logout');
	Route::get('/interest', [UserController::class , 'interest'])->name('api:interest');
	Route::get('/favorite/{id}', [UserController::class , 'favorite'])->name('api:favorite');
	Route::post('/sendMessage/{id}', [UserController::class , 'sendMessage'])->name('api:sendMsg');
	Route::get('/getAppMessage', [UserController::class , 'getApprovedMessage'])->name('api:getAppMsg');
	Route::get('/getDetails', [UserController::class , 'getUserDetails'])->name('api:getUserDetails');
	Route::get('/profilePic', [UserController::class , 'getAppProfilePictures'])->name('api:profilePic');
	Route::get('/otherPic', [UserController::class , 'getAppOtherPictures'])->name('api:otherPic');
	Route::get('/block/{id}', [UserController::class, 'block'])->name('api:block');
	Route::get('/followers', [UserController::class , 'getfavorite'])->name('api:follwers');
	Route::get('/followedbyme', [UserController::class , 'ifavorite'])->name('api:followedbyme');
	//Route::get('/connections', [UserController::class, 'block'])->name('api:block');
	

	Route::get('/appMsg/{id}', [UserController::class, 'appMsg'])->name('api:appMsg');
   	Route::get('/rejectMsg/{id}', [UserController::class, 'rejectMsg'])->name('api:rejectMsg');
    	Route::get('/appPic/{id}', [UserController::class, 'appPic'])->name('api:appPic');
    	Route::get('/rejectPic/{id}', [UserController::class, 'rejectPic'])->name('api:rejectPic');
    	Route::get('/readMsg/{id}', [UserController::class, 'readMsg'])->name('api:readMsg');
	Route::get('/makeHighlighted/{id}', [UserController::class, 'makeHighlighted'])->name('api:makeHighlighted');
    	Route::get('/removeHighlighted/{id}', [UserController::class, 'removeHighlighted'])->name('api:removeHighlighted');
    	Route::post('/editInfo', [UserController::class, 'editInfo'])->name('api:editInfo');
	Route::get('/ifavorite', [UserController::class, 'ifavorite'])->name('api:ifavorite');
	Route::get('/getfavorite', [UserController::class, 'getfavorite'])->name('api:getfavorite');







});
