import FeaturedMenuCardCollection from "./FeaturedMenuCardCollection";


const FeaturedMenu = () => {
    return (
        <section className="bg-[#F8F8FF]">
            <div className="container mx-auto py-10 md:py-20">
                <h3 className="text-center playfair-display-Font text-4xl mb-5 md:mb-10">Featured Menu</h3>
                <h5 className="text-center lora-Font text-lg mb-10 md:mb-15">Here are some of our customer favorites, made fresh with the best ingredients.</h5>
                <FeaturedMenuCardCollection />
                <a href="#" className="block w-max mx-auto rounded-full bg-[#153B44] px-5 md:px-7 py-3 md:py-4 text-white hover:bg-(--dark-green) transition-all ease-in-out">Explore Full Menu</a>
            </div>
        </section>
    );
};

export default FeaturedMenu;