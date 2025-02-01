import Celisti_Logo from '../../images/logo/Celesti Restaurant Logo transparent.png';
import Background from "../../images/Pictures/Background 2.jpg"
import mail from '../../images/icons/mail.png';
import telephone from '../../images/icons/telephone.png';
import location from '../../images/icons/location.png';
import instagram from '../../images/icons/instagram.png';
import twitter from '../../images/icons/twitter.png';
import facebook from '../../images/icons/facebook.png';
import whatsapp from '../../images/icons/whatsapp.png';
import tiktok from '../../images/icons/tiktok.png';


const Footer = () => {
    return (
        <section className='pt-10 md:pt-20' style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className="container mx-auto flex flex-col md:flex-row justify-between gap-5 px-5  mb-10">

                <div className='w-30 md:w-50'>
                    <img className="w-full object-contain"src={Celisti_Logo} alt="Celesti Restaurant Logo" />
                    
                </div>
            

            <div>
                <h6 className='font-bold text-2xl mb-2'>Useful Links</h6>
                <ul>
                    <li className='py-3'>
                        <a href="#Home" className='hover:text-(--dark-green) hover:font-bold hover:underline transition-all ease-in-out'>Home</a>
                    </li>
                    <li className='py-3'>
                        <a href="#about" className='hover:text-(--dark-green) hover:font-bold hover:underline transition-all ease-in-out'>About Us</a>
                    </li>
                    <li className='py-3'>
                        <a href="#Menu" className='hover:text-(--dark-green) hover:font-bold hover:underline transition-all ease-in-out'>Our Menu</a>
                    </li>
                    <li className='py-3'>
                        <a href="#contact" className='hover:text-(--dark-green) hover:font-bold hover:underline transition-all ease-in-out'>Contact</a>
                    </li>
                    <li className='py-3'>
                        <a href="#reservations" className='hover:text-(--dark-green) hover:font-bold hover:underline transition-all ease-in-out'>Reservation</a>
                    </li>
                </ul>
            </div>

            <div>
                <h5 className='font-bold text-2xl mb-2'>Contact Us</h5>
                <div className='flex  items-center gap-2 py-3'>
                    <img src={mail} alt="Email Icon" className='w-5' />
                    <span>celestirestaurant@gmail.com</span>
                </div>
                <div className='flex items-center gap-2 py-3'>
                    <img src={telephone} alt="telephone icon" className='w-5'/>
                    <span>+256-770421734</span>
                </div> 
                <p className='mt-3'>We are located at:</p>
                <div className='flex items-center gap-2 py-3'>
                    <img src={location} alt="location icon" className='w-5'/>
                    <span>Arena Mall, 5th Floor.</span>
                </div>

            </div>
                <div>
                <h5 className='font-bold text-2xl mb-2'>Social</h5>

                <div className='flex items-center gap-5 py-3'>
                    <img src={instagram} alt="instagram icon" className='w-7 cursor-pointer'/>
                    <img src={facebook} alt="facebook icon" className='w-7 cursor-pointer'/>
                    <img src={twitter} alt="twitter icon" className='w-7 cursor-pointer'/>
                    <img src={tiktok} alt="tiktok icon" className='w-7 cursor-pointer'/>
                    <img src={whatsapp} alt="whatsapp icon" className='w-7 cursor-pointer'/>
                </div>
                </div>

            </div>

            <div className='text-center py-5 bg-blue-950'>
                <p className='text-white'>© 2025 Celesti Restaurant. All Rights Reserved.</p>
            </div>
        </section>
    );
};

export default Footer;