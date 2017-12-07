<?php

namespace App\Http\Controllers;
use Log;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use sngrl\PhpFirebaseCloudMessaging\Client;
use sngrl\PhpFirebaseCloudMessaging\Message;
use sngrl\PhpFirebaseCloudMessaging\Recipient\Device;
use sngrl\PhpFirebaseCloudMessaging\Notification;

class FirebaseMessagingController extends Controller
{
    protected $server_key = 'AAAAUpNS4v8:APA91bEVnQAo_4WelahQSm8vIMdZ70MnKvami7m-9wHRmSn3gFeC_4DNZ-5nQpoPhf-kJTypU5NW5FLFdgBNy2vxbw_S2byt87_GcM-IpA88n1L2Icl5tSI2-X-urWl9noeuUQGmY1wa';
    protected $client;

    public function __construct(){
        $this->client = new Client();
    }

    public function send(Request $request){
        $this->client->setApiKey($this->server_key);
        $this->client->injectGuzzleHttpClient(new \GuzzleHttp\Client());
        $message = new Message();
        $message->setPriority('high');
        $message->addRecipient(new Device('c30J4EPDW2k:APA91bH7en3Xs4WXyKrngEei2Lnk-EjghRXwaGLYA-lq5d3siAQbykLulwQ6TZvhR1OF9IB-fs2rjuTJWfDNrG-Q1fcGU5hfPZN60b1rHutprWAO7B-79webdWGwMrHgHD1JcM58sxag'));
        $message->setNotification(new Notification(request('message'), 'Check in on Client'))
                ->setData(['mobile' => '12345678910']);

        $response = $this->client->send($message);
        var_dump($response->getStatusCode());
        var_dump($response->getBody()->getContents());
    }
}
