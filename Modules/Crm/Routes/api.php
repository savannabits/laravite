<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

use Illuminate\Support\Facades\Route;

Route::prefix('api/crm')
    ->name('api.crm.')
    ->middleware(['auth:sanctum'])
    ->group(function() {
        Route::get('/', 'CrmController@index')->name('index');
        Route::apiResource('customers',"Api\CustomerController");
    });
