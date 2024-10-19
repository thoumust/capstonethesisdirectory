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
    public function createIT(): Response
    {
        return Inertia::render('AdminView/AdminAddITCap');
    }
    public function createIS(): Response
    {
        return Inertia::render('AdminView/AdminAddISCap');
    }

    public function createCS(): Response
    {
        return Inertia::render('AdminView/AdminAddCSThes');
    }
    public function store(Request $request)
    {
        // Validate the request
        $validated = $request->validate([
            'ipRegistration' => 'required|string|max:255',
            'specialization' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'author1' => 'required|string|max:255',
            'author2' => 'nullable|string|max:255',
            'author3' => 'nullable|string|max:255',
            'author4' => 'nullable|string|max:255',
            'technicalAdviser' => 'required|string|max:255',
            'yearPublished' => 'required|integer',
            'fullDocument' => 'nullable|file',
            'acmPaper' => 'nullable|file',
            'sourceCode' => 'nullable|file',
            'approvalForm' => 'nullable|file',
            'keywords' => 'required|string|max:255',
            'course' => 'nullable|string',
        ]);

        // Store the capstone project
        $project = new Project();
        $project->fill($validated);

        // Handle file uploads
        if ($request->hasFile('fullDocument')) {
            $project->fullDocument = $request->file('fullDocument')->store('documents', 'public');
        }
        if ($request->hasFile('acmPaper')) {
            $project->acmPaper = $request->file('acmPaper')->store('documents', 'public');
        }
        if ($request->hasFile('sourceCode')) {
            $project->sourceCode = $request->file('sourceCode')->store('documents', 'public');
        }
        if ($request->hasFile('approvalForm')) {
            $project->approvalForm = $request->file('approvalForm')->store('documents', 'public');
        }

        // Save the capstone project
        $project->save();

        // Redirect back to the capstone list
        return redirect()->route('admin/ip-registered/IT-cap')->with('success', 'Capstone project added successfully!');
    }
    
    public function viewITCapstones()
    {
        // Fetch IT capstone projects from the database
        $itCapstoneProjects = Project::where('course', 'IT')->get();

        // Pass the data to the Inertia view
        return Inertia::render('AdminView/AdminViewITipr', [
            'itCapstoneProjects' => $itCapstoneProjects,
        ]);
    }

    public function viewCSThesis()
    {
        
        $csThesisPapers = Project::where('course', 'CS')->get();

        
        return Inertia::render('AdminView/AdminViewCSipr', [
            'csThesisPapers' => $csThesisPapers,
        ]);
    }


    public function viewISCapstones()
    {

        $isCapstoneProjects = Project::where('course', 'IS')->get();


        return Inertia::render('AdminView/AdminViewISipr', [
            'isCapstoneProjects' => $isCapstoneProjects,
        ]);
    }

    public function showFullDocument($id)
    {
        // Retrieve the project based on its ID
        $project = Project::findOrFail($id); // Find the project by ID, or return 404 if not found
        $fullDocument = $project->fullDocument; // Assuming this is the document field
    
        // Return the Inertia view with the document data
        return Inertia::render('AdminView/AdminFullDocu', [
            'fullDocument' => $fullDocument ?? 'No document available.', // Fallback if no document exists
        ]);
    }
    
    

}
