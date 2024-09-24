<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    #All
// Route::get("/", function () {
//     return Inertia::render('StudentView/StudentLogin');
// });
    #Student Routing
Route::get("/StudentRegister", function(){
    return Inertia::render('StudentView/StudentRegister');
})->name('student-register');

// Route::get("/StudentLogin", function(){
//     return Inertia::render('StudentView/StudentLogin');
// });

Route::get("/student-home", function(){
    return Inertia::render('StudentView/StudentHome');
})->name('student-home');



#Faculty Routing


#Admin Routing




// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

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
        return Inertia::render('StudentView/StudentLogin');
    });
});