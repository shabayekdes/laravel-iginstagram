<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class AccessTokenController extends Controller
{
    /**
     * Instagram app id
     *
     * @var string
     */
    protected $appId;

    /**
     * Instagram app secret
     *
     * @var string
     */
    protected $secret;

    /**
     * Instagram redirect uri
     *
     * @var string
     */
    protected $redirectUri;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');

        $this->appId = config('services.instagram.client_id');
        $this->secret = config('services.instagram.client_secret');
        $this->redirectUri = config('services.instagram.redirect');
    }

    /**
     * Redirect To Instagram Provider
     *
     *
     */
    public function redirectToInstagramProvider()
    {
        $redirectUri = urlencode($this->redirectUri);

        return redirect()->to("https://api.instagram.com/oauth/authorize?app_id={$this->appId}&redirect_uri={$redirectUri}&scope=user_profile,user_media&response_type=code");
    }

    /**
     * Instagram Provider Callback
     *
     * @param Request $request
     * @return void
     */
    public function instagramProviderCallback(Request $request)
    {
        $code = $request->code;
        if (empty($code)) return redirect()->route('home')->with('error', 'Failed to login with Instagram.');


        $client = new Client();

        // Get access token
        $response = $client->request('POST', 'https://api.instagram.com/oauth/access_token', [
            'form_params' => [
                'app_id' => $this->appId,
                'app_secret' => $this->secret,
                'grant_type' => 'authorization_code',
                'redirect_uri' => $this->redirectUri,
                'code' => $code,
            ]
        ]);

        if ($response->getStatusCode() != 200) {
            return redirect()->route('home')->with('error', 'Unauthorized login to Instagram.');
        }

        $content = $response->getBody()->getContents();
        $content = json_decode($content);

        $accessToken = $content->access_token;
        $userId = $content->user_id;

        // Get user info
        $response = $client->request('GET', "https://graph.instagram.com/me?fields=id,username,account_type&access_token={$accessToken}");

        $content = $response->getBody()->getContents();
        $oAuth = json_decode($content);

        // Get instagram user name
        $username = $oAuth->username;

        $user = auth()->user();
        $user->token()->create([
            'username' => $username,
            'access_token' => $accessToken,
            'instagram_user_id' => $userId
        ]);

        return redirect()->route('home');
    }
}
