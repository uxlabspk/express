import PrimaryButton from "./PrimaryButton.jsx";
import {Link, useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";


export const NavBar = () => {
    const [login, setLogin] = useState(null);
    const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

    useEffect(() => {
        checkUser();
    }, [])

    const checkUser = () => {
        if (JSON.parse(localStorage.getItem('user')) != null)
            setLogin(JSON.parse(localStorage.getItem('user')))
    };

    const toggleAvatarDropdown = () => {
        setOpenAvatarDropdown(!openAvatarDropdown);
    };

    return (
        <div className=' text-dark py-4 border-b'>
            <div className='container mx-auto flex justify-between align-bottom items-center'>
                <h1 className={'font-medium text-xl'}>
                    <Link to={'/'}>Tracking</Link>
                </h1>
                {login ? (
                    <div>
                        <h1 onClick={toggleAvatarDropdown} className={'cursor-pointer'}> { login.user.username } </h1>
                        <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} right-30 z-10 mt-4 w-36  rounded-md bg-white text-black shadow-lg`}>
                            <div className='p-2 flex flex-col border'>
                                <Link onClick={toggleAvatarDropdown} to={'/profile'} className='block p-2 hover:bg-blue-500 rounded-md hover:text-white'>Profile</Link>
                                <Link onClick={toggleAvatarDropdown} to={'/settings'} className='block p-2 hover:bg-blue-500 rounded-md hover:text-white'>Settings</Link>
                                <Link onClick={toggleAvatarDropdown} to={'/signout'} className='block p-2 hover:bg-blue-500 rounded-md hover:text-white'>Sign out</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <PrimaryButton goTo={'/signin'} text={'Sign In'} />
                )}
            </div>
        </div>
    )
}