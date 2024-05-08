import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function NavBar() {
  const[isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return(
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
        
        <Link to={'/signin'} className='bg-indigo-600 hover:bg-indigo-700 px-8 py-2 rounded-md'>Login</Link>
        
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
