<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function teachers()
    {
        return view('teachers');
    }

    public function schedule()
    {
        return view('schedule');
    }

    public function ayarlar()
    {
        return view('ayarlar');
    }

    public function viewAll()
    {
        return view('view-all');
    }
}
