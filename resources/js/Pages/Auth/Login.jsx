import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import logo from '../../assets/logo.svg';

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

            <div className="bg-[#A4231C] p-8 rounded-lg shadow-md max-w-md mx-auto">
                <div className="text-center text-white mb-6">
                <img src={logo} alt="College Logo" className="w-24 mx-auto mb-4" />
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

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-sm text-white">Remember me</span>
                        </label>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-white hover:text-gray-300"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>

                <div className="text-center mt-4 text-white">
                    <Link href={route('register')} className="underline text-white hover:text-gray-300">
                        Don’t have an account yet?
                    </Link>
                </div>
            </div>
        </GuestLayout>
    );
}
