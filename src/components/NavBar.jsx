import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAvatarDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown);
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);  

  const signout = () => {
    const auth = getAuth();
    auth.signOut().then(() =>{
      navigate('/');
    }).catch((error) => {
      console.log("Error Occur : ", error);
    });
  }

  return (
    <div className='flex items-center justify-between h-20'>
      <h1 className='text-2xl'>
        <Link to={'/'}>Express</Link>
      </h1>
      <ul className='hidden md:flex items-center gap-5'>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to={'/issues'}>Issues</Link>
        </li>
        <li>
          <Link to={'/teams'}>Teams</Link>
        </li>
        <li>
          <Link to={'/agile'}>Agile</Link>
        </li>
        
        {user ? (
          <div>
            <img src={user.photoURL ? user.photoURL : '/default-user.svg'} alt="user profile pic" width={30} className='rounded-full relative transition-all duration-500 border' onClick={toggleAvatarDropdown} />
            <div className={`absolute ${openAvatarDropdown ? 'block' : 'hidden'} right-10 z-10 mt-2 w-36  rounded-md bg-white text-black shadow-lg`}>
              <div className='p-2 flex flex-col '>
                  <Link to={'/profile'} className='block p-2 hover:bg-indigo-600 rounded-md hover:text-white'>Profile</Link>
                  <Link to={'/settings'} className='block p-2 hover:bg-indigo-600 rounded-md hover:text-white'>Settings</Link>
                  <Link onClick={signout} className='block p-2 hover:bg-indigo-600 rounded-md hover:text-white'>Sign out</Link>
              </div>
            </div>
          </div>
        ) : (
          <Link to={'/signin'} className='bg-indigo-600 hover:bg-indigo-700 px-8 py-2 rounded-md'>Login</Link>
        )}
        
      </ul>
      <div onClick={toggleMenu} className='block md:hidden'>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul className={isOpen ? 'fixed left-0 top-0 w-[50%] h-full bg-gray-900 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-white m-4 mt-8'>Express</h1>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
