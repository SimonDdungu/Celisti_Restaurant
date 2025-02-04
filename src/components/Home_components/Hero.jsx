import { Link } from 'react-router-dom';
import Shish_kebab_Barbecue from '../../images/Menu/Shish kebab Barbecue Mediterranean cuisine.png'
import Background from "../../images/Pictures/Background 2.jpg"


const Hero = () => {

    return (
        <>
        <div className="overflow-hidden p-0 md:box-border" >

        <section style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="h-full">
            <div className="container mx-auto xl:min-h-screen md:w-screen flex flex-col lg:flex-row justify-between items-center gap-10 pt-32 pb-10 md:pt-39 px-5 lg:px-20" >

                <div>
                    <h1 className="playfair-display-Font text-4xl mb-5 md:mb-7">From Our Chef's Imagination to Your Plate, <br />Elevate Your Dining Experience.</h1>
                    <p className="mb-10 md:mb-10 Lora-Font">Every dish we serve is a masterpiece, meticulously crafted to delight your senses and elevate your dining experience. With the finest ingredients and innovative techniques, we bring you a journey that transcends the ordinary. Join us and indulge in a moment of true culinary artistry.</p>

                    <div className="flex items-center gap-3 md:gap-5">
                        <Link to ="/reservation" className="rounded-full bg-[#153B44] px-5 md:px-7 py-3 md:py-4 text-white hover:bg-(--dark-green) transition-all ease-in-out">Make a Reservation</Link>
                        <Link to ="/under-construction" className="rounded-full bg-white border-3 border-(--lime-green) px-5 md:px-7 py-3 md:py-4 hover:bg-black hover:text-white hover:border-black transition-all ease-in-out">Our Menu</Link>
                    </div>
                </div>
            
                
                    <div className="max-w-100 lg:w-500 lg:max-w-500">
                        <img  className="w-full" src={Shish_kebab_Barbecue} alt="Chips Meal" />
                    </div>
               

                

            </div>
            
        </section>
        </div>

        </>
    );
};

export default Hero;
