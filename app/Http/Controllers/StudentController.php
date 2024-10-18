<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Show the student dashboard.
     */
    public function index()
    {
        return view('student.dashboard');
    }

    /**
     * Example function to allow students to submit their projects (student-specific functionality).
     */
    public function submitProject()
    {
        // Logic for students to submit their capstone projects
        return view('student.submit-project');
    }
}
