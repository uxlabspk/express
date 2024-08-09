import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading.jsx";


const Signup = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignUp = (event) => {
        event.preventDefault()

        setLoading(true)
        const postUser = {...formData}

        // Make POST request using Axios
        axios.post('http://localhost:4000/signup', postUser)
            .then(response => {
                setError(response.data.msg);
                setLoading(false)
                setFormData({})
                navigate("/signin");

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
                    Create new account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSignUp}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-dark"
                        >
                            User name
                        </label>
                        <div className="mt-2">
                            <input
                                type={'text'}
                                placeholder="Username"
                                value={formData.username}
                                name={'username'}
                                onChange={handleInputChange}
                                minLength={6}
                                required
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                    </div>

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
                                value={formData.email}
                                onChange={handleInputChange} //{(e) => setEmail(e.target.value)}
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
                                name={'password'}
                                value={formData.password}
                                onChange={handleInputChange} //{(e) => setPassword(e.target.value)}
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
                            Sign up
                        </button>
                    </div>
                </form>

                <div className="mt-4">
                    <p className="text-center text-red-400">{error}</p>
                </div>

                <div className="mt-4">
                    <p className="text-gray-700 text-center">
                        Already have an account?
                        <Link to={'/signin'} className={'text-blue-500'}> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup