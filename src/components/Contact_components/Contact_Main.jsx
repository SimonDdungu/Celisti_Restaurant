import Background from "../../images/Pictures/Background 2.jpg"
import mail from '../../images/icons/mail.png';
import telephone from '../../images/icons/telephone.png';
import location from '../../images/icons/location.png';

const Contact_Main = () => {
    return (
        <section className="mt-19 px-5 lg:px-70 pt-10 md:pt-20 pb-10">
            <div className="container mx-auto mb-5">
            <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10">Get In Touch With Us</h3>
            <p>Have a question or special request? We're here for you! Feel free to reach out through the form below, give us a call or visit us in person. We can't wait to connect with you!</p>
            </div>

            <div>

        <div>

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

            </div>
        </section>
    );
};

export default Contact_Main;