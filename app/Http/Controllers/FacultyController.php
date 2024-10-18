<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FacultyController extends Controller
{
    /**
     * Show the faculty dashboard.
     */
    public function index()
    {
        return view('faculty.dashboard');
    }

    /**
     * Example function to evaluate capstone projects (faculty-specific functionality).
     */
    public function evaluateProjects()
    {
        // Logic for evaluating capstone projects
        return view('faculty.evaluate-projects');
    }
}
