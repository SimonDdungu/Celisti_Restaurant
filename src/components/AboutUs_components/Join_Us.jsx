import {Link} from 'react-router-dom';
const JoinUs = () => {
    return (
        <section className="py-10 md:py-20 px-5 md:px-40 md:pt-30 bg-gray-100">
            <div className="container mx-auto max-w-full md:w-200 md:max-w-500 px-5  py-10 md:py-20 text-center rounded-2xl shadow-md bg-white">
                <h3 className='text-center playfair-display-Font text-2xl md:text-4xl mb-5 md:mb-10'>Join Us and Secure a Spot</h3>
                <p className="mb-10">Great food tastes even better when shared. Secure your spot and enjoy a seamless dining experience at Celesti Restaurant. Whether it's a casual meal or a special occasion, we've got your table waiting!"</p>

                <Link to="/under-construction" className="rounded-full bg-[#153B44] px-5 md:px-7 py-3 md:py-4 text-white hover:bg-(--dark-green) transition-all ease-in-out">Make a Reservation</Link>
            </div>
        </section>
    );
};

export default JoinUs;