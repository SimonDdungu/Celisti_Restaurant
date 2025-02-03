import Customer_100 from '../../images/Pictures/Customer 100.png';
const AboutUs_Main = () => {
    return (
        <section>
            <div className="container mx-auto py-10 px-5 lg:px-20 lg:py-20 flex flex-col lg:flex-row gap-5 lg:gap-10 items-center">
                <div>

                <h3 className="text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10">Welcome To Celesti Restaurant</h3>
                <p className="mb-3">
                    At Celesti Restaurant, we believe food is more than just something to eat. It's a way to bring people together to create memories and share experiences. Our journey started with a simple idea to serve delicious food made with fresh ingredients in a place that feels like home.
                </p>
                <p className="mb-3">
                    We started as a small family-run spot with a handful of tables and a big dream. Every dish was made with care every guest was welcomed like family and every meal was an opportunity to share our love for cooking. Word spread and people kept coming back and soon our little restaurant became a favorite in the community.
                </p>
                <p className="mb-3">
                    Today we still hold on to the same values that got us here. We source the best ingredients, we cook with passion and we serve every plate with a smile. Whether you're here for a quick bite or a special occasion, we want you to feel at home and leave with a full heart and a happy stomach.
                </p>
                <p className="mb-3">
                    This isn't just a place to eat. It's a place to connect to celebrate and to enjoy great food with great company. Come in grab a seat and let's make some memories together.
                </p>

                </div>

                <div className='max-w-full lg:w-500 lg:max-w-500'>
                    <img className="w-full h-full object-cover" src={Customer_100} alt="Customers having a meal" />
                </div>
                
            </div>
        </section>
    );
};

export default AboutUs_Main;