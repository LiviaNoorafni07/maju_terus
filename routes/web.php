<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;
use app\Http\Controllers\ItemController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::get('/login-prosses', [LoginController::class, 'index'])->name('login-prosses');


Route::get('/', function () {
    return view ('/_content/dashboard/dashboard');
});

Route::get('/dashboard', [DashboardController::class, 'index']);
Route::get('/news', [DashboardController::class, 'news']);

// Route::resource('items', ItemController::class)->except(['show', 'edit', 'update', 'destroy']);
Route::resource('/products', \App\Http\Controllers\ProductController::class);