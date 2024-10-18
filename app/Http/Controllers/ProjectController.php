<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;


class ProjectController extends Controller
{
    //
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'ipRegistration' => 'required|string|max:255',
            'specialization' => 'required|string|max:255',
            'capstoneTitle' => 'required|string|max:255',
            'author1' => 'required|string|max:255',
            'author2' => 'nullable|string|max:255',
            'author3' => 'nullable|string|max:255',
            'author4' => 'nullable|string|max:255',
            'technicalAdviser' => 'required|string|max:255',
            'yearPublished' => 'required|integer',
            'fullDocument' => 'required|file',
            'acmPaper' => 'nullable|file',
            'sourceCode' => 'nullable|file',
            'approvalForm' => 'nullable|file',
            'keywords' => 'required|string|max:255',
        ]);

        // Store the capstone project
        $capstone = new Project();
        $capstone->fill($validated);

        // Handle file uploads
        if ($request->hasFile('fullDocument')) {
            $capstone->fullDocument = $request->file('fullDocument')->store('documents');
        }
        if ($request->hasFile('acmPaper')) {
            $capstone->acmPaper = $request->file('acmPaper')->store('documents');
        }
        if ($request->hasFile('sourceCode')) {
            $capstone->sourceCode = $request->file('sourceCode')->store('documents');
        }
        if ($request->hasFile('approvalForm')) {
            $capstone->approvalForm = $request->file('approvalForm')->store('documents');
        }

        // Save the capstone project
        $capstone->save();

        // Redirect back to the capstone list
        return redirect()->route('admin.ipRegisteredITCap')->with('success', 'Capstone project added successfully!');
    }
    
}
