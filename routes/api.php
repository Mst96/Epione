<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => ['web']], function () {
	Route::get('login/{provider}/{user_type?}', 'CustomAuth\LoginController@redirectToProvider')->name('login.social');
		Route::get('login/{provider}/callback', 'CustomAuth\LoginController@handleProviderCallback');
		Route::get('logout', 'CustomAuth\LoginController@logout')->name('logout');
		Route::get('fitbit/login', 'CustomAuth\LoginController@handleRedirectToFitbit')->name('login.fitbit');
		Route::get('activities/fitbit/{date?}', 'FitbitController@getActivities')->name('get.activities');
		Route::get('/login', function(){
  		return view('auth/login');
		});

	Route::post('logout', 'Auth\LoginController@logout')->name('logout');



	// Registration Routes...
	Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
	Route::post('register', 'Auth\RegisterController@register');

	// Password Reset Routes...
	Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
	Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
	Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
	Route::post('password/reset', 'Auth\ResetPasswordController@reset');
	Route::get('/users', function (Request $request){
    return $request->user();
});
});



// Route::middleware('auth:api')->group(function (){
//     Route::group(['middleware' => 'cors', 'prefix' => '/v1'], function () {
  
// });
// Route::get('/users', function (Request $request){
//     return $request->user();
// });

// });