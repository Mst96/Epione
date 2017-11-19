<?php

namespace App\Http\Controllers\CustomAuth;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;
use App\Http\Controllers\Controller;

class FirebaseController extends Controller
{
    protected $serviceAccount;
    protected $firebase;
    protected $database;

    public function __construct()
    {
        $this->serviceAccount = ServiceAccount::fromJsonFile('../epione-6b357-firebase-adminsdk-yttnz-7acd790a9d.json');

        $this->firebase = (new Factory)
            ->withServiceAccount($this->serviceAccount)
            ->create();

        $this->database = $this->firebase->getDatabase();
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
    
    public function set($value='')
    {
        # code...
    }
}
