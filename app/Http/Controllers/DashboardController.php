<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class DashboardController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $client = new Client(); //GuzzleHttp\Client
        $result = $client->get('https://www.epione.oobazee.com/profile-test.json', [
            'form_params' => [
                'sample-form-data' => 'value'
            ]
        ]);
        //return response()->json('success');
        
        // $obj = $result->getBody();

        // $obj = json_decode($result->getBody(), true);
        
        $obj = json_decode($result->getBody());

        return view('dashboard')->with('data_p', $obj);
    }
}