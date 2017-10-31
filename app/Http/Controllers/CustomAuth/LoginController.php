<?php

namespace App\Http\Controllers\CustomAuth;

use Illuminate\Http\Request;
use djchen\OAuth2\Client\Provider\Fitbit;
use Socialite;
use App\Http\Controllers\Controller;

class LoginController extends Controller
{
    /* Handle Login Request from different user groups */
    public function index(Request $request)
    {       
        /* Handle request from a client/patient */
        if ($request->user == 'client'){

            

            

        }/* Handle request from a GP or Carer*/
        else if ($request->user == 'gp'){

        }/* Handle request from a carer */
        else if ($request->user == 'carer'){

        }        
        

    }


    /**
     * Redirect the user to the social authentication page.
     *
     * @return Response
     */
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from social.
     *
     * @return Response
     */
    public function handleProviderCallback($provider)
    {
        // $user = Socialite::driver($provider)->user();
        $user = Socialite::driver($provider)->stateless()->user();
        // $user->token;
    }

    /**
    * Obtain user data from Fitbit
    *
    * @return Response
    */
    public function handleRedirectToFitbit()
    {
        
        $provider = new Fitbit([
            'clientId'          => '22CK9X',
            'clientSecret'      => '50f843929b2b4b6142c2d3007a0e7cd2',
            'redirectUri'       => 'https://www.epione.oobazee.com/dashboard.html'
        ]);

        // start the session
        session_start();

        // If we don't have an authorization code then get one
        if (!isset($_GET['code'])) {

            // Fetch the authorization URL from the provider; this returns the
            // urlAuthorize option and generates and applies any necessary parameters
            // (e.g. state).
            $authorizationUrl = $provider->getAuthorizationUrl();

            // Get the state generated for you and store it to the session.
            $_SESSION['oauth2state'] = $provider->getState();

            // Redirect the user to the authorization URL.
            header('Location: ' . $authorizationUrl);
            exit;

        // Check given state against previously stored one to mitigate CSRF attack
        } elseif (empty($_GET['state']) || ($_GET['state'] !== $_SESSION['oauth2state'])) {
            unset($_SESSION['oauth2state']);
            exit('Invalid state');

        } else {

            try {

                // Try to get an access token using the authorization code grant.
                $accessToken = $provider->getAccessToken('authorization_code', [
                    'code' => $_GET['code']
                ]);

                // We have an access token, which we may use in authenticated
                // requests against the service provider's API.
                echo $accessToken->getToken() . "\n";
                echo $accessToken->getRefreshToken() . "\n";
                echo $accessToken->getExpires() . "\n";
                echo ($accessToken->hasExpired() ? 'expired' : 'not expired') . "\n";

                // Using the access token, we may look up details about the
                // resource owner.
                $resourceOwner = $provider->getResourceOwner($accessToken);

                var_export($resourceOwner->toArray());

                // The provider provides a way to get an authenticated API request for
                // the service, using the access token; it returns an object conforming
                // to Psr\Http\Message\RequestInterface.
                $request = $provider->getAuthenticatedRequest(
                    Fitbit::METHOD_GET,
                    Fitbit::BASE_FITBIT_API_URL . '/1/user/-/profile.json',
                    $accessToken,
                    ['headers' => [Fitbit::HEADER_ACCEPT_LANG => 'en_US'], [Fitbit::HEADER_ACCEPT_LOCALE => 'en_US']]
                    // Fitbit uses the Accept-Language for setting the unit system used
                    // and setting Accept-Locale will return a translated response if available.
                    // https://dev.fitbit.com/docs/basics/#localization
                );
                // Make the authenticated API request and get the parsed response.
                $response = $provider->getParsedResponse($request);

                // If you would like to get the response headers in addition to the response body, use:
                //$response = $provider->getResponse($request);
                //$headers = $response->getHeaders();
                //$parsedResponse = $provider->parseResponse($response);

            } catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) {

                // Failed to get the access token or user details.
                exit($e->getMessage());

            }
        }

    }

}
