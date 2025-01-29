import Celisti_Logo from '../../images/logo/Celisti Restaurant Logo only.png';
import Hamburger_Menu from '../../images/icons/burger-menu-green.svg';
import { useState } from 'react';

const NavigationBar = () => {

    const [isMobileNavOpen, setisMobileNavOpen] = useState(false);

    const toggle_mobile_nav = () => {
        setisMobileNavOpen(!isMobileNavOpen);
    }

    return (
        <header className='max-w-screen px-5 py-2 md:px-20 bg-white relative z-10 shadow-xs'>

        <div className='flex justify-between items-center'>
        
        <div className="Nav_logo w-90 mr-auto flex items-center gap-2 playfair-display-Font">
                <img className='w-20' src={Celisti_Logo} alt="Celisti Logo" />
                <span className='block w-full'>Celisti Restaurant</span>
            </div>

                       
            
                <ul className='hidden md:flex gap-10 text-lg font-bold'>
                    <li>
                        <a href="#about">About Us</a>
                    </li>
                    <li>
                        <a href="#Menu">Our Menu</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="#reservations" className="rounded-full bg-[#002816] px-5 py-3 text-white font-">Reservation</a>
                    </li>
                </ul>

                <div className='md:hidden'>
                    <button onClick={toggle_mobile_nav}><img className="w-10" src={ Hamburger_Menu} /></button>
                </div>
        </div>
            

            
            {isMobileNavOpen ? (
                <ul className='flex flex-col md:hidden absolute top-full left-0 right-0 z-10 px-10 pb-3 bg-white shadow-xs'>
                    <li className='py-5'>
                        <a href="#about">About Us</a>
                    </li>
                    <li className='py-5'>
                        <a href="#services">Our Menu</a>
                    </li>
                    <li className='py-5'>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className='py-5'>
                        <a href="#projects">Make a Reservation</a>
                    </li>
                </ul>
            ) : null}

        </header>
    );
};

export default NavigationBar;