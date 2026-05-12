<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PageController;

Route::middleware('guest')->group(function () {
    Route::get('/', [AuthController::class, 'showLogin'])->name('login');
    Route::post('/login', [AuthController::class, 'login'])->name('login.post');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    
    Route::get('/home', [PageController::class, 'home'])->name('home');
    Route::get('/teachers', [PageController::class, 'teachers'])->name('teachers');
    Route::get('/schedule', [PageController::class, 'schedule'])->name('schedule');
    Route::get('/ayarlar', [PageController::class, 'ayarlar'])->name('ayarlar');
    Route::get('/view-all', [PageController::class, 'viewAll'])->name('view-all');
});
