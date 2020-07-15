<?php

use Illuminate\Support\Facades\Route;

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
    return view('layouts.app');
});

Route::get('login/instagram', 'AccessTokenController@redirectToInstagramProvider')->name('instagram.login');

Route::get('login/instagram/callback', 'AccessTokenController@instagramProviderCallback')->name('instagram.login.callback');

Route::get('/home', 'HomeController@index')->name('home');

Route::resource('accounts', 'AccountController');

Auth::routes(['register' => false]);
