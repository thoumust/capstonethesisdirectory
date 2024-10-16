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

    Route::get('/faculty/profile', function () {
        return Inertia::render('FacultyView/FacultyProfile');
    })->name('faculty-profile');


    Route::get('/faculty/BestIT', function () {
        return Inertia::render('FacultyView/FacultyBestIT');
    })->name('/faculty/BestIT');
    Route::get('/faculty/BestIS', function () {
        return Inertia::render('FacultyView/FacultyBestIS');
    })->name('/faculty/BestIS');
    Route::get('/faculty/BestCS', function () {
        return Inertia::render('FacultyView/FacultyBestCS');
    })->name('/faculty/BestCS');


    Route::get('/faculty/ip-registered/IT-cap', function () {
        return Inertia::render('FacultyView/FacultyViewITipr');
    })->name('faculty/ip-registered/IT-cap');
    Route::get('/faculty/ip-registered/IS-cap', function () {
        return Inertia::render('FacultyView/FacultyViewISipr');
    })->name('faculty/ip-registered/IS-cap');
    Route::get('/faculty/ip-registered/CS-thes', function () {
        return Inertia::render('FacultyView/FacultyViewCSipr');
    })->name('faculty/ip-registered/CS-thes');

    Route::get('/faculty/approval-form', function () {
        return Inertia::render('FacultyView/FacultyApprovalForm');
    })->name('faculty/approval-form');














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