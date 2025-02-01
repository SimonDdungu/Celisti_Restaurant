import Celesti_Logo from '../../images/logo/Celesti Restaurant Logo only.png';
import Hamburger_Menu from '../../images/icons/burger-menu-green.svg';
import Close_Hamburger_Menu from '../../images/icons/close-burger-menu-green.svg';
import { useState } from 'react';

const NavigationBar = () => {

    const [isMobileNavOpen, setisMobileNavOpen] = useState(false);

    const toggle_mobile_nav = () => {
        setisMobileNavOpen(!isMobileNavOpen);
    }

    return (
        <header className='max-w-screen   relative z-10 shadow-xs'>

        <div className='flex justify-between items-center bg-white fixed top-0 right-0 left-0 px-5 py-2 md:px-20'>
        
        <div className="Nav_logo w-90 mr-auto flex items-center gap-2 playfair-display-Font">
                <img className='w-15' src={Celesti_Logo} alt="Celesti Logo" />
                <span className='block w-full'>Celesti Restaurant</span>
            </div>

                       
            
                <ul className='hidden md:flex gap-10 text-lg font-bold'>
                <li>
                        <a href="#Home">Home</a>
                    </li>
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
                        <a href="#reservations" className="rounded-full bg-[#153B44] px-5 py-3 text-white hover:bg-(--dark-green) transition-all ease-in-out font-normal">Reservation</a>
                    </li>
                </ul>

                <div className='md:hidden'>
                    <button onClick={toggle_mobile_nav}><img alt="Mobile Menu" className="w-10" src={!isMobileNavOpen ? `${Hamburger_Menu}` : `${Close_Hamburger_Menu}`} /></button>
                </div>
                
                {/* Mobile Navigation */}
                <ul className={`flex flex-col md:hidden absolute top-full left-0 right-0 z-10 px-10 pb-3 bg-white shadow-xs ${!isMobileNavOpen ? "h-0" : "h-90"} transition-all ease duration-300 overflow-hidden`}>
                    <li className='py-5'>
                        <a href="#Home">Home</a>
                    </li>
                    <li className='py-5'>
                        <a href="#about">About Us</a>
                    </li>
                    <li className='py-5'>
                        <a href="#Menu">Our Menu</a>
                    </li>
                    <li className='py-5'>
                        <a href="#contact">Contact</a>
                    </li>
                    <li className='py-5'>
                        <a href="#reservations" className='text-(--dark-green) font-bold'>Make a Reservation</a>
                    </li>
                </ul>
        </div>
            

            
            

        </header>
    );
};

export default NavigationBar;