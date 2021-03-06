<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth:sanctum', 'verified'])->name('dashboard');
Route::group(['prefix' => 'profile','middleware' => ['auth:sanctum','verified'],'as' =>'profile.'],function () {
    Route::get('show',[\App\Http\Controllers\ProfileController::class,'show'])->name('show');
});
/* BACKEND */
Route::group(['prefix' => config('app.backend.prefix','backend'),'middleware' => ['auth:sanctum','verified'],'as' =>'backend.'],function () {
    Route::get('',function () {
        return Inertia::render('Backend/Index');
    })->name('index');
});

/*AUTH*/
require __DIR__.'/auth.php';
