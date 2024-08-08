import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-[#500404] text-white z-50'>
      <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='text-3xl font-bold'>
          Kantor Notaris <span>Agus Santoso</span>
        </h1>
        {/* Menu untuk perangkat besar */}
        <ul className='hidden lg:flex'>
          <li className='p-4'>
            <Link to="hero" smooth={true} duration={500} spy={true} exact='true'>Home</Link>
          </li>
          <li className='p-4'>
            <Link to="dashboard" smooth={true} duration={500} spy={true} exact='true'>Dashboard</Link>
          </li>
          <li className='p-4'>
            <Link to="contact" smooth={true} duration={500} spy={true} exact='true'>Contact</Link>
          </li>
          <li className='p-4'>
            <Link to="layanan" smooth={true} duration={500} spy={true} exact='true'>Layanan</Link>
          </li>
          <li className='p-4'>
            <Link to="about" smooth={true} duration={500} spy={true} exact='true'>About</Link>
          </li>
        </ul>
        {/* Ikon menu untuk perangkat kecil */}
        <div onClick={handleNav} className='block lg:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      {/* Menu terbuka untuk perangkat kecil */}
      <ul
        className={`lg:hidden fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#500404] ease-in-out duration-500 ${nav ? 'translate-x-0' : 'translate-x-[-100%]'} ${nav ? 'transition-transform' : ''}`}
        style={{
          transition: 'transform 0.3s ease-in-out',
          zIndex: '1000',
        }}
      >
        <h1 className='text-3xl font-bold text-[#ffffff] m-4'>
          Kantor Notaris <span>Agus Santoso</span>
        </h1>
        <li className='p-4 border-b border-white'>
          <Link to="hero" smooth={true} duration={500} spy={true} exact='true' onClick={handleNav}>Home</Link>
        </li>
        <li className='p-4 border-b border-white'>
          <Link to="dashboard" smooth={true} duration={500} spy={true} exact='true' onClick={handleNav}>Dashboard</Link>
        </li>
        <li className='p-4 border-b border-white'>
          <Link to="contact" smooth={true} duration={500} spy={true} exact='true' onClick={handleNav}>Contact</Link>
        </li>
        <li className='p-4 border-b border-white'>
          <Link to="layanan" smooth={true} duration={500} spy={true} exact='true' onClick={handleNav}>Layanan</Link>
        </li>
        <li className='p-4'>
          <Link to="about" smooth={true} duration={500} spy={true} exact='true' onClick={handleNav}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
