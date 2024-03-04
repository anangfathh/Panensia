<?php

use App\Http\Controllers\HeadController;
use App\Http\Controllers\kontakController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;

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
Route::get('/filemanager', function () { return view('index/page/tentang');});

Route::get('/admin', function () {
    return view('dashboard');
})->where('any', '.*');

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');


