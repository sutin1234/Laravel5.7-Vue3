<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/laravel-vue', 'AppController@get');
