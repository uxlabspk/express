import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Loading from "../components/Loading.jsx";


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();

        setLoading(true)
        const postUser = {
            email, password
        }

        // Make POST request using Axios
        axios.post('http://localhost:4000/signin', postUser)
            .then(response => {
                setError(response.data.message);
                setLoading(false)
                setEmail('')
                setPassword('')

                if (response.data.message.match('Successfully login')) {
                    let user = response.data.user
                    delete user['password']
                    localStorage.setItem('user', JSON.stringify({ user }));
                    navigate("/");
                }

            })
            .catch(error => {
                setError("Error " + error.message);
                setLoading(false)
            });
    };

    if (loading)
        return <Loading />


    return (
        <div className="flex h-[90vh] flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="/vite.svg"
                    alt="express logo"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-dark">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSignIn}>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-dark"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                placeholder="Email"
                                name={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} //{(e) => setEmail(e.target.value)}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                    </div>

                    <div>

                        <label
                            htmlFor="password"
                            className="block text-sm font-medium leading-6 text-dark"
                        >
                            Password
                        </label>

                        <div className="mt-2">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                                placeholder="Enter your password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full block text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <div className="mt-4">
                    <p className="text-red-400 font-bold text-center text-red-300">{error}</p>
                </div>

                <div className="mt-4">
                    <p className="text-gray-700 text-center">
                        Don't have an account?
                        <Link to={'/signup'} className={'text-blue-500'}> Create new</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signin