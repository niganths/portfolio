import React, {useState}from 'react';
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

import Logo from '../assets/logo.png';

const Navbar = () => {
const [nav,setNav] = useState(false)
const handleClick =()=> setNav(!nav)
return (
  <div  className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
      <img src={Logo} alt='Logo Image' style={{ width: '55px',height: '55px' }} />
    </div>
      
          <ul className='hidden md:flex'>
              <li> <Link  to="home"  smooth={true}  duration={500} >
        HOME
      </Link></li>
              <li> <Link  to="about"  smooth={true}  duration={500} >
        ABOUT
      </Link></li>
      <li><Link  to="prof"  smooth={true}  duration={500} >
      SKILLS
      </Link></li>
              <li> <Link  to="skills"  smooth={true}  duration={500} >
        TECH & TOOLS
      </Link></li>
              <li><Link  to="work"  smooth={true}  duration={500} >
        PROJECTS
      </Link></li>
              <li><Link  to="contact"  smooth={true}  duration={500} >
        CONTACT
      </Link></li>
      
          </ul>
      
      <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/>:<FaTimes/>}
      </div>

      <ul className={!nav ? 'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
              <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
        HOME
      </Link></li>
              <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
        ABOUT
      </Link></li>
      <li className='py-6 text-4xl'><Link onClick={handleClick} to="prof"  smooth={true}  duration={500} >
      PROFICIENCY
      </Link></li>
              <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
        SKILLS
      </Link></li>
              <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
        WORK
      </Link></li>
              <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
        CONTACT
      </Link></li>
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/niganth-s-57600722b/'
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://github.com/niganths'
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='mailto:niganth21@gmail.com'
          >j
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://drive.google.com/file/d/127yGZN2H21RkLsDkulopbqlbVl8OKuOA/view?usp=sharing'
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>


      </div>
  </div>
)
}

export default Navbar
