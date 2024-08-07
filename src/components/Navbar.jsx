import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='text-3xl font-bold text-[#ffffff]'>
        Kantor Notaris <span>Agus Santoso</span>
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link to="Hero" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='p-4'>
          <Link to="Dashboard" smooth={true} duration={500}>Dashboard</Link>
        </li>
        <li className='p-4'>
          <Link to="Contact" smooth={true} duration={500}>Contact</Link>
        </li>
        <li className='p-4'>
          <Link to="Layanan" smooth={true} duration={500}>Layanan</Link>
        </li>
        <li className='p-4'>
          <Link to="About" smooth={true} duration={500}>About</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#500404] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='text-3xl font-bold text-[#ffffff] m-4'>
          Kantor Notaris <span>Agus Santoso</span>
        </h1>
        <li className='p-4 border-b border-white'>
          <Link to="Hero" smooth={true} duration={500} onClick={handleNav}>Home</Link>
        </li>
        <li className='p-4 border-b border-white'>
          <Link to="Dashboard" smooth={true} duration={500} onClick={handleNav}>Dashboard</Link>
        </li>
        <li className='p-4 border-b border-white'>
          <Link to="Massage" smooth={true} duration={500} onClick={handleNav}>Contact</Link>
        </li>
        <li className='p-4 border-b border-white'>
          <Link to="Layanan" smooth={true} duration={500} onClick={handleNav}>Layanan</Link>
        </li>
        <li className='p-4'>
          <Link to="About" smooth={true} duration={500} onClick={handleNav}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
