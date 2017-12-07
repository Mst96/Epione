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
Route::get('/login', function () {
    return view('index');
});
Route::get('/{user}/dashboard', function () {
    	return view('index');
		});
Route::get('/patients', function () {
    	return view('index');
		});
Route::get('/{user}/heartrate', function () {
		  return view('index');
		});

		Route::get('/{user}/addSymptoms', function () {
		    return view('index');
		});

		Route::get('/{user}/profile', function () {
		    return view('index');
		});

		Route::get('/{user}/diary', function () {
		    return view('index');
		});

		Route::get('/{user}/settings', function () {
		    return view('index');
		});

		Route::get('/{user}/addsymptom', function () {
		    return view('index');
		});

		Route::get('/{user}/bloodpressure', function () {
		    return view('index');
		});

		Route::get('/{user}/calories', function () {
		    return view('index');
		});

		Route::get('/{user}/goals', function () {
		    return view('index');
		});

		Route::get('/{user}/sleep', function () {
		    return view('index');
		});

		Route::get('/{user}/distance', function () {
		    return view('index');
		});

		Route::get('/{user}/water', function () {
		    return view('index');
		});

		Route::get('/{user}/floors', function () {
		    return view('index');
		});
		Route::get('/{user}/vitals', function () {
		    return view('index');
		});
		Route::get('/{user}/body', function () {
		    return view('index');
		});
		Route::get('{user}/notes', function () {
		    return view('index');
		});
		Route::get('/{user}/activity', function () {
		    return view('index');
		});
		Route::get('/{user}/activityPage', function () {
		    return view('index');
		});
		Route::get('/{user}/epionegraph', function () {
		    return view('index');
		});
		Route::get('/{user}/welcome', function () {
		    return view('index');
		});



Route::group(['middleware' => ['verify.auth']], function () {
    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
  //   Route::get('/patients', function () {
  //   	return view('index');
		// });
		// Route::get('/heartrate', function () {
		//   return view('index');
		// });

		// Route::get('/addSymptoms', function () {
		//     return view('index');
		// });

		// Route::get('/profile', function () {
		//     return view('index');
		// });

		// Route::get('/diary', function () {
		//     return view('index');
		// });

		// Route::get('/settings', function () {
		//     return view('index');
		// });

		// Route::get('/addsymptom', function () {
		//     return view('index');
		// });
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
        Route::get('/dashboard', 'ClientDashboardController@index')->name('dashboard.client');
        Route::post('/update/profile', 'ClientDashboardController@updateInfo')->name('update.client');
        Route::post('/sleep/get', 'ClientDashboardController@sleepInfo')->name('sleep.get.client');
        Route::get('/-/dashboard', 'ClientDashboardController@refreshInfo')->name('refresh.client');
    });

Route::group(['prefix' => 'carer'], function () {   
    Route::get('dashboard', 'CarerDashboardController@index')->name('dashboard.carer');
  //   Route::get('/patients', function () {
  //   	return view('index');
		// });
		// Route::get('/heartrate', function () {
		//     return view('index');
		// });

		// Route::get('/addSymptoms', function () {
		//     return view('index');
		// });

		// Route::get('/profile', function () {
		//     return view('index');
		// });

		// Route::get('/diary', function () {
		//     return view('index');
		// });

		// Route::get('/settings', function () {
		//     return view('index');
		// });

		// Route::get('/addsymptom', function () {
		//     return view('index');
		// });
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

