import Banner_image from '../../images/Pictures/chef kitchen 3.jpg';

const AboutUs_Banner = () => {
    return (
        <section className='mt-19' style={{backgroundImage: `url(${Banner_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
            <div className='relative h-100 text-white'>
            <span className="absolute z-10 top-40 left-10 sm:left-40 md:left-60 lg:left-80 xl:top-50 xl:left-120 playfair-display-Font text-4xl">Our</span>
            <span className="absolute z-10 top-40 right-3 sm:right-30 md:right-45 lg:right-60 xl:top-50 xl:right-100 playfair-display-Font text-4xl">Journey</span>
            </div>
        </section>
    );
};

export default AboutUs_Banner;