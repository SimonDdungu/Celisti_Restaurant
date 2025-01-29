import WhyUsCardCollection from "./WhyUsCardCollection";


const Home_WhyUs = () => {
    return (
        <section className="py-20 md:py-40">
            <div className="container mx-auto px-5">
                <h3 className="text-center playfair-display-Font text-4xl mb-10">Why Dine With Us?</h3>
                <h5 className="text-center lora-Font text-lg mb-10 md:mb-15">We're more than just a restaurant—we're an experience.</h5>
                <WhyUsCardCollection />
            </div>
        </section>
    );
};

export default Home_WhyUs;