import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from '@/assets/logo.svg';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {/* Set the body or parent div to not have a white background */}
            <div className="flex items-center justify-center h-auto bg-[#A4231C] p-8">
                <div className="bg-[#A4231C] p-4 rounded-lg w-full">
                    <div className="text-center text-white mb-6">
                        <img src={logo} alt="Logo" className="w-24 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold">College of Information and Computing Sciences</h1>
                        <p>Capstone Project and Thesis Papers Directory</p>
                    </div>

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-white" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full p-2 rounded-lg border border-gray-300"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" className="text-white" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full p-2 rounded-lg border border-gray-300"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="grid gap-2 mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <span className="ms-2 text-sm text-white">Remember me</span>
                                </div>

                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="underline text-sm text-white hover:text-gray-300"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="text-center mt-4 text-white">
                            <PrimaryButton className=" bg-[#73100B] text-white w-32 flex justify-center items-center px-4 py-2 rounded-lg hover:bg-[#841712]" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>


                        <div className="flex items-center justify-center mt-1">
                            <Link href={route('register')} className="underline text-[12px] text-white hover:text-gray-300">
                                Don’t have an account yet?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
