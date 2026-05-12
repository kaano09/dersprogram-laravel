<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLogin()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required'],
        ]);

        // Mevcut HTML'deki local storage mantığını aşmak için basit bir admin array i kullanıyoruz (veya db kullanabiliriz)
        // Ancak Laravel auth sistemi üzerinden gidilmesi önerilir.
        // DB kullanarak doğrulama
        
        // Form name alanını email'e mapliyoruz çünkü varsayılan user tablosunda email var ama username ekleyebiliriz
        // Basitlik için username => email olarak kabul edelim
        if (Auth::attempt(['email' => $credentials['username'] . '@example.com', 'password' => $credentials['password']])) {
            $request->session()->regenerate();
            return redirect()->intended('home');
        }

        // Ya da manuel localstorage'daki kullanıcılar yerine sistem sabit bir kullanıcı check edebilir.
        // if ($credentials['username'] === 'kaan' && $credentials['password'] === '1234') { 
        //    // dummy login
        // }

        return back()->withErrors([
            'username' => 'Girdiğiniz bilgiler hatalı.',
        ])->onlyInput('username');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
