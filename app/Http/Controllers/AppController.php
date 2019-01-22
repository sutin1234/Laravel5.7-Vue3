<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class AppController extends Controller
{
    public function get() {
        return view('laravel-vue');
      }
}
