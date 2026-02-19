import { Link } from 'react-router-dom'
import Container from './Container'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <header className='bg-primary px-0 py-4 sticky top-0 z-20 shadow-lg h-20 flex items-center justify-center'>
            <Container>
                <div className="flex items-center justify-between">
                    <h2 className='uppercase text-3xl font-semibold text-white'>Willem <span className='text-accent'>April</span></h2>

                    <nav>
                        <ul className='md:flex list-none hidden'>
                            <li className='ml-8'>
                                <Link to="/" className='uppercase text-white font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Home</Link>
                            </li>
                            <li className='ml-8'>
                                <a href="#about" className='uppercase text-white font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>About</a>
                            </li>
                            <li className='ml-8'>
                                <Link to="/projects" className='uppercase text-white font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Projects</Link>
                            </li>
                            <li className='ml-8'>
                                <a href="#contact" className='uppercase text-white font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <button className={`md:hidden block w-8 h-8 text-white transition-all duration-300 ${openMobileMenu ? "rotate-180" : ""}`}
                        onClick={() => {
                            setOpenMobileMenu(prev => !prev);
                        }}
                    >{openMobileMenu ? <IoMdClose className={`w-full h-full`} /> : <IoMenu className='w-full h-full' />}</button>
                </div>
            </Container>
            <nav>
                <ul className={`absolute top-20 right-0 left-0 md:hidden bg-secondary text-black flex ${openMobileMenu ? 'translate-x-0' : 'translate-x-full'} shadow flex-col text-right p-4 py-12 gap-8 transition-transform duration-300 ease-in-out`}>
                    <li className='ml-8'>
                        <Link to="/" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Home</Link>
                    </li>
                    <li className='ml-8'>
                        <Link to="/" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>About</Link>
                    </li>
                    <li className='ml-8'>
                        <Link to="/projects" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Projects</Link>
                    </li>
                    <li className='ml-8'>
                        <Link to="/" className='uppercase font-medium px-4 py-2 hover:bg-gray-200/10 hover:text-accent transition-all duration-300 rounded-sm'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar