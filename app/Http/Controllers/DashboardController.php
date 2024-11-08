<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(){
        return view('_content/dashboard/dashboard');
    }

    public function news(){
        return view('_content/news/news');
    }
}