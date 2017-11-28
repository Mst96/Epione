<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use Socialite;
use Illuminate\Support\Facades\Cookie;

class FirebaseController extends Controller
{
    protected $serviceAccount;
    protected $firebase;
    protected $database;
    protected $user;
    protected $userType;

    public function __construct()
    {
        $this->serviceAccount = ServiceAccount::fromJsonFile('../.epione-6b357-firebase-adminsdk-yttnz-7acd790a9d.json');

        $this->firebase = (new Factory)
            ->withServiceAccount($this->serviceAccount)
            ->create();

        $this->database = $this->firebase->getDatabase();

        
        $provider = Cookie::get('provider');//$request->session()->get('provider');
        

        //$_p = Request::cookie('provider');
        $this->user = json_decode(Cookie::get('providerInfo'), true);//Socialite::driver('google')->stateless()->user();
        $this->userType = Cookie::get('userType');
    }

    public function index()
    {
        $reference = $this->database->getReference('');
        $value = $reference->getValue();

        var_dump($this->serviceAccount);
        var_dump($this->firebase);
        var_dump($this->database);
        var_dump($reference);
        var_dump($value);

        // $this->database->getReference('Carers/1/lastName')->set('Brodious');       
        
        $this->database->getReference('Carers/8')
            ->set([
                    'firstName' => 'Michael',
                    'lastName' => 'Bolton',
                ]);

// $db->getReference('config/website/name')->set('New name');

        return response()->json($value);        
    }
    
    public function set($key, $value)
    {
        $this->database->getReference($this->userType.'/'.$this->user['id'].'/'.$key)
            ->set($value);
    }

    public function get($key)
    {
        $reference = $this->database->getReference($this->userType.'/'.$this->user['id'].'/'.$key);
        $value = $reference->getValue();

        return $value;
    }

    public function test()
    {
        $this->set("fitbit_token", "sfsdf23efd");

        $tok = $this->get("fitbit_token");
        return response()->json(compact('tok'));
    }
}