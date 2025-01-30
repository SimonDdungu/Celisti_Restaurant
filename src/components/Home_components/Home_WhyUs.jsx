import WhyUsCardCollection from "./WhyUsCardCollection";


const Home_WhyUs = () => {
    return (
        <section className="pt-20 pb-10 md:pb-20 md:pt-30 bg-[#F8FAFC]">
            <div className="container mx-auto px-5">
                <h3 className="text-center playfair-display-Font text-4xl mb-5 md:mb-7">Why Dine With Us?</h3>
                <h5 className="text-center lora-Font text-lg mb-10 md:mb-15">We're more than just a restaurant—we're an experience.</h5>
                <WhyUsCardCollection />
            </div>
        </section>
    );
};

export default Home_WhyUs;