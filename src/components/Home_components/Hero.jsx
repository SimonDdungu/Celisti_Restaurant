import Food_item1 from "../../images/Pictures/Food item 1.png";
import Food_item2 from "../../images/Pictures/Food item 2.png";
import Food_item3 from "../../images/Pictures/Food item 3.png";

import HeroImage from "../../images/Pictures/crispychicken-meal.png";
import Background from "../../images/Pictures/Background 2.jpg"

import NavigationBar from "./NavigationBar";

const Hero = () => {

    return (
        <div className="md:h-screen bg-[#dadccc] overflow-hidden" >

        <NavigationBar />

        <section style={{backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="h-full">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 py-10 md:py-25 px-5 md:px-20" >

                <div>
                    <h1 className="playfair-display-Font text-4xl mb-5 md:mb-10">From Our Chef's Imagination to Your Plate, <br />Experience the Extraordinary</h1>
                    <p className="mb-10 md:mb-15 lora-Font">Every dish we serve is a masterpiece, meticulously crafted to delight your senses and elevate your dining experience. With the finest ingredients and innovative techniques, we bring you a journey that transcends the ordinary. Join us and indulge in a moment of true culinary artistry.</p>

                    <a href="#" className="rounded-full bg-[#002816] px-5 md:px-10 py-3 md:py-5 text-white">Make a Reservation</a>
                </div>
            
                <div className="relative w-1xl ">
                    <div className="z-50 w-80 md:w-125">
                        <img  className="w-full" src={HeroImage} alt="Chips Meal" />
                    </div>
                    
                    {/*
                    <div className="absolute -top-3 left-10 z-10 w-60 rounded-full bg-[#002816]">
                        <img className="w-full" src={Food_item2} alt="Chips Meal" />
                    </div>

                    <div className="absolute bottom-10 right-10 z-30 w-70 rounded-full bg-[#002816]">
                        <img className="w-full" src={Food_item3} alt="Chips Meal" />
                    </div>
                    */}
                    
                </div>

                

            </div>
            
        </section>
        </div>
    );
};

export default Hero;