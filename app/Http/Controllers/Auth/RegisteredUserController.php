<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // Check if the email ends with ".cics@ust.edu.ph" or "@ust.edu.ph"
        if (str_ends_with($request->email, '.cics@ust.edu.ph')) {
            // For CICS students
            $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'studentNumber' => 'required|string|max:255',  
                'email' => 'required|string|email|max:255|ends_with:.cics@ust.edu.ph|unique:users',
                'user_course' => 'required|string|in:CS,IT,IS',  // Validation for course
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ]);
    
            $user_type = 'student';  // Assign user type as "student"
        } elseif (str_ends_with($request->email, '@ust.edu.ph')) {
            // For non-CICS faculty/staff
            $request->validate([
                'first_name' => 'required|string|max:255',
                'last_name' => 'required|string|max:255',
                'studentNumber' => 'prohibited',
                'email' => 'required|string|email|max:255|ends_with:@ust.edu.ph|unique:users',
                'user_course' => 'required|string|in:CS,IT,IS',  // Validation for course
                'password' => ['required', 'confirmed', Rules\Password::defaults()],
            ], [
                'studentNumber.prohibited' => 'Email entered is not a student of CICS',
            ]);
    
            $user_type = 'faculty';  // Assign user type as "faculty"
            $request->merge(['studentNumber' => null]);
        } else {
            return redirect()->back()->withErrors(['email' => 'Email must end with either .cics@ust.edu.ph or @ust.edu.ph']);
        }
    
        // Create the user
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'studentNumber' => $request->studentNumber,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'user_type' => $user_type,
            'user_course' => $request->user_course,  // Save the course
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
