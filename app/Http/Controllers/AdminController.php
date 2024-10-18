<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Show the admin dashboard.
     */
    public function index()
    {
        return view('admin.dashboard');
    }

    /**
     * Example function to manage users (admin-specific functionality).
     */
    public function manageUsers()
    {
        // Logic to manage users
        return view('admin.manage-users');
    }
}
