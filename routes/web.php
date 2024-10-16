<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
    #Admin Routing

    #Faculty Routing
    Route::get('/faculty-home', function () {
        return Inertia::render('FacultyView/FacultyHome');
    })->name('faculty-home');


    #Student Routing
    Route::get('/StudentHome', function () {
        return Inertia::render('StudentView/StudentHome');
    })->name('StudentHome');



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::middleware('auth')->group(function(){
    Route::get('/', function(){
        return Inertia::render('/dashboard');
    });
});