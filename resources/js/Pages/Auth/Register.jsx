import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState, useEffect } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name:'',
        studentNumber:'',
        email: '',
        password: '',
        password_confirmation: '',
        user_course:'',
    });



    const [email, setEmail] = useState(data.email);
    const [isCICS, setIsCICS] = useState(false);

    useEffect(() => {
        if (email.includes('@')) {
            const atIndex = email.indexOf('@');
            const domain = email.substring(atIndex); // Get everything after '@'
            const subDomain = email.substring(atIndex - 5, atIndex); // Get the five characters before '@'

            if (subDomain === '.cics' && domain === '@ust.edu.ph') {
                setIsCICS(true);
            } else if (domain === '@ust.edu.ph') {
                setIsCICS(false);
                setData('studentNumber', ''); // Clear the studentNumber
            } else {
                setIsCICS(false); // Default to false if domain is neither
            }
        }
    }, [email, setData]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);  // Update local state immediately
    };

    const handleBlur = () => {
        setData('email', email);  // Update global state on blur
    };
    

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                {/* New Forms */}
                <div>
                    <InputLabel htmlFor="first_name" value="First Name" />

                    <TextInput
                        id="first_name"
                        name="first_name"
                        value={data.first_name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('first_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.first_name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="last_name" value="Last Name" /> 

                    <TextInput
                        id="last_name"  
                        name="last_name"    
                        value={data.last_name}  
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('last_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.last_name} className="mt-2" />
                </div>

                
                                {/* Email input field */}
                                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        className="mt-1 block w-full"
                        onChange={handleEmailChange}
                        onBlur={handleBlur}  // Update global state when the user leaves the field
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>


                {/* Conditionally disable studentNumber input */}
                <div className="mt-4">
                    <InputLabel htmlFor="studentNumber" value="Student Number" />
                    <TextInput
    id="studentNumber"
    type="text"
    name="studentNumber"
    value={data.studentNumber}
    className="mt-1 block w-full"
    onChange={e => setData('studentNumber', e.target.value)}
    disabled={!isCICS}  // Only disable if not CICS
    required={isCICS}
/>

                    <InputError message={errors.studentNumber} className="mt-2" />
                </div>


 {/* Radio buttons for user_course */}
 <div className="mt-4">
                    <InputLabel value="Select Your Course" />

                    <div>
                        <label className="mr-4">
                            <input
                                type="radio"
                                name="user_course"
                                value="CS"
                                checked={data.user_course === 'CS'}
                                onChange={(e) => setData('user_course', e.target.value)}
                                required
                            />
                            Computer Science
                        </label>

                        <label className="mr-4">
                            <input
                                type="radio"
                                name="user_course"
                                value="IT"
                                checked={data.user_course === 'IT'}
                                onChange={(e) => setData('user_course', e.target.value)}
                                required
                            />
                            Information Technology
                        </label>

                        <label className="mr-4">
                            <input
                                type="radio"
                                name="user_course"
                                value="IS"
                                checked={data.user_course === 'IS'}
                                onChange={(e) => setData('user_course', e.target.value)}
                                required
                            />
                            Information Systems
                        </label>
                    </div>

                    <InputError message={errors.user_course} className="mt-2" />
                </div>



                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
