<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;
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
    return view('welcome');
});

Route::get('/about', function () {
    return view('example');
});

Route::get('/add-employee',[EmployeesController::class,'create']);
Route::post('save-employee', [EmployeesController::class, 'store']);
Auth::routes();

Route::get('/home', [app\Http\Controllers\HomeController::class, 'index'])->name('home');
