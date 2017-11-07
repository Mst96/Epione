<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Session;
use Socialite;

class FitbitController extends Controller
{

    public function getActivities($date = null)
    {
        // if ($_SESSION['oauth2state']) {
        //     $request = $_SESSION['provider']->getAuthenticatedRequest(
        //             Fitbit::METHOD_GET,
        //             Fitbit::BASE_FITBIT_API_URL . '/1/user/-/activities/heart/date/2017-11-02/7d.json',
        //             $_SESSION['token'],
        //             ['headers' => [Fitbit::HEADER_ACCEPT_LANG => 'en_US'], [Fitbit::HEADER_ACCEPT_LOCALE => 'en_US']]
        //             // Fitbit uses the Accept-Language for setting the unit system used
        //             // and setting Accept-Locale will return a translated response if available.
        //             // https://dev.fitbit.com/docs/basics/#localization
        //         );
        //         // Make the authenticated API request and get the parsed response.
        //         return $provider->getParsedResponse($request);
        // } else {
        //     return 'Invalid request. Date parameter missing.';
        // }
        session_start();
        return response()->json('token', $_SESSION['token']);
    }
}