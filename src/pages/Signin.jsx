import GoogleButton from "../components/GoogleButton";
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email);

                navigate("/");
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);

                setError("Invalid Username or Password");
            });
    };

    return (
        <div class="flex min-h-full h-screen min-w-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    class="mx-auto h-10 w-auto"
                    src="/vite.svg"
                    alt="express logo"
                />
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Sign in to your account
                </h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" onSubmit={handleSignIn}>
                    <div>
                        <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-white"
                        >
                            Email address
                        </label>
                        <div class="mt-2">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset focus:outline-none text-white bg-[#1D2432] ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>

                        <label
                            for="password"
                            class="block text-sm font-medium leading-6 text-white"
                        >
                            Password
                        </label>

                        <div class="mt-2">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                                class="block w-full rounded-md border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset focus:outline-none text-white bg-[#1D2432] ring-gray-700 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)]"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in</button>
                    </div>
                </form>

                <div className="mt-4 text-center">
                    <p>OR</p>
                </div>

                <div className="mt-4">
                    <p className="text-red-400 font-bold text-center">{error}</p>
                </div>

                <div className="mt-4">
                    <GoogleButton />
                </div>
            </div>
        </div>

    );
}