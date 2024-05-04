import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';



function NavBar() {
  const[nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return(
    <div className='flex items-center justify-between h-20'>
      <h1 className='text-2xl'>Express</h1>
      <ul className='hidden md:flex gap-5'>
        <li>Colors</li>
        <li>Components</li>
        <li>About</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 bg-gray-900 h-full w-full flex flex-col gap-5 mt-20 p-6 items-center' : 'hidden'}>
        <li>Colors</li>
        <li>Components</li>
        <li>About</li>
      </ul>
    </div>
  );  
}

export default NavBar;
