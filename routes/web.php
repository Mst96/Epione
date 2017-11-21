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
    return view('index');
});
Route::get('/dashboard', function () {
    return view('index');
});
Route::get('/login', function () {
    return view('index');
});
Route::get('/patients', function () {
    return view('index');
});
Route::get('/heartrate', function () {
    return view('index');
});

Route::get('/addSymptoms', function () {
    return view('index');
});

Route::get('/profile', function () {
    return view('index');
});

Route::get('/diary', function () {
    return view('index');
});

Route::get('/settings', function () {
    return view('index');
});

Route::get('/addsymptom', function () {
    return view('index');
});