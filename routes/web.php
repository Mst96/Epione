<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Auth::routes();

// Authentication Routes...
//Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
//Route::post('login', 'Auth\LoginController@login');

//Route::get('login', 'CustomLoginController@index')->name('login')->middleware('login_check');
// Route::get('/login', function(){
//     return view('auth/login');
// });

//Route::post('logout', 'Auth\LoginController@logout')->name('logout');

Route::get('login/{provider}/{user_type?}', 'CustomAuth\LoginController@redirectToProvider')->name('login.social');
Route::get('login/{provider}/callback', 'CustomAuth\LoginController@handleProviderCallback');
Route::get('logout', 'CustomAuth\LoginController@logout')->name('logout');
Route::get('fitbit/login', 'CustomAuth\LoginController@handleRedirectToFitbit')->name('login.fitbit');
   


    

    



Route::group(['middleware' => ['verify.auth']], function () {
    Route::get('dashboard', 'DashboardController@index')->name('dashboard');
    Route::get('confirm_fitbit', 'CustomAuth\LoginController@handleFitbitToLogin')->name('confirm.fitbit'); 
    //Route::get('/-/dashboard', 'ClientDashboardController@refreshInfo');
    //Route::post('/get/sleep', 'ClientDashboardController@sleepInfo');

    // Route::group(['prefix' => 'client', 'middleware' => ['verify.fitbitToken']], function () {   
    //     Route::get('dashboard', 'ClientDashboardController@index')->name('dashboard.client');
    //     Route::post('update/profile', 'ClientDashboardController@updateInfo')->name('update.client');
    //     Route::post('sleep/get', 'ClientDashboardController@sleepInfo')->name('sleep.get.client');
    //     Route::get('/-/dashboard', 'ClientDashboardController@refreshInfo')->name('refresh.client');
    // });
    
});

Route::group(['prefix' => 'client'], function () {   
        Route::get('dashboard', 'ClientDashboardController@index')->name('dashboard.client');
        Route::post('update/profile', 'ClientDashboardController@updateInfo')->name('update.client');
        Route::post('sleep/get', 'ClientDashboardController@sleepInfo')->name('sleep.get.client');
        Route::get('/-/dashboard', 'ClientDashboardController@refreshInfo')->name('refresh.client');
    });

Route::group(['prefix' => 'carer'], function () {   
    Route::get('dashboard', 'CarerDashboardController@index')->name('dashboard.carer');
});

Route::get('test', function (){ return view('test');});

// Registration Routes...
// Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
// Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
// Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
// Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
//Route::post('password/reset', 'Auth\ResetPasswordController@reset');

// Route::get('/home', 'HomeController@index')->name('home');



Route::get('/ftest', 'FirebaseController@test');